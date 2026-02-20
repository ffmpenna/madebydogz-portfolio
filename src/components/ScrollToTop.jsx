import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Componente para rolar a página para o topo sempre que a rota mudar
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Esse componente é apenas lógico, não renderiza nada visualmente
  return null;
}
