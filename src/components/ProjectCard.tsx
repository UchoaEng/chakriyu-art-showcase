import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from './OptimizedImage';
import { preloadOnHover } from '@/utils/imagePreloader';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  skills: string[];
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, category, skills, onClick }: ProjectCardProps) => {
  const handleMouseEnter = () => {
    // Preload da imagem quando hover
    if (image) {
      preloadOnHover(image);
    }
  };

  return (
    <Card 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white dark:bg-gray-800 cursor-pointer"
    >
      <div className="relative overflow-hidden h-64">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
          priority={3}
          placeholder={true}
          aspectRatio="16/9"
          loading="lazy"
        />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-portfolio-pink/90 dark:bg-portfolio-pink/80 text-portfolio-lavender dark:text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-portfolio-lavender dark:group-hover:text-portfolio-pink transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-portfolio-sage/20 dark:bg-portfolio-sage/30 text-portfolio-lavender dark:text-portfolio-pink text-xs rounded transition-colors"
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
