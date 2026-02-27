import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Importa a função da API que criamos
import { fetchAlbumsForGrid } from '../../services/api';

// Mantém os estáticos por enquanto para não quebrar a aba VIDEOS e as categorias
import { categories as categoriesData, projects } from '../../data/projects';

import NoiseOverlay from '../../components/ui/NoiseOverlay';
import ArchiveHeader from './components/ArchiveHeader';
import ArchiveFooter from './components/ArchiveFooter';
import ArchiveStillsGrid from './components/ArchiveStillsGrid';
import ArchiveMotionGrid from './components/ArchiveMotionGrid';

export default function Archive() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. ESTADOS PARA O BACKEND
  const [apiAlbums, setApiAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewMode = searchParams.get('view') || 'VIDEOS';
  const filter = searchParams.get('filter') || 'ALL';

  // 2. FETCH DOS DADOS (Assim que a página carrega)
  useEffect(() => {
    const loadArchiveData = async () => {
      setIsLoading(true);
      // Puxa apenas as informações leves dos álbuns (sem a galeria)
      const fetchedAlbums = await fetchAlbumsForGrid();
      setApiAlbums(fetchedAlbums);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simula um delay para mostrar o skeleton
    };

    loadArchiveData();
  }, []);

  const handleSetViewMode = (newMode) => {
    setSearchParams((prev) => {
      prev.set('view', newMode);
      prev.set('filter', 'ALL');
      return prev;
    });
  };

  const handleSetFilter = (newFilter) => {
    setSearchParams((prev) => {
      prev.set('filter', newFilter);
      return prev;
    });
  };

  // 3. SELEÇÃO DE DADOS (Híbrida: Vídeos do código, Fotos da API)
  const projectsData = viewMode === 'VIDEOS' ? projects.videos : apiAlbums;

  // Filtra os projetos (usando '?.' para proteger caso algum álbum venha sem tipo)
  const filteredProjects = projectsData.filter((project) =>
    filter === 'ALL' ? true : project.type?.includes(filter),
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white pb-20">
      <NoiseOverlay />

      <ArchiveHeader
        categories={categoriesData}
        activeFilter={filter}
        viewMode={viewMode}
        onFilterChange={handleSetFilter}
        setViewMode={handleSetViewMode}
        totalCount={projectsData.length}
        filteredCount={filteredProjects.length}
      />

      <main className="mx-auto px-4 py-8">
        {/* ESTADO DE LOADING (Estética MBD) */}

        {/* RENDERIZAÇÃO DAS GRIDS */}
        {viewMode === 'VIDEOS' ? (
          <ArchiveMotionGrid items={filteredProjects} />
        ) : (
          <ArchiveStillsGrid items={filteredProjects} isLoading={isLoading} />
        )}

        {/* MENSAGEM DE FILTRO VAZIO */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center font-mono text-neutral-500">
            // NO_DATA_FOUND_IN_SECTOR
          </div>
        )}
      </main>

      <ArchiveFooter />
    </div>
  );
}
