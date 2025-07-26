import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { ImagePreloader } from "@/utils/imagePreloader";
import { OptimizedImage } from "./OptimizedImage";
import type { CarouselApi } from "@/components/ui/carousel";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[];
    skills: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload da primeira imagem quando o modal abre
  useEffect(() => {
    if (isOpen && project?.images?.[0]) {
      const preloader = ImagePreloader.getInstance();
      preloader.addToQueue(project.images[0], 10); // Alta prioridade para primeira imagem
      
      // Preload inteligente de todas as imagens
      preloader.preloadNearbyImages(project.images, 0);
    }
  }, [isOpen, project]);

  // Configurar carousel API
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrentSlide(selected);
      
      // Preload inteligente baseado na slide atual
      if (project?.images) {
        ImagePreloader.getInstance().preloadNearbyImages(project.images, selected);
      }
    };

    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api, project]);

  if (!project) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[95vh] w-[95vw] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>
              {project.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto pr-4">
              <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <OptimizedImage
                          src={image}
                          alt={`${project.title} - imagem ${index + 1}`}
                          className="max-w-full max-h-[60vh] object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => setZoomedImage(image)}
                          priority={index === 0 ? 10 : index < 3 ? 8 : 5}
                          loading={index === 0 ? "eager" : "lazy"}
                          placeholder={true}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
              </Carousel>
              
              {/* Indicador de slide */}
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-portfolio-lavender' : 'bg-gray-300'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>

              <div className="mt-6">
                  <h3 className="text-lg font-bold mb-3">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                      <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors">{skill}</span>
                  ))}
                  </div>
              </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Zoom */}
      {zoomedImage && (
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[98vw] max-h-[98vh] w-auto h-auto p-2 bg-black/90">
            <div className="flex items-center justify-center h-full">
              <OptimizedImage
                src={zoomedImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain cursor-pointer"
                onClick={() => setZoomedImage(null)}
                priority={10}
                loading="eager"
                placeholder={false}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProjectModal; 