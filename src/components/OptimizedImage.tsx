import { useState, useRef, useEffect } from 'react';
import { useImageOptimization } from '@/hooks/useImageOptimization';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: number;
  placeholder?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  aspectRatio?: string;
}

// Gera blur placeholder simples
const generateBlurDataURL = (width: number = 10, height: number = 10) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Gradiente simples para placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
};

// Componente de imagem otimizada
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = 1,
  placeholder = true,
  sizes = '100vw',
  quality = 85,
  onClick,
  blurDataURL,
  loading = 'lazy',
  aspectRatio
}: OptimizedImageProps) => {
  const { imgRef, imageState, isInView } = useImageOptimization({
    src,
    alt,
    priority,
    placeholder,
    sizes,
    quality
  });

  const [placeholderSrc] = useState(() => 
    blurDataURL || (placeholder ? generateBlurDataURL() : '')
  );

  const containerStyles = aspectRatio 
    ? { aspectRatio } 
    : {};

  // Estados de loading
  const showPlaceholder = placeholder && !imageState.isLoaded && !imageState.hasError;
  const showError = imageState.hasError;
  const showLoading = imageState.isLoading && !imageState.isLoaded;

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={containerStyles}
      onClick={onClick}
    >
      {/* Placeholder com blur */}
      {showPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          {placeholderSrc && (
            <img
              src={placeholderSrc}
              alt=""
              className="w-full h-full object-cover filter blur-md scale-110"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 bg-gray-100/20 dark:bg-gray-800/20" />
        </div>
      )}

      {/* Loading spinner */}
      {showLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-portfolio-lavender dark:border-t-portfolio-pink" />
        </div>
      )}

      {/* Estado de erro */}
      {showError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          <div className="text-3xl mb-2">🖼️</div>
          <div className="text-sm text-center px-4">
            Erro ao carregar imagem
          </div>
        </div>
      )}

      {/* Imagem principal */}
      {imageState.isLoaded && (
        <img
          src={imageState.currentSrc}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 ease-out",
            "opacity-0 animate-fade-in",
            onClick && "cursor-pointer hover:scale-105"
          )}
          style={{
            opacity: imageState.isLoaded ? 1 : 0,
            transform: imageState.isLoaded ? 'scale(1)' : 'scale(1.02)'
          }}
          loading={loading}
          decoding="async"
        />
      )}

      {/* Overlay para hover effect */}
      {onClick && imageState.isLoaded && (
        <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-200" />
      )}
    </div>
  );
};

// Componente para galeria com lazy loading
export const ImageGallery = ({ 
  images, 
  className = '',
  itemClassName = '',
  onImageClick 
}: {
  images: Array<{ src: string; alt: string; priority?: number }>;
  className?: string;
  itemClassName?: string;
  onImageClick?: (src: string, index: number) => void;
}) => {
  return (
    <div className={cn("grid gap-4", className)}>
      {images.map((image, index) => (
        <OptimizedImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          priority={image.priority || (index < 3 ? 5 : 1)}
          className={itemClassName}
          onClick={() => onImageClick?.(image.src, index)}
        />
      ))}
    </div>
  );
};

export default OptimizedImage; 