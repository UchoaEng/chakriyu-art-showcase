// Utilitário para preload de imagens com prioridade e otimizações avançadas
interface ImageCache {
  src: string;
  loadedAt: number;
  size?: number;
  format?: string;
}

interface NetworkInfo {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
}

export class ImagePreloader {
  private static instance: ImagePreloader;
  private preloadQueue: { src: string; priority: number; retries?: number }[] = [];
  private preloadedImages = new Map<string, ImageCache>();
  private isPreloading = false;
  private maxCacheSize = 50; // Máximo de imagens em cache
  private cacheExpiryTime = 30 * 60 * 1000; // 30 minutos em ms
  private networkInfo: NetworkInfo = {};

  public static getInstance(): ImagePreloader {
    if (!ImagePreloader.instance) {
      ImagePreloader.instance = new ImagePreloader();
    }
    return ImagePreloader.instance;
  }

  constructor() {
    this.detectNetworkConditions();
    this.startCacheCleanup();
  }

  // Detecta condições da rede para ajustar estratégia
  private detectNetworkConditions() {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.networkInfo = {
        effectiveType: connection?.effectiveType,
        downlink: connection?.downlink,
        rtt: connection?.rtt
      };

      connection?.addEventListener('change', () => {
        this.networkInfo = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        };
      });
    }
  }

  // Limpa cache expirado
  private startCacheCleanup() {
    setInterval(() => {
      const now = Date.now();
      const expiredEntries: string[] = [];

      this.preloadedImages.forEach((cache, src) => {
        if (now - cache.loadedAt > this.cacheExpiryTime) {
          expiredEntries.push(src);
        }
      });

      expiredEntries.forEach(src => this.preloadedImages.delete(src));

      // Remove entradas mais antigas se exceder o limite
      if (this.preloadedImages.size > this.maxCacheSize) {
        const sortedEntries = Array.from(this.preloadedImages.entries())
          .sort((a, b) => a[1].loadedAt - b[1].loadedAt);
        
        const toRemove = sortedEntries.slice(0, sortedEntries.length - this.maxCacheSize);
        toRemove.forEach(([src]) => this.preloadedImages.delete(src));
      }
    }, 5 * 60 * 1000); // Verifica a cada 5 minutos
  }

  // Verifica se deve usar formato WebP
  private async supportsWebP(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => resolve(webP.height === 2);
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  // Otimiza URL da imagem com base nas condições
  private optimizeImageUrl(src: string): string {
    // Se for rede lenta, pode ajustar qualidade ou tamanho
    if (this.networkInfo.effectiveType === 'slow-2g' || this.networkInfo.effectiveType === '2g') {
      // Para redes lentas, pode implementar redimensionamento
      // Por enquanto, retorna a imagem original
      return src;
    }

    return src;
  }

  // Adiciona imagem à fila de preload
  public addToQueue(src: string, priority: number = 1) {
    if (this.preloadedImages.has(src)) return;
    
    const optimizedSrc = this.optimizeImageUrl(src);
    
    // Remove duplicatas e adiciona nova entrada
    this.preloadQueue = this.preloadQueue.filter(item => item.src !== optimizedSrc);
    this.preloadQueue.push({ src: optimizedSrc, priority, retries: 0 });
    
    // Ordena por prioridade (maior número = maior prioridade)
    this.preloadQueue.sort((a, b) => b.priority - a.priority);
    
    this.processQueue();
  }

  // Preload de múltiplas imagens com prioridades
  public preloadImages(images: Array<{ src: string; priority?: number }>) {
    images.forEach(({ src, priority = 1 }) => {
      this.addToQueue(src, priority);
    });
  }

  // Determina tamanho do batch baseado na rede
  private getBatchSize(): number {
    const effectiveType = this.networkInfo.effectiveType;
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return 1;
      case '3g':
        return 2;
      case '4g':
      default:
        return 3;
    }
  }

  // Processa a fila de preload
  private async processQueue() {
    if (this.isPreloading || this.preloadQueue.length === 0) return;
    
    this.isPreloading = true;
    
    const batchSize = this.getBatchSize();
    const batch = this.preloadQueue.splice(0, batchSize);
    
    const promises = batch.map(({ src, retries }) => 
      this.preloadSingle(src).catch(() => {
        // Re-adiciona à fila com menor prioridade se falhar
        if ((retries || 0) < 2) {
          this.preloadQueue.push({ 
            src, 
            priority: 1, 
            retries: (retries || 0) + 1 
          });
        }
      })
    );
    
    await Promise.allSettled(promises);
    
    this.isPreloading = false;
    
    // Continue processando se houver mais itens
    if (this.preloadQueue.length > 0) {
      const delay = this.networkInfo.effectiveType === 'slow-2g' ? 500 : 100;
      setTimeout(() => this.processQueue(), delay);
    }
  }

  // Preload de uma única imagem
  private preloadSingle(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      const startTime = Date.now();
      
      const cleanup = (success: boolean) => {
        img.onload = null;
        img.onerror = null;
        
        if (success) {
          this.preloadedImages.set(src, {
            src,
            loadedAt: Date.now(),
            size: img.naturalWidth * img.naturalHeight,
            format: this.getImageFormat(src)
          });
          resolve();
        } else {
          reject(new Error(`Failed to load image: ${src}`));
        }
      };

      img.onload = () => cleanup(true);
      img.onerror = () => cleanup(false);
      
      // Timeout baseado na qualidade da rede
      const timeout = this.getTimeoutForNetwork();
      setTimeout(() => cleanup(false), timeout);
      
      img.src = src;
    });
  }

  // Timeout baseado na rede
  private getTimeoutForNetwork(): number {
    const effectiveType = this.networkInfo.effectiveType;
    
    switch (effectiveType) {
      case 'slow-2g':
        return 30000; // 30s
      case '2g':
        return 20000; // 20s
      case '3g':
        return 15000; // 15s
      case '4g':
      default:
        return 10000; // 10s
    }
  }

  // Detecta formato da imagem
  private getImageFormat(src: string): string {
    const extension = src.split('.').pop()?.toLowerCase();
    return extension || 'unknown';
  }

  // Verifica se uma imagem já foi preloaded
  public isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }

  // Obter informações do cache
  public getCacheInfo(src: string): ImageCache | undefined {
    return this.preloadedImages.get(src);
  }

  // Preload inteligente baseado na posição do viewport
  public preloadNearbyImages(images: string[], currentIndex: number = 0) {
    images.forEach((src, index) => {
      let priority = 3;
      
      if (index === currentIndex) priority = 10;
      else if (index <= currentIndex + 2 && index > currentIndex) priority = 8;
      else if (index >= currentIndex - 2 && index < currentIndex) priority = 6;
      else if (Math.abs(index - currentIndex) <= 5) priority = 4;
      
      this.addToQueue(src, priority);
    });
  }

  // Preload baseado em hover/focus
  public preloadOnHover(src: string) {
    this.addToQueue(src, 7); // Prioridade alta para hover
  }

  // Limpa cache manualmente
  public clearCache() {
    this.preloadedImages.clear();
  }

  // Estatísticas do cache
  public getCacheStats() {
    return {
      size: this.preloadedImages.size,
      maxSize: this.maxCacheSize,
      queueLength: this.preloadQueue.length,
      networkInfo: this.networkInfo
    };
  }
}

// Função helper para uso fácil
export const preloadImage = (src: string, priority?: number) => {
  ImagePreloader.getInstance().addToQueue(src, priority);
};

export const preloadImages = (images: Array<{ src: string; priority?: number }>) => {
  ImagePreloader.getInstance().preloadImages(images);
};

export const preloadOnHover = (src: string) => {
  ImagePreloader.getInstance().preloadOnHover(src);
}; 