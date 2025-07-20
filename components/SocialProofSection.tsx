
import React from 'react';
import { MusicIcon, UsersIcon, SparklesIcon, CameraIcon } from '../constants';

const benefits = [
  {
    icon: MusicIcon,
    title: 'Música de Qualidade',
    description: 'Os melhores artistas para você não ficar parado um segundo sequer.'
  },
  {
    icon: UsersIcon,
    title: 'Encontre geral',
    description: 'O lugar perfeito para socializar, encontrar amigos, fazer novas amizades e você sabe oque mais...'
  },
  {
    icon: SparklesIcon,
    title: 'Drinks Especiais',
    description: 'Um bar completo com drinks inovadores e bebidas fodas para acompanhar o ritmo da festa.'
  },
  {
    icon: CameraIcon,
    title: 'Ambiente Instagramável',
    description: 'Uma estrutura e iluminação pensadas para você postar os melhores momentos.'
  }
];

const testimonials = [
    {
        quote: "Estamos trazendo para Posto da Mata a estrutura e a energia que a nossa cidade sempre mereceu. O Fluxo 073 não é só uma festa, é o início de um novo movimento.",
        name: "Organização Fluxo 073",
        role: "Realizadores do Evento"
    },
    {
        quote: "Estou preparando um set especial para fazer o Fluxo 073 tremer! Mal posso esperar para encontrar vocês na pista.",
        name: "DJ MT de Aracruz",
        role: "Atração Principal"
    },
    {
        quote: "Posto da Mata, preparem-se! Vou levar o melhor do funk pra vocês, a pista vai ferver. Conto com a presença de todos no Fluxo 073!",
        name: "DJ BRITIS",
        role: "Atração Confirmada"
    }
]

const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 sm:py-24 lg:py-32 bg-[#0c0c0c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wider">
            Por que você não pode perder?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-red-500 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <benefit.icon className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                 <blockquote key={index} className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
                    <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                    <footer className="mt-6">
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-red-500">{testimonial.role}</p>
                    </footer>
                </blockquote>
            ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;