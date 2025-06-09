import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BehanceIcon, LinkedInIcon } from './SocialIcons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato! Retornarei em breve.",
    });
    
    // Limpar formulário
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              Vamos Trabalhar Juntos
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
              Estou sempre aberta a novos projetos e oportunidades. 
              Se você tem uma ideia ou precisa de ajuda com design, 
              vamos conversar!
            </p>

            {/* Informações de contato */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-pink dark:bg-portfolio-pink/80 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender dark:text-white font-bold">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">chakriyuartist@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5581987648229?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    +55 (81) 98764-8229
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Clique para conversar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-sage/30 dark:bg-portfolio-sage/50 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender dark:text-portfolio-pink font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Localização</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">João Pessoa, PB - Brasil</p>
                  <p className="text-sm text-portfolio-lavender dark:text-portfolio-pink transition-colors">Disponível para trabalho remoto</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-purple/30 dark:bg-portfolio-purple/50 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender dark:text-portfolio-pink font-bold">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Disponibilidade</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">Aberta para projetos freelance</p>
                  <p className="text-sm text-portfolio-lavender dark:text-portfolio-pink transition-colors">Membro desde Junho 2020</p>
                </div>
              </div>
            </div>

            {/* Links sociais */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conecte-se Comigo</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.behance.net/chakriyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-portfolio-lavender-dark dark:bg-portfolio-pink text-white dark:text-portfolio-gray rounded-full flex items-center justify-center hover:bg-portfolio-lavender-dark/80 dark:hover:bg-portfolio-pink/80 transition-colors"
                >
                  <BehanceIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rebecca-chakrian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-portfolio-lavender-dark dark:bg-portfolio-pink text-white dark:text-portfolio-gray rounded-full flex items-center justify-center hover:bg-portfolio-lavender-dark/80 dark:hover:bg-portfolio-pink/80 transition-colors"
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-portfolio-cream/50 dark:bg-gray-800/50 p-8 rounded-2xl transition-colors">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudá-la..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-lavender-dark hover:bg-portfolio-lavender-dark/90 dark:bg-portfolio-pink dark:hover:bg-portfolio-pink/90 text-white dark:text-portfolio-gray py-3 text-lg font-medium rounded-md transition-colors"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
