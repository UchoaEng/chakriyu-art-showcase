const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-portfolio-sage to-portfolio-purple dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                  alt="Rebecca trabalhando"
                  className="w-full h-full object-cover mix-blend-overlay dark:mix-blend-soft-light"
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-pink dark:bg-portfolio-pink/80 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              Sobre Mim
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              <p className="text-lg">
                Sou uma <strong className="text-portfolio-lavender dark:text-portfolio-pink">mixed media artist</strong> apaixonada 
                por criar experiências visuais que contam histórias. Minha inspiração vem da beleza feminina, 
                fofura, gatos, plantas e boa comida - elementos que se refletem em meu trabalho criativo.
              </p>

              <p>
                Atualmente trabalho como <strong className="text-portfolio-lavender dark:text-portfolio-pink">Assistente de Marketing na Softplan</strong>, 
                onde combino conhecimentos de arte e narrativa visual em projetos diversos. Esta experiência me 
                permite unir criatividade com estratégia de marketing.
              </p>

              <p>
                Minha formação inclui <strong className="text-portfolio-lavender dark:text-portfolio-pink">Graduação em Artes Visuais</strong> (iniciada) 
                e <strong className="text-portfolio-lavender dark:text-portfolio-pink">Design Gráfico</strong> (cursando atualmente), 
                proporcionando uma base sólida tanto teórica quanto prática.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-portfolio-cream dark:bg-gray-700 rounded-xl transition-colors">
                <div className="text-2xl font-bold text-portfolio-lavender dark:text-portfolio-pink transition-colors">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-portfolio-cream dark:bg-gray-700 rounded-xl transition-colors">
                <div className="text-2xl font-bold text-portfolio-lavender dark:text-portfolio-pink transition-colors">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Projetos Realizados</div>
              </div>
            </div>

            {/* Habilidades */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Habilidades Principais</h3>
              <div className="space-y-3">
                {[
                  { skill: 'Design Gráfico & Identidade Visual', level: 95 },
                  { skill: 'Ilustração Digital', level: 90 },
                  { skill: 'Branding & Marketing Visual', level: 85 },
                  { skill: 'Arte para Streaming', level: 80 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{item.skill}</span>
                      <span className="text-sm text-portfolio-lavender dark:text-portfolio-pink transition-colors">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-portfolio-pink to-portfolio-lavender dark:from-portfolio-pink/80 dark:to-portfolio-pink h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
