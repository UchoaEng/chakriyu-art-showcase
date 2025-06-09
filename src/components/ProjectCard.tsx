import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  skills: string[];
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, category, skills, onClick }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Card 
      onClick={onClick}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white cursor-pointer"
    >
      <div className="relative overflow-hidden h-64">
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-portfolio-lavender"></div>
          </div>
        )}
        
        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-2xl mb-2">🖼️</div>
              <div className="text-sm">Imagem não encontrada</div>
            </div>
          </div>
        )}

        {/* Imagem principal */}
        {image && !hasError && (
          <img
            src={image}
            alt={title}
            className={`w-full h-64 object-cover group-hover:scale-110 transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            decoding="async"
          />
        )}
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-portfolio-pink/90 text-portfolio-lavender text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-portfolio-lavender transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-portfolio-sage/20 text-portfolio-lavender text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
