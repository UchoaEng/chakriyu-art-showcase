import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5581987648229?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
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
            Mixed media artist inspirada por arte, narrativa visual e criatividade. 
            Especialista em branding, identidade visual e ilustração digital.
          </p>

          {/* Localização */}
          <p className="text-portfolio-lavender dark:text-portfolio-pink font-medium mb-8 transition-colors">
            📍 João Pessoa, PB - Brasil
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="bg-portfolio-lavender hover:bg-portfolio-lavender/90 dark:bg-portfolio-pink dark:hover:bg-portfolio-pink/90 text-white px-8 py-3 text-lg transition-colors"
            >
              Ver Portfólio
            </Button>
            <Button
              variant="outline"
              onClick={openWhatsApp}
              className="border-portfolio-lavender text-portfolio-lavender hover:bg-portfolio-lavender hover:text-white dark:border-portfolio-pink dark:text-portfolio-pink dark:hover:bg-portfolio-pink dark:hover:text-white px-8 py-3 text-lg transition-colors"
            >
              Entrar em Contato
            </Button>
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
