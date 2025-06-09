// Utilitário para preload de imagens com prioridade
export class ImagePreloader {
  private static instance: ImagePreloader;
  private preloadQueue: { src: string; priority: number }[] = [];
  private preloadedImages = new Set<string>();
  private isPreloading = false;

  public static getInstance(): ImagePreloader {
    if (!ImagePreloader.instance) {
      ImagePreloader.instance = new ImagePreloader();
    }
    return ImagePreloader.instance;
  }

  // Adiciona imagem à fila de preload
  public addToQueue(src: string, priority: number = 1) {
    if (this.preloadedImages.has(src)) return;
    
    // Remove duplicatas e adiciona nova entrada
    this.preloadQueue = this.preloadQueue.filter(item => item.src !== src);
    this.preloadQueue.push({ src, priority });
    
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

  // Processa a fila de preload
  private async processQueue() {
    if (this.isPreloading || this.preloadQueue.length === 0) return;
    
    this.isPreloading = true;
    
    // Processa até 3 imagens em paralelo
    const batch = this.preloadQueue.splice(0, 3);
    
    const promises = batch.map(({ src }) => this.preloadSingle(src));
    
    await Promise.allSettled(promises);
    
    this.isPreloading = false;
    
    // Continue processando se houver mais itens
    if (this.preloadQueue.length > 0) {
      setTimeout(() => this.processQueue(), 100);
    }
  }

  // Preload de uma única imagem
  private preloadSingle(src: string): Promise<void> {
    return new Promise((resolve) => {
      if (this.preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      
      const cleanup = () => {
        img.onload = null;
        img.onerror = null;
        this.preloadedImages.add(src);
        resolve();
      };

      img.onload = cleanup;
      img.onerror = cleanup;
      
      // Timeout de 10 segundos
      setTimeout(cleanup, 10000);
      
      img.src = src;
    });
  }

  // Verifica se uma imagem já foi preloaded
  public isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }

  // Preload inteligente baseado na posição do viewport
  public preloadNearbyImages(images: string[], currentIndex: number = 0) {
    // Prioridade: atual (10), próximas 2 (8), anteriores 2 (6), resto (3)
    images.forEach((src, index) => {
      let priority = 3;
      
      if (index === currentIndex) priority = 10;
      else if (index <= currentIndex + 2 && index > currentIndex) priority = 8;
      else if (index >= currentIndex - 2 && index < currentIndex) priority = 6;
      
      this.addToQueue(src, priority);
    });
  }
}

// Função helper para uso fácil
export const preloadImage = (src: string, priority?: number) => {
  ImagePreloader.getInstance().addToQueue(src, priority);
};

export const preloadImages = (images: Array<{ src: string; priority?: number }>) => {
  ImagePreloader.getInstance().preloadImages(images);
}; 