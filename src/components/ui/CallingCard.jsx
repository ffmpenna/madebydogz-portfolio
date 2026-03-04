import { useState } from 'react';
import { LogoMade } from './';
import { AnimatePresence, motion } from 'framer-motion';
import ContactModal from '../ContactModal';

export default function CallingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal de contato
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="relative w-full max-w-[400px] bg-white p-3 md:p-8 flex md:flex-col items-center justify-between border-[3px] border-black shadow-[8px_8px_0px_0px_#B40001] cursor-pointer group overflow-hidden"
        onClick={() => setIsModalOpen(true)} // Abre o modal de contato ao clicar no card
      >
        {/* Imagem com animação "passando/flutuando" */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-40 h-20 md:w-48 md:h-48 my-6 z-10 group-hover:scale-110 transition-transform duration-500"
        >
          <LogoMade className="w-full h-full text-[#B40001]" />
        </motion.div>
        {/* 3. Micro-tipografia (HUD)*/}
        <div className="w-full hidden md:flex justify-between items-end mb-4 border-b-2 border-black/10 pb-2 z-10">
          <span className="font-mono text-[9px] text-black/40 font-bold uppercase tracking-widest">
            [ ON-SET ]
          </span>
          <span className="font-mono text-[9px] text-black/40 font-bold tracking-widest">
            REC.001
          </span>
        </div>

        <button className="z-20 bg-[#B40001] md:bg-white text-white md:text-black font-black py-2 px-4 rounded-none border-2 border-white group-hover:bg-[#B40001] md:border-black/10 md:shadow-none group-hover:text-white transition-colors duration-300 cursor-pointer shadow-[3px_3px_0px_0px_#000000]">
          BORA TRABALHAR JUNTOS
        </button>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> // Renderiza o modal de contato quando isModalOpen é true, e passa a função onClose para fechar o modal
        )}
      </AnimatePresence>
    </>
  );
}
