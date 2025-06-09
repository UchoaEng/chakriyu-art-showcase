import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  skills: string[];
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, category, skills, onClick }: ProjectCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
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
