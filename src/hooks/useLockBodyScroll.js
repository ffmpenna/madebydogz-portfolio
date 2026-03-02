import { useEffect } from 'react';

// Esse hook é responsável por bloquear o scroll do corpo da página quando um componente que o utiliza é montado.
export function useLockBodyScroll() {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}
