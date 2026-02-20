import { motion } from 'framer-motion';

export default function ViewToggle({ activeView, onViewChange }) {
  return (
    <div className="flex bg-white/5 border border-white/10 p-1 rounded-sm">
      {/* Alterna visualmente entre uma opção e outra além de enviar a informação de mudança para o componente pai */}
      {['MOTION', 'STILLS'].map((view) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wide transition-colors ${
            activeView === view ? 'text-black' : 'text-neutral-500 hover:text-white'
          }`}
        >
          {activeView === view && (
            <motion.div
              layoutId="activeToggle"
              className="absolute inset-0 bg-white"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{view}</span>
        </button>
      ))}
    </div>
  );
}
