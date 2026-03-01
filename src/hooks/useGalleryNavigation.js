import { useEffect, useCallback } from 'react';

export function useGalleryNavigation(galleryLength, setSelectedIndex) {
  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  }, [galleryLength, setSelectedIndex]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  }, [galleryLength, setSelectedIndex]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, [setSelectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNext, showPrev, closeLightbox]);

  return { showNext, showPrev, closeLightbox };
}
