
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ArtistsSection from './components/ArtistsSection';
import SocialProofSection from './components/SocialProofSection';
import TicketSection from './components/TicketSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0c0c0c] text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ArtistsSection />
        <SocialProofSection />
        <TicketSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
