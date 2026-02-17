import { useState, useEffect, useRef } from 'react';

export function useInViewAutoplay(threshold = 1, delay = 800) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Configura o Intersection Observer para monitorar se o vídeo está visível na viewport;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: threshold }, // O threshold determina o quanto do vídeo precisa estar visível para ser considerado "in view";
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    // Controla a reprodução do vídeo com base no estado de hover (caso seja em desktop) e visibilidade na tela (caso seja em mobile);
    const video = videoRef.current;
    if (!video) return;

    const hasMouse = window.matchMedia('(hover: hover)').matches; // Verifica se o dispositivo suporta hover (geralmente desktop) para decidir a lógica de reprodução;
    let shouldPlay = false;

    // Em dispositivos com suporte a hover, o vídeo só deve tocar quando estiver sendo hoverado. Em dispositivos sem suporte a hover (como mobile), o vídeo deve tocar quando estiver visível na tela.
    if (hasMouse) {
      shouldPlay = isHovered;
    } else {
      shouldPlay = isInView;
    }

    if (shouldPlay) {
      // Se o vídeo deve tocar, inicia um timer para começar a reprodução após o delay especificado;
      timerRef.current = setTimeout(() => {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
        setIsPlaying(true);
      }, delay);
    } else {
      // Se o vídeo não deve tocar, limpa o timer (caso exista) e pausa o vídeo imediatamente;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      video.pause();
      setIsPlaying(false);
    }

    // Limpa o timer quando o componente for desmontado ou quando as dependências mudarem para evitar execuções indesejadas;
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isHovered, isInView, delay]);

  return {
    containerRef,
    videoRef,
    isPlaying,
    handleMouseEnter: () => setIsHovered(true),
    handleMouseLeave: () => setIsHovered(false),
  };
}
