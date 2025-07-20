import React from 'react';
import type { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
  highlighted?: boolean;
  superHighlighted?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, highlighted = false, superHighlighted = false }) => {
  const isPrivate = message.type === 'private';
  
  const isUserResponse = ['Fer', 'Júlia', 'Marcos', 'Jessica', 'Matheus', 'Bruno', 'Fábio', 'Beatriz', 'Sofia R.', 'Pedro H.'].includes(message.sender);
  
  const bubbleColor = isPrivate 
    ? (isUserResponse ? 'bg-green-800' : 'bg-zinc-700')
    : 'bg-zinc-800';
  
  const senderColors = [
      'text-red-400', 'text-blue-400', 'text-green-400', 'text-yellow-400', 'text-purple-400', 'text-pink-400'
  ];
  const senderColor = senderColors[message.sender.length % senderColors.length];

  const highlightClasses = superHighlighted
    ? 'scale-110 sm:scale-125 ring-2 ring-red-600 shadow-2xl shadow-red-600/40'
    : highlighted
    ? 'scale-105 sm:scale-110 ring-2 ring-red-500/70 shadow-2xl shadow-red-500/20'
    : '';
  
  const textSizeClass = superHighlighted ? 'text-base' : 'text-sm';

  return (
    <div className={`rounded-xl px-3 py-2 sm:px-4 sm:py-3 max-w-[220px] sm:max-w-[250px] shadow-lg transition-transform duration-300 ${bubbleColor} ${highlightClasses}`}>
      {message.type === 'group' && <p className={`text-xs sm:text-sm font-bold ${senderColor}`}>{message.sender}</p>}
      <p className={`text-white break-words ${textSizeClass}`}>{message.message}</p>
    </div>
  );
};

export default ChatBubble;