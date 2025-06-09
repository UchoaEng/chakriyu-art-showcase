
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Wave - Loja de Presentes",
      description: "Identidade visual completa para loja de presentes, incluindo logo, paleta de cores e aplicações em diferentes materiais.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      category: "Branding",
      skills: ["Identidade Visual", "Design Gráfico", "Branding"]
    },
    {
      title: "Natureba - Cosméticos Naturais",
      description: "Design de embalagens sustentáveis para linha de cosméticos naturais, priorizando elementos orgânicos e cores terrosas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Design de Produto",
      skills: ["Design de Embalagem", "Sustentabilidade", "Branding"]
    },
    {
      title: "Doce Miau - Cat Café",
      description: "Identidade visual fofa e aconchegante para cat café, combinando elementos felinos com design acolhedor.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop",
      category: "Identidade Visual",
      skills: ["Ilustração", "Branding", "Design de Personagem"]
    },
    {
      title: "Just Married (or not) - Characters",
      description: "Desenvolvimento de personagens para projeto editorial, explorando narrativas visuais e expressões emocionais.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      category: "Ilustração",
      skills: ["Design de Personagem", "Ilustração Digital", "Narrativa Visual"]
    },
    {
      title: "Children's Book Cover",
      description: "Capa ilustrada para livro infantil, criando uma composição que desperta curiosidade e convida à leitura.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Ilustração Editorial",
      skills: ["Ilustração", "Design Editorial", "Arte Infantil"]
    },
    {
      title: "Twitch Arts Collection",
      description: "Coleção de emotes, badges e alerts para streamers da Twitch, com foco em expressividade e reconhecimento rápido.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      category: "Arte Digital",
      skills: ["Arte para Streaming", "Emotes", "Design Digital"]
    }
  ];

  const categories = ["Todos", "Branding", "Ilustração", "Design de Produto", "Arte Digital"];

  return (
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
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
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
  );
};

export default ProjectsSection;
