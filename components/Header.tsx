import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#problema', text: 'Por quê?' },
    { href: '#solucao', text: 'O Evento' },
    { href: '#artistas', text: 'Atrações' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold tracking-tighter text-white">
                FLUXO <span className="text-red-500">073</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors duration-300 uppercase tracking-wider">
                  {link.text}
                </a>
              ))}
            </nav>
            <div className="flex items-center">
               <a href="#ingressos" className="hidden sm:block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-transform duration-300 hover:scale-105 shadow-md">
                QUERO IR!
              </a>
              <div className="md:hidden ml-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Abrir menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-2xl font-semibold text-gray-200 hover:text-red-500 transition-colors duration-300 uppercase tracking-wider"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {link.text}
                </a>
                ))}
            </nav>
            <a 
                href="#ingressos" 
                className="mt-12 bg-red-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition-transform duration-300 hover:scale-105 shadow-md"
                onClick={() => setIsMenuOpen(false)}
            >
                QUERO MEU INGRESSO!
            </a>
        </div>
      </div>
    </>
  );
};

export default Header;