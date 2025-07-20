import React from 'react';

type TicketCardProps = {
  title: string;
  price: React.ReactNode;
  status: string;
  statusColor: string;
  note?: string;
  highlighted?: boolean;
  soldOut?: boolean;
};

const TicketCard: React.FC<TicketCardProps> = ({ title, price, status, statusColor, note, highlighted = false, soldOut = false }) => {
    const cardClasses = highlighted
        ? 'bg-red-900/30 border-2 border-red-500 shadow-2xl shadow-red-500/20 transform md:scale-105'
        : 'bg-zinc-800/50 border-2 border-zinc-700';
    
    const priceClasses = highlighted 
        ? 'text-4xl sm:text-5xl text-white' 
        : (soldOut ? 'text-2xl sm:text-3xl text-gray-500 line-through' : 'text-2xl sm:text-3xl text-gray-400');

    const titleClasses = highlighted ? 'text-xl sm:text-2xl text-white' : 'text-lg sm:text-xl text-gray-400';
    const containerClasses = soldOut ? 'opacity-60' : '';

    return (
        <div className={`p-4 sm:p-6 rounded-lg text-center transition-all duration-300 ${cardClasses} ${containerClasses}`}>
            <h3 className={`font-bold uppercase ${titleClasses}`}>{title}</h3>
            <p className={`font-bold my-2 ${priceClasses}`}>{price}</p>
            <span className={`text-white text-sm font-bold px-4 py-1 rounded-full ${statusColor}`}>{status}</span>
            {note && <p className="text-red-300 text-sm mt-2 font-semibold">{note}</p>}
        </div>
    );
};


const TicketSection: React.FC = () => {
  return (
    <section id="ingressos" className="py-20 sm:py-24 lg:py-32 bg-[#111111] bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(239, 68, 68, 0.4)' }}>
            Garanta seu lugar
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Não fique de fora da melhor noite do ano. Os ingressos são limitados!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
          
          {/* Ingressos Femininos */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-red-500 uppercase tracking-wider mb-2">Ingresso Feminino</h3>
            <TicketCard 
                title="Pré-venda"
                price="GRÁTIS + BÔNUS"
                status="ESGOTADO"
                statusColor="bg-gray-600"
                soldOut
            />
            <TicketCard 
                title="Lote Promocional"
                price="GRÁTIS"
                status="DISPONÍVEL"
                statusColor="bg-red-500 animate-pulse"
                note="ÚLTIMAS UNIDADES!"
                highlighted
            />
             <TicketCard 
                title="1º Lote"
                price="R$ 20,00"
                status="EM BREVE"
                statusColor="bg-zinc-700"
            />
            <TicketCard 
                title="2º Lote"
                price="R$ 40,00"
                status="EM BREVE"
                statusColor="bg-zinc-700"
            />
          </div>

          {/* Ingressos Masculinos */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-red-500 uppercase tracking-wider mb-2">Ingresso Masculino</h3>
             <TicketCard 
                title="Pré-venda"
                price="GRÁTIS"
                status="ESGOTADO"
                statusColor="bg-gray-600"
                soldOut
            />
             <TicketCard 
                title="Lote Promocional"
                price="R$ 15,00"
                status="ESGOTADO"
                statusColor="bg-gray-600"
                soldOut
            />
            <TicketCard 
                title="1º Lote"
                price={<><span className="line-through text-gray-400 text-xl mr-2">R$ 30,00</span><span className="text-white text-3xl font-bold">R$ 25,00</span></> as any}
                status="DISPONÍVEL"
                statusColor="bg-red-500 animate-pulse"
                note="Desconto especial por tempo limitado!"
                highlighted
            />
            <TicketCard 
                title="2º Lote"
                price="R$ 50,00"
                status="EM BREVE"
                statusColor="bg-zinc-700"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
             <a 
                href="#" // Placeholder for Sympla link
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white py-4 px-8 text-lg sm:py-5 sm:px-16 sm:text-2xl font-bold uppercase tracking-wider hover:bg-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg ticket-button-glow"
            >
                Comprar meu ingresso agora!
            </a>
            <p className="mt-4 text-sm text-gray-400">
                Compra 100% segura. Receba o ingresso por e-mail via Sympla.
            </p>
        </div>

      </div>
    </section>
  );
};

export default TicketSection;