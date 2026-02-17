import { useState, useEffect, useRef } from 'react';

export function useInViewAutoplay(threshold = 1, delay = 800) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: threshold },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hasMouse = window.matchMedia('(hover: hover)').matches;
    let shouldPlay = false;

    if (hasMouse) {
      shouldPlay = isHovered;
    } else {
      shouldPlay = isInView;
    }

    if (shouldPlay) {
      timerRef.current = setTimeout(() => {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
        setIsPlaying(true);
      }, delay);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      video.pause();
      setIsPlaying(false);
    }

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
