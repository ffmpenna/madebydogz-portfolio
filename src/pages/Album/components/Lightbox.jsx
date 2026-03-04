import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useGalleryNavigation } from '../../../hooks/useGalleryNavigation';

// Funções auxiliares para calcular a força do "arraste" (swipe) no mobile
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Lightbox({ gallery, selectedIndex, setSelectedIndex }) {
  useLockBodyScroll();

  const { showNext, showPrev, closeLightbox } = useGalleryNavigation(
    gallery.length,
    setSelectedIndex,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      // UX UPGRADE: Clicar no fundo fecha, e o cursor vira uma lupa de afastar
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center"
      onClick={closeLightbox}
    >
      {/* Header do Lightbox */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <span className="font-mono text-xs tracking-widest">
          {String(selectedIndex + 1).padStart(2, '0')} /{' '}
          {String(gallery.length).padStart(2, '0')}
        </span>
        {/* Substituí o botão [Close] por uma dica de teclado, fica mais elegante */}
        <span className="font-mono text-sm text-white/50 tracking-widest uppercase hidden md:block">
          ESC
        </span>
      </div>

      {/* Container Central para manter a imagem e as setas próximas */}
      <div
        className="relative flex items-center justify-center w-full max-w-6xl h-full px-4 md:px-12 cursor-default"
        // e.stopPropagation() impede que o clique na área central feche o lightbox
        onClick={(e) => e.stopPropagation()}
      >
        {/* Seta Anterior */}
        <button
          onClick={showPrev}
          className="absolute left-2 md:-left-12 p-4 hidden md:block bg-white/5 rounded-2xl  text-white/40 hover:text-white transition-all z-20 hover:scale-110 active:scale-90"
          aria-label="Foto anterior"
        >
          {'<<'}
        </button>

        {/* Imagem com Animação de Troca e Swipe */}
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            src={gallery[selectedIndex]}
            alt={`Gallery image ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain select-none drop-shadow-2xl z-10"
            // UX UPGRADE: Arrastar para os lados no Mobile (Swipe)
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                showNext();
              } else if (swipe > swipeConfidenceThreshold) {
                showPrev();
              }
            }}
            // Impede o clique direto na imagem de fechar
            onClick={(e) => e.stopPropagation()}
          />
        </AnimatePresence>

        {/* Seta Próxima */}
        <button
          onClick={showNext}
          className="absolute right-2 md:-right-12 p-4 hidden md:block bg-white/5 rounded-2xl text-white/40 hover:text-white transition-all z-20 hover:scale-110 active:scale-90"
          aria-label="Próxima foto"
        >
          {'>>'}
        </button>
      </div>
      <button
        className="absolute bottom-15 sm:hidden p-4 border border-white/40 text-white/40 hover:text-white transition-all z-20 hover:scale-110 active:scale-90"
        onClick={closeLightbox}
      >
        [ x ]
      </button>
    </motion.div>
  );
}
