import { motion } from 'framer-motion';

export default function HomeBanner() {
  return (
    <div className="relative">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="text-[25vw] md:text-[14vw] leading-[0.8] md:leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference break-words"
      >
        Made <br />
        <span className="text-[#B40001]">By</span> <br />
        Dogz
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 md:mt-0 md:absolute md:top-20 md:right-20 max-w-[200px] md:max-w-xs text-left md:text-right"
      >
        <p className="font-mono text-[10px] md:text-xs text-neutral-400 mb-2">
          EST. 2024 // RIO DE JANEIRO
        </p>
        <p className="text-xs md:text-sm font-bold uppercase leading-tight text-white border-l-2 border-red-600 pl-4">
          Cultura Underground. Trap, Rap & Estética Urbana.
        </p>
      </motion.div>
    </div>
  );
}
