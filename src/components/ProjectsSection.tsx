import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectData } from '@/data/projects';
import { preloadImages } from '@/utils/imagePreloader';
import { useIntersectionObserver, useScrollPreload } from '@/hooks/useImageOptimization';

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

// Componente do card com lazy loading otimizado
const LazyProjectCard = ({ project, index, onClick }: { 
  project: any; 
  index: number; 
  onClick: () => void; 
}) => {
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px' // Carrega quando está 100px antes de aparecer
  });
  const [shouldRender, setShouldRender] = useState(index < 3); // Primeiros 3 carregam imediatamente

  useEffect(() => {
    if (isIntersecting && !shouldRender) {
      setShouldRender(true);
    }
  }, [isIntersecting, shouldRender]);

  return (
    <div 
      ref={elementRef}
      className="animate-fade-in min-h-[400px]" 
      style={{ 
        animationDelay: `${Math.min(index * 0.1, 0.5)}s`,
        animationFillMode: 'both'
      }}
    >
      {shouldRender ? (
        <ProjectCard 
          {...project} 
          image={project.thumbnail} 
          onClick={onClick}
        />
      ) : (
        // Skeleton placeholder melhorado
        <div className="h-full bg-white dark:bg-gray-800 rounded-lg border-0 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="animate-pulse">
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-t-lg"></div>
            <div className="p-6">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4"></div>
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 w-18 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Preload baseado em scroll
  const allImages = processedProjects
    .flatMap(project => [project.thumbnail, ...project.images])
    .filter(Boolean);
  
  useScrollPreload(allImages, 0.2); // Começa preload quando scroll atinge 20%

  // Preload inicial otimizado
  useEffect(() => {
    const criticalImages = processedProjects
      .slice(0, 6) // Primeiros 6 projetos
      .filter(project => project.thumbnail)
      .map((project, index) => ({
        src: project.thumbnail,
        priority: index < 3 ? 8 : 5 // Primeiros 3 têm prioridade maior
      }));

    preloadImages(criticalImages);
  }, []);

  const categories = ["Todos", "Branding", "Ilustração", "Design de Produto", "Arte Digital", "Identidade Visual", "Ilustração Editorial"];

  // Filtrar projetos
  const filteredProjects = activeFilter === "Todos" 
    ? processedProjects 
    : processedProjects.filter(project => project.category === activeFilter);

  // Preload imagens do filtro selecionado
  useEffect(() => {
    if (activeFilter !== "Todos") {
      const filterImages = filteredProjects
        .filter(project => project.thumbnail)
        .map((project, index) => ({
          src: project.thumbnail,
          priority: index < 3 ? 6 : 3
        }));
      
      preloadImages(filterImages);
    }
  }, [activeFilter, filteredProjects]);

  return (
    <>
      <section id="projects" className="py-20 bg-portfolio-cream/30 dark:bg-gray-800/30 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              Projetos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Uma seleção dos meus trabalhos mais recentes em design gráfico, 
              ilustração e branding, demonstrando versatilidade e criatividade.
            </p>
          </div>

          {/* Filtros melhorados */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-portfolio-lavender dark:bg-portfolio-pink text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-portfolio-lavender dark:text-portfolio-pink border border-portfolio-lavender dark:border-portfolio-pink hover:bg-portfolio-lavender hover:text-white dark:hover:bg-portfolio-pink dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Contador de projetos */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} 
              {activeFilter !== "Todos" && ` em ${activeFilter}`}
            </p>
          </div>

          {/* Grid de Projetos com transição */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredProjects.map((project, index) => (
              <LazyProjectCard
                key={`${activeFilter}-${index}`} // Key única para trigger animação
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Mensagem quando não há projetos */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-portfolio-sage to-portfolio-purple dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl text-gray-800 dark:text-gray-100 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Gostou do que viu?</h3>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-200 transition-colors">
                Vamos conversar sobre o seu próximo projeto
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-white dark:bg-gray-800 text-portfolio-lavender-dark dark:text-portfolio-pink border-2 border-portfolio-lavender-dark dark:border-portfolio-pink rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-portfolio-lavender-dark hover:text-white dark:hover:bg-portfolio-pink dark:hover:text-portfolio-gray transition-all duration-200"
              >
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
