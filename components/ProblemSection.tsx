import React from 'react';
import ChatBubble from './ChatBubble';
import { CHAT_MESSAGES } from '../constants';
import type { ChatMessage } from '../types';

// A helper for post icons
const PostActionIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
        {children}
    </button>
);

const HeartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>);
const CommentIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>);
const ShareIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 6m4-4v12" /></svg>);


const ProblemSection: React.FC = () => {
    const posts = CHAT_MESSAGES.filter(m => m.type === 'post');
    const chats = CHAT_MESSAGES.filter(m => m.type !== 'post');

    const positions = [
        { top: '2%', left: '5%' }, { top: '5%', left: '20%' }, { top: '1%', left: '35%' }, { top: '4%', left: '50%' }, { top: '0%', left: '65%' }, { top: '5%', left: '80%' }, { top: '2%', left: '95%' },
        { top: '3%', left: '-2%' }, { top: '6%', left: '102%' },
        { top: '12%', left: '10%' }, { top: '15%', left: '28%' }, { top: '10%', left: '45%' }, { top: '14%', left: '60%' }, { top: '11%', left: '75%' }, { top: '16%', left: '90%' },
        { top: '13%', left: '1%' }, { top: '10%', left: '100%' },
        { top: '25%', left: '3%' }, { top: '22%', left: '18%' }, { top: '26%', left: '33%' }, { top: '21%', left: '48%' }, { top: '25%', left: '63%' }, { top: '22%', left: '78%' }, { top: '27%', left: '93%' },
        { top: '24%', left: '-5%' }, { top: '20%', left: '104%' },
        { top: '38%', left: '8%' }, { top: '35%', left: '25%' }, { top: '39%', left: '40%' }, { top: '34%', left: '55%' }, { top: '38%', left: '70%' }, { top: '35%', left: '85%' }, { top: '39%', left: '98%' },
        { top: '36%', left: '0%' },
        { top: '50%', left: '5%' }, { top: '53%', left: '20%' }, { top: '48%', left: '35%' }, { top: '52%', left: '50%' }, { top: '49%', left: '65%' }, { top: '54%', left: '80%' }, { top: '50%', left: '95%' },
        { top: '51%', left: '-4%' }, { top: '48%', left: '101%' },
        { top: '63%', left: '12%' }, { top: '60%', left: '28%' }, { top: '65%', left: '42%' }, { top: '61%', left: '58%' }, { top: '64%', left: '72%' }, { top: '60%', left: '88%' },
        { top: '62%', left: '2%' }, { top: '65%', left: '103%' },
        { top: '75%', left: '6%' }, { top: '78%', left: '22%' }, { top: '74%', left: '38%' }, { top: '79%', left: '53%' }, { top: '75%', left: '68%' }, { top: '77%', left: '83%' }, { top: '73%', left: '97%' },
        { top: '76%', left: '-1%' },
        { top: '88%', left: '10%' }, { top: '92%', left: '25%' }, { top: '87%', left: '40%' }, { top: '93%', left: '55%' }, { top: '88%', left: '70%' }, { top: '91%', left: '85%' }, { top: '89%', left: '99%' },
        { top: '90%', left: '-3%' }, { top: '94%', left: '103%' },
        { top: '8%', left: '55%' }, { top: '18%', left: '5%' }, { top: '30%', left: '90%' }, { top: '42%', left: '15%' }, { top: '55%', left: '92%' }, { top: '68%', left: '8%' }, { top: '80%', left: '95%' },
        { top: '85%', left: '50%' }, { top: '95%', left: '60%' }, { top: '70%', left: '30%' }, { top: '58%', left: '60%' }, { top: '46%', left: '88%' }, { top: '33%', left: '12%' }, { top: '23%', left: '88%' },
        { top: '80%', left: '30%' }, { top: '60%', left: '5%' }, { top: '95%', left: '5%' }, { top: '98%', left: '45%' }, { top: '82%', left: '65%' }, { top: '67%', left: '50%' }, { top: '50%', left: '106%' }
    ];

    const highlightedChats = [
        chats.find(c => c.message.includes("Sério que não vai ter nada")),
        chats.find(c => c.message.includes("Cidade parada demais")),
        chats.find(c => c.message.includes("Essa cidade não tem jeito")),
        chats.find(c => c.message.includes("falta de opção... ou é lanche ou é praça")),
        chats.find(c => c.message.includes("Não tem um show, uma festa, nada")),
        chats.find(c => c.message.includes("story de gente em festa em outra cidade")),
        chats.find(c => c.message.includes("fds desistiu da gente")),
    ].filter((c): c is ChatMessage => !!c); 

    const highlightedPositions = [
        { top: '10%', left: '5%' },
        { top: '30%', right: '10%' },
        { top: '55%', left: '15%' },
        { top: '80%', right: '5%' },
        { top: '5%', right: '30%' },
        { top: '85%', left: '35%' },
        { top: '40%', left: '45%' },
    ];

    const highlightedPositionsMobile = [
        { top: '5%', left: '10%' }, { top: '15%', right: '10%' },
        { top: '30%', left: '5%' }, { top: '45%', right: '15%' },
        { top: '60%', left: '15%' }, { top: '75%', right: '5%' },
        { top: '88%', left: '20%' },
    ];

    const superHighlightedChats = [
        chats.find(c => c.message.includes("Nessa roça não tem nada")),
        chats.find(c => c.message.includes("Porra, essa cidade não tem nada dahora")),
    ].filter((c): c is ChatMessage => !!c);

    const superHighlightedPositions = [
        { top: '25%', left: '25%' },
        { top: '70%', right: '20%' },
    ];

    const superHighlightedPositionsMobile = [
        { top: '20%', left: '50%', transform: 'translateX(-50%)' },
        { top: '68%', left: '50%', transform: 'translateX(-50%)' },
    ];


    return (
        <section id="problema" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#111111] to-[#0c0c0c] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wider">
                        Sextou em Posto da Mata...
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-400">
                        A gente sabe. Rolar o feed, pensar em ir para a praça... e acabar em casa.
                        Posto da Mata merece mais. <span className="text-red-500 font-bold">Você merece mais.</span>
                    </p>
                </div>
                
                <div className="mt-16 relative h-[600px] w-full">
                    {/* Background bubbles hidden on mobile */}
                    <div className="absolute inset-0 filter blur-sm opacity-40 hidden sm:block">
                         {chats.map((msg, index) => {
                            const pos = positions[index % positions.length];
                            const style = { top: pos.top, left: pos.left };
                            return (
                               <div key={`bg-${index}`} className="absolute" style={{...style}}>
                                    <ChatBubble message={msg} />
                               </div>
                            )
                        })}
                    </div>
                    
                    {/* Desktop Highlighted Bubbles */}
                    <div className="absolute inset-0 hidden sm:block">
                        {highlightedChats.map((msg, index) => {
                            const pos = highlightedPositions[index];
                             if (!pos) return null;
                            return (
                                <div key={`highlight-desk-${index}`} className="animate-fade-in-up absolute" style={{...pos, animationDelay: `${index * 0.2 + 0.6}s`, opacity: 0}}>
                                    <ChatBubble message={msg} highlighted={true} />
                                </div>
                            )
                        })}
                        {superHighlightedChats.map((msg, index) => {
                            const pos = superHighlightedPositions[index];
                            if (!pos) return null;
                            return (
                                <div key={`super-highlight-desk-${index}`} className="animate-fade-in-up absolute" style={{...pos, animationDelay: `${1.5 + index * 0.2}s`, opacity: 0, zIndex: 10}}>
                                    <ChatBubble message={msg} superHighlighted={true} />
                                </div>
                            )
                        })}
                    </div>

                    {/* Mobile Highlighted Bubbles */}
                     <div className="absolute inset-0 sm:hidden">
                        {highlightedChats.map((msg, index) => {
                            const pos = highlightedPositionsMobile[index];
                             if (!pos) return null;
                            return (
                                <div key={`highlight-mob-${index}`} className="animate-fade-in-up absolute" style={{...pos, animationDelay: `${index * 0.15 + 0.5}s`, opacity: 0}}>
                                    <ChatBubble message={msg} highlighted={true} />
                                </div>
                            )
                        })}
                        {superHighlightedChats.map((msg, index) => {
                            const pos = superHighlightedPositionsMobile[index];
                            if (!pos) return null;
                            return (
                                <div key={`super-highlight-mob-${index}`} className="animate-fade-in-up absolute" style={{...pos, animationDelay: `${1.2 + index * 0.2}s`, opacity: 0, zIndex: 10}}>
                                    <ChatBubble message={msg} superHighlighted={true} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 animate-fade-in-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}>
                            <div className="p-4">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg text-white">
                                        {post.sender.charAt(0)}
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-bold text-white">{post.sender}</p>
                                        <p className="text-xs text-gray-400">Posto da Mata, BA</p>
                                    </div>
                                </div>
                                <p className="text-gray-200 mb-4 text-sm">{post.message}</p>
                            </div>
                             <div className="mt-auto flex justify-around items-center border-t border-zinc-700 p-2">
                                <PostActionIcon><HeartIcon /> <span className="text-xs">13</span></PostActionIcon>
                                <PostActionIcon><CommentIcon/> <span className="text-xs">5</span></PostActionIcon>
                                <PostActionIcon><ShareIcon/></PostActionIcon>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black text-red-600 uppercase tracking-tighter" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                        Chega. A espera acabou.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;