import { motion } from 'framer-motion';

const Marquee = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden py-4 bg-white/5 border-y border-white/10 select-none">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-black uppercase text-transparent stroke-text px-3 tracking-tighter opacity-50"
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
