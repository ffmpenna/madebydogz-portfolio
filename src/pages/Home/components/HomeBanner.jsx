import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundGrid, LogoMade } from '@/components/ui';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

export default function HomeBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <BackgroundGrid />

      {/* Título Principal */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="text-[25vw] md:text-[12vw] leading-[0.8] md:leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference break-words z-10 relative"
      >
        Made <br />
        <span className="text-[#B40001]">By</span> <br />
        Dogz
      </motion.h1>

      {/* Container da Direita (Textos + Card de Contato) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col items-center md:items-start gap-8 w-full md:max-w-md text-center md:text-left z-20"
      >
        {/* Bloco de Texto Original */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-mono text-[10px] md:text-xs text-neutral-400 mb-2">
            EST. 2024 // RIO DE JANEIRO
          </p>
          <p className="text-xs md:text-sm font-bold uppercase leading-tight text-white border-l-2 border-[#CE1E1E] pl-4">
            Cultura Underground. Trap, Rap & Estética Urbana.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="relative w-full max-w-[400px] bg-white p-8 flex flex-col items-center justify-between border-[3px] border-black shadow-[8px_8px_0px_0px_#B40001] cursor-pointer group overflow-hidden"
          onClick={() => setIsModalOpen(true)} // Abre o modal de contato ao clicar no card
        >
          {/* Imagem com animação "passando/flutuando" */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-40 h-40 md:w-48 md:h-48 my-6 z-10 group-hover:scale-110 transition-transform duration-500"
          >
            <LogoMade className="w-full h-full text-[#B40001]" />
          </motion.div>
          {/* 3. Micro-tipografia (HUD)*/}
          <div className="w-full flex justify-between items-end mb-4 border-b-2 border-black/10 pb-2 z-10">
            <span className="font-mono text-[9px] text-black/40 font-bold uppercase tracking-widest">
              [ ON-SET ]
            </span>
            <span className="font-mono text-[9px] text-black/40 font-bold tracking-widest">
              REC.001
            </span>
          </div>

          <button className="z-20 bg-[#B40001] md:bg-white text-white md:text-black font-bold py-2 px-4 rounded-none border-1 border-black/10 group-hover:bg-[#B40001] group-hover:text-white transition-colors duration-300 cursor-pointer">
            BORA TRABALHAR JUNTOS
          </button>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> // Renderiza o modal de contato quando isModalOpen é true, e passa a função onClose para fechar o modal
        )}
      </AnimatePresence>
    </div>
  );
}
