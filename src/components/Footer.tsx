import { BehanceIcon, LinkedInIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-pink mb-4">
              Rebecca Chakrian
            </h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed transition-colors">
              Designer gráfica e ilustradora especializada em criar 
              experiências visuais que contam histórias únicas.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase().replace('í', 'i')}`);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 dark:text-gray-400 hover:text-portfolio-pink transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
              <p>chakriyuartist@gmail.com</p>
              <p>João Pessoa, PB - Brasil</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.behance.net/chakriyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-gray-400 hover:text-portfolio-pink transition-colors flex items-center space-x-2"
                >
                  <BehanceIcon size={20} />
                  <span>Behance</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rebecca-chakrian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-gray-400 hover:text-portfolio-pink transition-colors flex items-center space-x-2"
                >
                  <LinkedInIcon size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center transition-colors">
          <p className="text-gray-400 dark:text-gray-500 transition-colors">
            © {new Date().getFullYear()} Rebecca Chakrian. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
