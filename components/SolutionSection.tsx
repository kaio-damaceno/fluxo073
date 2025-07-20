
import React from 'react';
import Countdown from './Countdown';

const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 sm:py-24 lg:py-32 bg-cover bg-fixed bg-center" style={{backgroundImage: "url('https://i.imgur.com/s7sWVji.jpeg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.8)'}}>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          A noite que Posto da Mata esperava está chegando.
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Prepare-se para o <span className="font-bold text-red-500">FLUXO 073</span>. Uma experiência do caralho, a maior revoada de PDM.
        </p>
        
        <div className="mt-12">
            <p className="text-lg font-semibold text-gray-200 mb-4 uppercase tracking-widest">Não fique de fora! O evento acontece em:</p>
            <Countdown />
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
             <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-2xl overflow-hidden border-2 border-red-500/50">
                <div className="flex items-center justify-center">
                   <div className="text-center p-8">
                       <h3 className="text-2xl font-bold text-gray-400">VÍDEO DE IMPACTO EM BREVE</h3>
                       <p className="text-gray-500 mt-2">Prepare-se para sentir a energia.</p>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
