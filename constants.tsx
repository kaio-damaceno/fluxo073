import React from 'react';
import { ChatMessage, Artist } from './types';


export const MusicIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8v8m4-12v16m4-14v12m4-10v8m4-12v16" />
  </svg>
);

export const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5l9 9 9-9H3zM12 14v8M8 22h8" />
    </svg>
);

export const CameraIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const CHAT_MESSAGES: ChatMessage[] = [
  // Posts for ProblemSection grid
  { sender: '@****', message: "Já n guento mais Posto da Mata. Alguém me tira daqui! #tédio", type: 'post' },
  { sender: '@****', message: "Sextou com S de 'Sentada no sofá de casa'. Fazer o que, né? #PostoDaMata", type: 'post' },
  { sender: '@****', message: "Tem oq emPDM? TMNC", type: 'post' },
  { sender: '@****', message: "Alguém sabe de alguma festa de verdade que vai rolar por aqui? Ou só evento de merda?", type: 'post' },

  // Chat bubbles for scattered display
  { sender: 'Bia', message: "FDS chegou... e aí, novidades?", type: 'group' },
  { sender: 'Léo', message: "Novidade em Posto da Mata? kkkk só se for de outro planeta", type: 'group' },
  { sender: 'Carla', message: "Nossa, que desânimo gente. Mas é verdade.", type: 'group' },
  { sender: 'Gabi', message: "Amiga, alguma boa pra hj?", type: 'private' },
  { sender: 'Fer', message: "Tô caçando... mas até agora NADA. 😴", type: 'private' },
  { sender: 'Pedrão', message: "Alguém topa uma praça?", type: 'group' },
  { sender: 'Rafa', message: "De novo? Aff...", type: 'group' },
  { sender: 'Tiago', message: "Bora fazer alguma coisa?", type: 'private' },
  { sender: 'Júlia', message: "O quê? Não tem um show, uma festa, nada... Desanimei.", type: 'private' },
  { sender: 'Duda', message: "gente, pelo amor de deus, me falem que tem algo diferente pra fazer", type: 'group' },
  { sender: 'Vitor', message: "Se achar me avisa que eu vou junto kkkk", type: 'group' },
  { sender: 'Ana', message: "E aí? Fazer o que hoje?", type: 'private' },
  { sender: 'Marcos', message: "Sei lá, as mesmas coisas de sempre.", type: 'private' },
  { sender: 'Lucas', message: "Tédio define meu sábado.", type: 'group' },
  { sender: 'Mari', message: "O meu também. Cidade parada demais.", type: 'group' },
  { sender: 'Rodrigo', message: "Sério que não vai ter nada esse fds dnv?", type: 'group' },
  { sender: 'Amanda', message: "Tô achando que não... que m...", type: 'group' },
  { sender: 'Felipinho', message: "Bora pra Teixeira então?", type: 'group' },
  { sender: 'Bruna', message: "Mano, que preguiça de ir pra Teixeira...", type: 'group' },
  { sender: 'Carol', message: "Amg, vamos no açaí?", type: 'private' },
  { sender: 'Jessica', message: "Ah não, de novo não. Queria uma festa.", type: 'private' },
  { sender: 'Vinicius', message: "Essa cidade não tem jeito, é sempre a mesma coisa.", type: 'group' },
  { sender: 'Laura', message: "Podia ter um showzinho pelo menos...", type: 'group' },
  { sender: 'Isabela', message: "Oi, vai fazer o que hj?", type: 'private' },
  { sender: 'Matheus', message: "Nada. Absolutamente nada. Pq?", type: 'private' },
  { sender: 'Isabela', message: "Tava pensando em ir no espetinho", type: 'private' },
  { sender: 'Matheus', message: "Afe, lá de novo?", type: 'private' },
  { sender: 'JV', message: "E aí família, qual a boa de hoje? Não me digam que é praça...", type: 'group' },
  { sender: 'Carlão', message: "A boa é aqui no bar, cerveja gelada e a mesma música de sempre kkk", type: 'group' },
  { sender: 'Vanessa', message: "Precisamos de um evento URGENTE!", type: 'group' },
  { sender: 'Kaio', message: "Alguém aí com ingresso pro show em Itabatã?", type: 'group' },
  { sender: 'Larissa', message: "Eu não... mó rolê ir pra lá.", type: 'group' },
  { sender: 'Letícia', message: "Bora chamar um lanche e ficar em casa vendo série?", type: 'private' },
  { sender: 'Bruno', message: "Melhor que nada né... 🙄", type: 'private' },
  { sender: 'Thiaguinho', message: "PDM = Posto da Mesmice", type: 'group' },
  { sender: 'Renata', message: "Já vi todos os filmes da Netflix, não aguento mais.", type: 'group' },
  { sender: 'Diego', message: "Se alguém souber de algum rolê secreto me chama kkk", type: 'group' },
  { sender: 'Patrícia', message: "O que mata é a falta de opção... ou é lanche ou é praça.", type: 'private' },
  { sender: 'Fábio', message: "Exato! Queria um lugar pra dançar, ouvir música alta.", type: 'private' },
  { sender: 'Clara', message: 'E aí, galera, desistiram do fds?', type: 'group' },
  { sender: 'Ricardo', message: 'Acho que o fds desistiu da gente aqui em PDM kkk', type: 'group' },
  { sender: 'Sophia', message: 'Amiga, sério, vamo pra Teixeira?', type: 'private' },
  { sender: 'Beatriz', message: 'Ai, amiga... que cansaço só de pensar.', type: 'private' },
  { sender: 'Daniel', message: 'Alguém topa um fut na quadra mais tarde?', type: 'group' },
  { sender: 'Guilherme', message: 'Futebol pra esquecer a tristeza kkkk topo', type: 'group' },
  { sender: 'Eduarda', message: 'Queria era uma festa pra ir de vestido e não de chuteira', type: 'group' },
  { sender: 'Lucas M.', message: 'PDM parou no tempo. Nada muda.', type: 'group' },
  { sender: 'Helena', message: 'A gente podia fazer nosso próprio rolê!', type: 'group' },
  { sender: 'Igor', message: 'Tipo o quê? Juntar na praça e ouvir som no carro?', type: 'group' },
  { sender: 'Helena', message: 'É uma opção melhor que NENHUMA opção.', type: 'group' },
  { sender: 'Mariana C.', message: 'Miga, o que vamos fazer?', type: 'private' },
  { sender: 'Sofia R.', message: 'Tô quase indo dormir pra pular pro domingo.', type: 'private' },
  { sender: 'Caio S.', message: 'Ouvi um boato de uma festa... "Fluxo 073"', type: 'group' },
  { sender: 'Miguel', message: 'Eu vi um cartaz! Mas não sei se é verdade.', type: 'group' },
  { sender: 'Giovanna', message: 'Se for verdade, eu sou a primeira a comprar ingresso!', type: 'group' },
  { sender: 'Henrique', message: 'Alguém tem o link??', type: 'group' },
  { sender: 'Rafael V.', message: 'Ainda não vi nada oficial.', type: 'group' },
  { sender: 'Rebeca', message: 'Bora no açaí pela 5ª vez na semana?', type: 'private' },
  { sender: 'Pedro H.', message: 'Só se vc pagar kkkk. Tô sem grana pra rolê que não anima.', type: 'private' },
  { sender: 'Yasmin', message: 'Sdds de um evento que a gente fica ansioso pra ir', type: 'group' },
  { sender: 'Breno', message: 'Sdds de ter o que fazer num sábado à noite', type: 'group' },
  { sender: 'Catarina', message: 'Se eu ver mais um story de gente em festa em outra cidade eu surto', type: 'group' },
  { sender: 'Enzo', message: 'Somos 2... A gente merecia um rolê nosso.', type: 'group' },
  { sender: 'Paulinha', message: "Nessa roça não tem nada, pqp", type: 'group'},
  { sender: 'Karol', message: "Porra, essa cidade não tem nada dahora", type: 'group'},
];

export const ARTISTS: Artist[] = [
    { name: 'DJ MT DE ARACRUZ', flyerUrl: 'https://i.imgur.com/hF7oKzh.png' },
    { name: 'DJ JOTA', flyerUrl: 'https://i.imgur.com/rynpzgO.jpeg' },
    { name: 'DJ CH DE ARACRUZ', flyerUrl: 'https://i.imgur.com/RxKdLkm.png' },
    { name: 'DJ BRITIS', flyerUrl: 'https://i.imgur.com/k9yYwzX.png' }
];

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.1c-1.53 0-3.03-.4-4.36-1.18l-.31-.18-3.24.85.87-3.17-.2-.33c-.85-1.4-1.31-3.03-1.31-4.74 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.33-5.23c-.23-.11-1.34-.66-1.55-.74-.21-.08-.36-.11-.52.11-.16.23-.59.74-.72.88-.13.15-.26.16-.48.05-.23-.11-1-.36-1.89-1.17-.7-.63-1.17-1.41-1.31-1.65-.15-.25-.02-.38.1-.5.11-.11.23-.29.35-.43.11-.15.15-.25.23-.41.08-.17.04-.31-.01-.42s-.52-1.25-.71-1.71c-.19-.46-.38-.39-.52-.4a3.14 3.14 0 0 0-.45-.04c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.22.88 2.39 1 2.55.12.15 1.72 2.63 4.16 3.63.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.34-.55 1.53-1.07.19-.53.19-1 .13-1.07-.05-.08-.2-.13-.42-.24z"></path>
    </svg>
);
