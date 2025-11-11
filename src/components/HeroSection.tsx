import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-cream via-white to-portfolio-pink/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 md:pt-0 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Ilustração/Avatar */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-portfolio-pink to-portfolio-purple dark:from-portfolio-pink/80 dark:to-portfolio-purple/80 rounded-full flex items-center justify-center animate-float">
              <img
                src="/Profile.jpg"
                alt="Rebecca Chakrian"
                className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Rebecca
            <span className="block text-portfolio-lavender dark:text-portfolio-pink">Chakrian</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto transition-colors">
            Designer Gráfica & Ilustradora
          </p>

          {/* Descrição */}
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors">
            Designer Gráfica com experiência em marketing digital, branding, campanhas visuais, e-mail marketing, redes sociais e materiais institucionais. Atua na criação de layouts, identidade visual e peças digitais com foco em performance e engajamento. Perfil criativo, colaborativo e orientado a resultados.
          </p>

          {/* Localização */}
          <p className="text-portfolio-lavender dark:text-portfolio-pink font-medium mb-8 transition-colors">
            📍 João Pessoa, PB - Brasil
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center bg-portfolio-lavender-dark hover:bg-portfolio-lavender-dark/90 dark:bg-portfolio-pink dark:hover:bg-portfolio-pink/90 text-white dark:text-portfolio-gray px-8 py-3 text-lg font-medium rounded-md transition-colors"
            >
              Entrar em Contato
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center border-2 border-portfolio-lavender-dark text-portfolio-lavender-dark hover:bg-portfolio-lavender-dark hover:text-white dark:border-portfolio-pink dark:text-portfolio-pink dark:hover:bg-portfolio-pink dark:hover:text-portfolio-gray px-8 py-3 text-lg font-medium rounded-md transition-colors"
            >
              Ver Projetos
            </button>
          </div>

          {/* Tags de habilidades */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Design Gráfico', 'Ilustração', 'Branding', 'Marketing Visual', 'Arte Digital'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-portfolio-pink/30 dark:bg-portfolio-pink/20 text-portfolio-lavender dark:text-portfolio-pink rounded-full text-sm font-medium transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
