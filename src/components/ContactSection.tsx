
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vamos Trabalhar Juntos
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estou sempre aberta a novos projetos e oportunidades. 
              Se você tem uma ideia ou precisa de ajuda com design, 
              vamos conversar!
            </p>

            {/* Informações de contato */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-pink rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender font-bold">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">chakriyuartist@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-sage/30 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Localização</h3>
                  <p className="text-gray-600">João Pessoa, PB - Brasil</p>
                  <p className="text-sm text-portfolio-lavender">Disponível para trabalho remoto</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-purple/30 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-lavender font-bold">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Disponibilidade</h3>
                  <p className="text-gray-600">Aberta para projetos freelance</p>
                  <p className="text-sm text-portfolio-lavender">Membro desde Junho 2020</p>
                </div>
              </div>
            </div>

            {/* Links sociais */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Conecte-se Comigo</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-portfolio-lavender text-white rounded-full flex items-center justify-center hover:bg-portfolio-lavender/80 transition-colors"
                >
                  Be
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-portfolio-lavender text-white rounded-full flex items-center justify-center hover:bg-portfolio-lavender/80 transition-colors"
                >
                  Li
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-portfolio-cream/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudá-la..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-lavender hover:bg-portfolio-lavender/90 text-white py-3 text-lg"
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
