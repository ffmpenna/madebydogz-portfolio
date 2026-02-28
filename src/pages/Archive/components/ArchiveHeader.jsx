import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import ViewToggle from './ViewToggle';
import { useNavigate } from 'react-router-dom';

export default function ArchiveHeader({
  categories,
  activeFilter,
  onFilterChange,
  totalCount,
  filteredCount,
  viewMode,
  setViewMode,
}) {
  const navigate = useNavigate();
  // Lógica para esconder o header ao scrollar para baixo e mostrar ao scrollar para cima
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Adiciona um listener de scroll para detectar a direção do scroll e atualizar a visibilidade do header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll); // Limpa o listener quando o componente é desmontado
  }, [lastScrollY]);

  return (
    <header
      className={`
        sticky top-0 z-40 w-full bg-[#050505]/90 backdrop-blur-sm border-b border-white/10
        transition-transform duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-[1800px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <button
            onClick={() => navigate('/home')}
            className="group flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors uppercase"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>{' '}
            BACK
          </button>
          <h1 className="text-xl font-black tracking-tighter uppercase">
            MBD® <span className="text-neutral-600">ARCHIVE</span>
          </h1>
          {/* Um toggle entre vídeos e fotos */}
          <ViewToggle activeView={viewMode} onViewChange={setViewMode} />
        </div>
        {/* Ativamente o filtro de categorias. 
        Passam todas categorias selecionáveis, a categoria selecionada e a função de atualização do filtro */}
        <FilterBar
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
        />

        {/* Pequeno contador de clipes filtrados (ex: 08 de 12 clipes exibidos) */}
        <div className="hidden md:block text-xs font-mono text-neutral-600 text-right w-32">
          Files: {filteredCount.toString().padStart(2, '0')} /{' '}
          {totalCount.toString().padStart(2, '0')}
        </div>
      </div>
    </header>
  );
}
