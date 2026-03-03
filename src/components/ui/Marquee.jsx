import { motion } from 'framer-motion';

// Componente de Marquee para criar um efeito de texto rolando horizontalmente.

const Marquee = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden pb-2 pt-5 bg-white/5 border-y border-white/10 select-none">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 100 }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-made uppercase px-3 tracking-tighter opacity-80"
          >
            {text}
          </span>
        ))}
      </motion.div>
      <style>{`.stroke-text { -webkit-text-stroke: 3px #ff0000; }`}</style>
    </div>
  );
};

export default Marquee;
