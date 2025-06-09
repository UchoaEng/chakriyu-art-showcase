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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-cream via-white to-portfolio-pink/20 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Ilustração/Avatar */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-portfolio-pink to-portfolio-purple rounded-full flex items-center justify-center animate-float">
              <img
                src="/Profile.jpg"
                alt="Rebecca Chakrian"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Rebecca
            <span className="block text-portfolio-lavender">Chakrian</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Designer Gráfica & Ilustradora
          </p>

          {/* Descrição */}
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mixed media artist inspirada por arte, narrativa visual e criatividade. 
            Especialista em branding, identidade visual e ilustração digital.
          </p>

          {/* Localização */}
          <p className="text-portfolio-lavender font-medium mb-8">
            📍 João Pessoa, PB - Brasil
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-white px-8 py-3 text-lg"
            >
              Ver Portfólio
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border-portfolio-lavender text-portfolio-lavender hover:bg-portfolio-lavender hover:text-white px-8 py-3 text-lg"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Tags de habilidades */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Design Gráfico', 'Ilustração', 'Branding', 'Marketing Visual', 'Arte Digital'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-portfolio-pink/30 text-portfolio-lavender rounded-full text-sm font-medium"
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
