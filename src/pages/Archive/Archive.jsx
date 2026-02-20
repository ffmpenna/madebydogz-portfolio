import { useSearchParams } from 'react-router-dom';
import { categories as categoriesData, projects } from '../../data/projects';
import NoiseOverlay from '../../components/ui/NoiseOverlay';
import ArchiveHeader from './components/ArchiveHeader';
import ArchiveFooter from './components/ArchiveFooter';
import ArchiveStillsGrid from './components/ArchiveStillsGrid';
import ArchiveMotionGrid from './components/ArchiveMotionGrid';

export default function Archive() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Lógica para ler e atualizar os parâmetros de URL
  const viewMode = searchParams.get('view') || 'VIDEOS';
  const filter = searchParams.get('filter') || 'ALL';

  // Funções para atualizar os parâmetros de URL
  const handleSetViewMode = (newMode) => {
    setSearchParams((prev) => {
      prev.set('view', newMode);
      prev.set('filter', 'ALL');
      return prev;
    });
  };

  // Ao mudar o filtro, resetamos para ALL se for o mesmo filtro ou atualizamos para o novo filtro
  const handleSetFilter = (newFilter) => {
    setSearchParams((prev) => {
      prev.set('filter', newFilter);
      return prev;
    });
  };

  // Seleciona os dados com base no modo de visualização e aplica o filtro
  const projectsData = viewMode === 'VIDEOS' ? projects.videos : projects.photos;

  const filteredProjects = projectsData.filter((project) =>
    filter === 'ALL' ? true : project.type.includes(filter),
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white pb-20">
      <NoiseOverlay />

      {/* Header que controla todas as alterações de filtro */}
      <ArchiveHeader
        categories={categoriesData}
        activeFilter={filter}
        viewMode={viewMode}
        onFilterChange={handleSetFilter}
        setViewMode={handleSetViewMode}
        totalCount={projectsData.length}
        filteredCount={filteredProjects.length}
      />

      {/* Exibe os projetos filtrados */}
      <main className="mx-auto px-4 py-8">
        {viewMode === 'VIDEOS' ? (
          <ArchiveMotionGrid items={filteredProjects} />
        ) : (
          <ArchiveStillsGrid items={filteredProjects} />
        )}

        {/* Caso não tenha projetos passando no filtro exibe uma mensagem */}
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
