import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="h-[90vh] min-h-[600px] sm:h-[85vh] sm:min-h-[600px] flex items-center justify-center relative bg-cover bg-center" style={{backgroundImage: "url('https://i.imgur.com/s7sWVji.jpeg')"}}>
       <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
       <div className="relative z-10 text-center px-4 flex flex-col items-center">
            <img 
                src="favicon.png" 
                alt="Fluxo 073 Logo" 
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 sm:mb-8 animate-fade-in-up"
                style={{animationDelay: '0.2s', opacity: 0}}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-white animate-fade-in-up" style={{animationDelay: '0.4s', opacity: 0}}>
                A espera acabou.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.6s', opacity: 0}}>
                A noite que Posto da Mata nunca viu está chegando para mudar tudo.
            </p>
            <a 
                href="#ingressos" 
                className="mt-8 sm:mt-10 bg-red-600 text-white py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl font-bold uppercase tracking-wider hover:bg-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg ticket-button-glow animate-fade-in-up"
                style={{animationDelay: '0.8s', opacity: 0}}
            >
                Quero meu ingresso!
            </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
    </section>
  );
};

export default HeroSection;