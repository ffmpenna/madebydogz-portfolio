import { useEffect, useCallback } from 'react';

// Esse hook é responsável por gerenciar a navegação em uma galeria de imagens, incluindo a exibição da próxima e da anterior imagem, bem como o fechamento da lightbox. Ele também adiciona um listener para eventos de teclado para permitir a navegação usando as setas do teclado e a tecla Escape.
export function useGalleryNavigation(galleryLength, setSelectedIndex) {
  const showNext = useCallback(() => {
    // Avança para a próxima imagem, ou volta para a primeira se estiver na última.
    setSelectedIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  }, [galleryLength, setSelectedIndex]);

  const showPrev = useCallback(() => {
    // Volta para a imagem anterior, ou vai para a última se estiver na primeira.
    setSelectedIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  }, [galleryLength, setSelectedIndex]);

  const closeLightbox = useCallback(() => {
    // Fecha a lightbox definindo o índice selecionado como null.
    setSelectedIndex(null);
  }, [setSelectedIndex]);

  useEffect(() => {
    // Adiciona um listener para eventos de teclado para permitir a navegação usando as setas do teclado e a tecla Esc.
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNext, showPrev, closeLightbox]);

  return { showNext, showPrev, closeLightbox }; // Retorna as funções para mostrar a próxima imagem, a imagem anterior e para fechar a lightbox, para que os componentes possam usá-las.
}
