import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectData } from '@/data/projects';

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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard 
                  {...project} 
                  image={project.thumbnail} 
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Gostou do que viu? Vamos criar algo incrível juntos!
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      </section>
      
      <ProjectModal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </>
  );
};

export default ProjectsSection;
