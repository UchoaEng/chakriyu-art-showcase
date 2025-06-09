import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

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
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1 flex justify-center">
                        <img 
                          src={image} 
                          alt={`${project.title} - imagem ${index + 1}`} 
                          className="max-w-full max-h-[60vh] object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => setZoomedImage(image)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14" />
                <CarouselNext className="mr-14" />
              </Carousel>
              <div className="mt-6">
                  <h3 className="text-lg font-bold mb-3">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                      <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
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
              <img 
                src={zoomedImage} 
                alt="Imagem ampliada" 
                className="max-w-full max-h-full object-contain cursor-pointer"
                onClick={() => setZoomedImage(null)}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProjectModal; 