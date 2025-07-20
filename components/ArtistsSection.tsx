
import React, { useState, useEffect } from 'react';
import { ARTISTS } from '../constants';
import type { Artist } from '../types';

// Modal Component to display artist flyer
const FlyerModal: React.FC<{ flyerUrl: string; onClose: () => void }> = ({ flyerUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in-up"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
    >
      <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={flyerUrl}
          alt="Flyer do Artista"
          className="w-full h-auto rounded-lg shadow-2xl border-2 border-red-500/50 object-contain max-h-[90vh]"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Fechar flyer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const ArtistsSection: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <>
      <section id="artistas" className="py-20 sm:py-24 lg:py-32 bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wider">
              Atrações Confirmadas
            </h2>
            <p className="mt-4 text-lg text-gray-400">Conheça quem vai comandar o baile.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <img 
                src="DJMT.PNG" 
                alt="Flyer do Evento Fluxo 073 com DJ MT de Aracruz"
                className="w-full h-auto rounded-lg shadow-2xl border-2 border-red-500/30 object-cover"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-red-500 uppercase">Line-up Explosivo</h3>
                <ul className="mt-4 space-y-2">
                  {ARTISTS.map((artist, index) => (
                    <li 
                      key={index} 
                      className="flex items-center group cursor-pointer"
                      onClick={() => setSelectedArtist(artist)}
                    >
                      <span className="text-red-500 mr-3 transition-transform duration-300 group-hover:translate-x-1">►</span>
                      <span className="text-xl text-gray-200 font-medium transition-colors duration-300 group-hover:text-red-500">{artist.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-3 italic">Clique no nome de um artista para ver mais.</p>
              </div>
              
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-2xl font-bold text-red-500 uppercase mb-4">Informações</h3>
                  <div className="space-y-3">
                      <p><strong className="text-gray-300">Data:</strong> Sexta-feira, 06 de Setembro</p>
                      <p><strong className="text-gray-300">Horário:</strong> A partir das 22:00</p>
                      <p><strong className="text-gray-300">Local:</strong> Em breve</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedArtist && <FlyerModal flyerUrl={selectedArtist.flyerUrl} onClose={() => setSelectedArtist(null)} />}
    </>
  );
};
export default ArtistsSection;
