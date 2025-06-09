import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectData } from '@/data/projects';
import { preloadImages } from '@/utils/imagePreloader';

// Carrega dinamicamente apenas as imagens que realmente existem
const allImagePaths = import.meta.glob('/public/projects/**/*.{png,jpg,jpeg,gif}', { 
  query: '?url', 
  import: 'default',
  eager: true 
});

const processedProjects = projectData.map(project => {
  // Pega apenas os caminhos das imagens deste projeto específico e remove o prefixo '/public'
  const projectImages = Object.keys(allImagePaths)
    .filter(path => path.includes(`/projects/${project.folder}/`))
    .map(path => path.replace('/public', ''));

  // Encontra a imagem thumbnail ('tbm.*')
  const thumbnail = projectImages.find(path => path.toLowerCase().includes('/tbm.')) || '';
  
  // Filtra e ordena as imagens do carrossel (numeradas, excluindo tbm)
  const carouselImages = projectImages
    .filter(path => !path.toLowerCase().includes('/tbm.'))
    .sort((a, b) => {
      const numA_match = a.match(/(\d+)\.\w+$/);
      const numB_match = b.match(/(\d+)\.\w+$/);
      
      if (!numA_match || !numB_match) return 0;

      const numA = parseInt(numA_match[1], 10);
      const numB = parseInt(numB_match[1], 10);
      return numA - numB;
    });

  return {
    ...project,
    thumbnail: thumbnail || carouselImages[0] || '', // fallback para primeira imagem se não houver tbm
    images: carouselImages
  };
});

// Hook para Intersection Observer
const useIntersectionObserver = (options = {}) => {
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
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
};

// Componente do card com lazy loading
const LazyProjectCard = ({ project, index, onClick }: { 
  project: any; 
  index: number; 
  onClick: () => void; 
}) => {
  const [elementRef, isIntersecting] = useIntersectionObserver();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isIntersecting && !shouldRender) {
      setShouldRender(true);
    }
  }, [isIntersecting, shouldRender]);

  return (
    <div 
      ref={elementRef}
      className="animate-fade-in min-h-[400px]" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {shouldRender ? (
        <ProjectCard 
          {...project} 
          image={project.thumbnail} 
          onClick={onClick}
        />
      ) : (
        // Placeholder enquanto não carrega
        <div className="h-full bg-gray-100 rounded-lg animate-pulse">
          <div className="h-64 bg-gray-200 rounded-t-lg"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Preload inicial dos thumbnails
  useEffect(() => {
    const thumbnailsToPreload = processedProjects
      .filter(project => project.thumbnail)
      .map((project, index) => ({
        src: project.thumbnail,
        priority: index < 3 ? 5 : 3 // Primeiros 3 têm prioridade maior
      }));

    preloadImages(thumbnailsToPreload);
  }, []);

  const categories = ["Todos", "Branding", "Ilustração", "Design de Produto", "Arte Digital"];

  return (
    <>
      <section id="projects" className="py-20 bg-portfolio-cream/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes em design gráfico, 
              ilustração e branding, demonstrando versatilidade e criatividade.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-portfolio-lavender border border-portfolio-lavender rounded-full hover:bg-portfolio-lavender hover:text-white transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedProjects.map((project, index) => (
              <LazyProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-portfolio-sage to-portfolio-purple p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
              <p className="text-lg mb-6 opacity-90">
                Vamos conversar sobre o seu próximo projeto
              </p>
              <button className="bg-white text-portfolio-lavender px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </>
  );
};

export default ProjectsSection;
