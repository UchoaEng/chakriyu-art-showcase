import { useState, useEffect, useRef, useCallback } from 'react';
import { ImagePreloader } from '@/utils/imagePreloader';

interface UseImageOptimizationOptions {
  src: string;
  alt: string;
  priority?: number;
  placeholder?: boolean;
  sizes?: string;
  quality?: number;
}

interface ImageState {
  isLoaded: boolean;
  isLoading: boolean;
  hasError: boolean;
  currentSrc: string;
}

// Hook para otimização de imagens
export const useImageOptimization = ({
  src,
  alt,
  priority = 1,
  placeholder = true,
  sizes = '100vw',
  quality = 85
}: UseImageOptimizationOptions) => {
  const [imageState, setImageState] = useState<ImageState>({
    isLoaded: false,
    isLoading: false,
    hasError: false,
    currentSrc: ''
  });

  const imgRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(img);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(img);

    return () => observer.unobserve(img);
  }, []);

  // Carregamento da imagem quando está em view
  useEffect(() => {
    if (!isInView || !src) return;

    setImageState(prev => ({ ...prev, isLoading: true }));

    // Preload usando nosso sistema existente
    const preloader = ImagePreloader.getInstance();
    preloader.addToQueue(src, priority);

    const img = new Image();
    
    img.onload = () => {
      setImageState({
        isLoaded: true,
        isLoading: false,
        hasError: false,
        currentSrc: src
      });
    };

    img.onerror = () => {
      setImageState({
        isLoaded: false,
        isLoading: false,
        hasError: true,
        currentSrc: ''
      });
    };

    img.src = src;
  }, [isInView, src, priority]);

  return {
    imgRef,
    imageState,
    isInView
  };
};

// Hook para Intersection Observer reutilizável
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
};

// Hook para preload baseado em scroll
export const useScrollPreload = (images: string[], threshold: number = 0.3) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollProgress > threshold) {
      const preloader = ImagePreloader.getInstance();
      images.forEach((src, index) => {
        preloader.addToQueue(src, Math.max(5 - index, 1));
      });
    }
  }, [scrollProgress, threshold, images]);

  return scrollProgress;
}; 