import { useState, useEffect } from 'react';

// Esse hook é responsável por ocultar um elemento (como um header ou uma barra de navegação) quando o usuário rola para baixo, e mostrar novamente quando o usuário rola para cima. Ele usa o estado `isVisible` para controlar a visibilidade do elemento.
export function useHideOnScroll(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Adiciona um listener para o evento de scroll para monitorar a posição de rolagem do usuário.
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold]);

  return { isVisible }; // Retorna o estado de visibilidade para que os componentes possam usá-lo para mostrar ou ocultar o elemento com base na rolagem do usuário.
}
