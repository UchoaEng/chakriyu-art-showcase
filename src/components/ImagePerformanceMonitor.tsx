import { useState, useEffect } from 'react';
import { ImagePreloader } from '@/utils/imagePreloader';

interface PerformanceStats {
  cacheSize: number;
  maxSize: number;
  queueLength: number;
  networkInfo: any;
  totalLoaded: number;
  averageLoadTime: number;
}

// Componente para monitorar performance (apenas em desenvolvimento)
export const ImagePerformanceMonitor = () => {
  const [stats, setStats] = useState<PerformanceStats | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadTimes, setLoadTimes] = useState<number[]>([]);

  useEffect(() => {
    // Só mostra em desenvolvimento
    if (import.meta.env.DEV) {
      const updateStats = () => {
        const preloader = ImagePreloader.getInstance();
        const cacheStats = preloader.getCacheStats();
        
        setStats({
          ...cacheStats,
          totalLoaded: loadTimes.length,
          averageLoadTime: loadTimes.length > 0 
            ? Math.round(loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length)
            : 0
        });
      };

      const interval = setInterval(updateStats, 1000);
      updateStats();

      return () => clearInterval(interval);
    }
  }, [loadTimes]);

  // Monitora tempos de carregamento
  useEffect(() => {
    if (import.meta.env.DEV) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByType('navigation');
        entries.forEach((entry: any) => {
          if (entry.name.includes('.jpg') || entry.name.includes('.png') || entry.name.includes('.webp')) {
            setLoadTimes(prev => [...prev.slice(-10), entry.duration]); // Mantém apenas os últimos 10
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        // Performance Observer não suportado
      }

      return () => observer.disconnect();
    }
  }, []);

  if (!import.meta.env.DEV || !stats) return null;

  const getNetworkColor = () => {
    switch (stats.networkInfo.effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'text-red-500';
      case '3g':
        return 'text-yellow-500';
      case '4g':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 text-white p-2 rounded-full shadow-lg hover:bg-black/90 transition-colors"
        title="Monitor de Performance de Imagens"
      >
        📊
      </button>

      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 min-w-[300px] text-sm">
          <h3 className="font-bold mb-3 text-gray-900 dark:text-white">
            Performance de Imagens
          </h3>
          
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Cache:</span>
              <span>{stats.cacheSize}/{stats.maxSize}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Fila:</span>
              <span>{stats.queueLength} pendentes</span>
            </div>
            
            <div className="flex justify-between">
              <span>Carregadas:</span>
              <span>{stats.totalLoaded}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Tempo médio:</span>
              <span>{stats.averageLoadTime}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span>Rede:</span>
              <span className={getNetworkColor()}>
                {stats.networkInfo.effectiveType || 'Desconhecida'}
              </span>
            </div>
            
            {stats.networkInfo.downlink && (
              <div className="flex justify-between">
                <span>Velocidade:</span>
                <span>{stats.networkInfo.downlink} Mbps</span>
              </div>
            )}
            
            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Cache: {Math.round((stats.cacheSize / stats.maxSize) * 100)}% usado
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
                <div 
                  className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((stats.cacheSize / stats.maxSize) * 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => {
                ImagePreloader.getInstance().clearCache();
                setLoadTimes([]);
              }}
              className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-2 rounded transition-colors"
            >
              Limpar Cache
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePerformanceMonitor; 