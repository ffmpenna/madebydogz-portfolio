import { motion } from 'framer-motion';

export default function AboutManifesto() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="order-2 md:order-1 flex flex-col justify-center"
      >
        <h2 className="text-sm font-mono text-[#ce1e1e] uppercase tracking-widest mb-6">
          [ O Manifesto ]
        </h2>
        <p className="text-xl md:text-3xl font-medium leading-tight mb-8 text-neutral-300">
          A MadeByDogz nasceu das ruas e para as ruas. Nós não apenas documentamos a
          cultura urbana, nós fazemos parte dela.
        </p>
        <p className="text-sm md:text-base font-mono text-neutral-500 leading-relaxed max-w-lg">
          Especializados na cena underground do rap e trap, nossa missão é traduzir a
          energia crua da música em imagens inesquecíveis. Do roteiro de um videoclipe ao
          clique de um editorial streetwear, cada frame carrega a nossa assinatura:
          autêntica, agressiva e sem filtros.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="order-1 md:order-2 aspect-[4/5] bg-neutral-900 overflow-hidden relative"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1682146749338-f380c93c8dec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="MadeByDogz On Set"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">
          MBD // ON-SET '25
        </div>
      </motion.div>
    </>
  );
}
