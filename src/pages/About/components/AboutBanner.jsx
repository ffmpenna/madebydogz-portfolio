import { motion } from 'framer-motion';

export default function AboutBanner() {
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-white"
    >
      Visão <span className="text-[#ce1e1e]">Crua.</span>
      <br />
      <span className="text-neutral-600">Forma Pura.</span>
    </motion.h1>
  );
}
