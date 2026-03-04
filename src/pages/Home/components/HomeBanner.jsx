import { motion } from 'framer-motion';
import { BackgroundGrid } from '@/components/ui';
import CallingCard from '@/components/ui/CallingCard';

export default function HomeBanner() {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      <BackgroundGrid />

      {/* Título Principal */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="text-[25vw] md:text-[12vw] leading-[0.8] md:leading-[0.85] self-start font-black tracking-tighter text-white uppercase mix-blend-difference break-words z-10 relative"
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
        <CallingCard />
      </motion.div>
    </div>
  );
}
