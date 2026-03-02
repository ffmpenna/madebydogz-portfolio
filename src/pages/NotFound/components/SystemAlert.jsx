import { motion } from 'framer-motion';

export default function SystemAlert() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="inline-block border border[#CE1E1E] text[#CE1E1E] px-3 py-1 text-xs font-mono mb-6 tracking-widest uppercase bg-red-900/10 backdrop-blur-sm"
    >
      ⚠️ System_Failure // Connection_Lost
    </motion.div>
  );
}
