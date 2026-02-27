import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Lightbox({ gallery, selectedIndex, setSelectedIndex }) {
  // 1. Lógica de Travar o Scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); // Só executa quando o Lightbox é montado na tela

  // 2. Lógica de Navegação
  const showNext = () => {
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const closeLightbox = () => setSelectedIndex(null);

  // 3. Lógica do Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallery.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center"
    >
      {/* Header do Lightbox */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <span className="font-mono text-xs tracking-widest">
          {String(selectedIndex + 1).padStart(2, '0')} /{' '}
          {String(gallery.length).padStart(2, '0')}
        </span>
        <button
          onClick={closeLightbox}
          className="font-mono text-xs tracking-widest uppercase hover:text-[#ce1e1e] transition-colors p-2"
        >
          [ Close ]
        </button>
      </div>

      {/* Imagem */}
      <motion.img
        key={selectedIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        src={gallery[selectedIndex]}
        alt="Fullscreen view"
        className="max-w-full max-h-[90vh] object-contain px-12 select-none"
      />

      {/* Botões Invisíveis de Navegação */}
      <button
        onClick={showPrev}
        className="absolute left-0 top-0 bottom-0 w-1/6 md:w-32 flex items-center justify-start p-6 group z-10"
      >
        <span className="text-white/0 group-hover:text-white transition-colors font-mono text-xs mix-blend-difference">
          ← PREV
        </span>
      </button>

      <button
        onClick={showNext}
        className="absolute right-0 top-0 bottom-0 w-1/6 md:w-32 flex items-center justify-end p-6 group z-10"
      >
        <span className="text-white/0 group-hover:text-white transition-colors font-mono text-xs mix-blend-difference">
          NEXT →
        </span>
      </button>
    </motion.div>
  );
}
