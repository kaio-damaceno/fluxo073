import React from 'react';
import { InstagramIcon, WhatsAppIcon } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-3xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80">
                FLUXO <span className="text-red-500">073</span>
            </a>
            <p className="text-sm text-gray-500 mt-2">A noite que Posto da Mata nunca viu.</p>
          </div>
          
          {/* Copyright - reordered for better flex flow */}
           <div className="text-center order-last md:order-none">
                <p className="text-sm text-gray-400">&copy; {currentYear} Fluxo 073. Todos os direitos reservados.</p>
                <p className="text-xs text-gray-500 mt-1">Posto da Mata, BA</p>
           </div>


          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="#" target="https://www.instagram.com/fluxo_073" rel="noopener noreferrer" aria-label="Instagram do Fluxo 073" className="text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110">
              <InstagramIcon className="w-7 h-7" />
            </a>
            <a href="#" target="https://wa.me/5573999284068" rel="noopener noreferrer" aria-label="WhatsApp do Fluxo 073" className="text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110">
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;