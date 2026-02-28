import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Importa a função da API que criamos
import { fetchAlbumsForGrid, fetchVideos } from '../../services/api';

// Mantém os estáticos por enquanto para não quebrar a aba VIDEOS e as categorias
import { categories as categoriesData, projects } from '../../data/projects';

import NoiseOverlay from '../../components/ui/NoiseOverlay';
import ArchiveHeader from './components/ArchiveHeader';
import ArchiveFooter from './components/ArchiveFooter';
import ArchiveStillsGrid from './components/ArchiveStillsGrid';
import ArchiveMotionGrid from './components/ArchiveMotionGrid';

export default function Archive() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [apiAlbums, setApiAlbums] = useState([]);
  const [apiVideos, setApiVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewMode = searchParams.get('view') || 'VIDEOS';
  const filter = searchParams.get('filter') || 'ALL';

  useEffect(() => {
    const loadArchiveData = async () => {
      setIsLoading(true);

      const [fetchedAlbums, fetchedVideos] = await Promise.all([
        fetchAlbumsForGrid(),
        fetchVideos(),
      ]);

      setApiAlbums(fetchedAlbums);
      setApiVideos(fetchedVideos);

      setIsLoading(false);
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

  const projectsData = viewMode === 'VIDEOS' ? apiVideos : apiAlbums;

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
          <ArchiveMotionGrid items={filteredProjects} isLoading={isLoading} />
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
