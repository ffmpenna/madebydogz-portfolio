import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  categories as categoriesData,
  projects as projectsData,
} from '../../data/projects';
import ArchiveGrid from '../../components/ArchiveGrid';
import NoiseOverlay from '../../components/ui/NoiseOverlay';
import ArchiveHeader from './components/ArchiveHeader';
import ArchiveFooter from './components/ArchiveFooter';

export default function Archive() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = projectsData.filter((project) =>
    filter === 'ALL' ? true : project.type.includes(filter),
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white pb-20">
      <NoiseOverlay />
      {/* Header da página de clipes. Possui um filtro por categorias (onFilterChange dispara a seleção de categoria); */}
      <ArchiveHeader
        onBack={() => navigate('/home')}
        categories={categoriesData}
        activeFilter={filter}
        onFilterChange={setFilter}
        totalCount={projectsData.length}
        filteredCount={filteredProjects.length}
      />

      <main className="max-w-[1800px] mx-auto px-4 py-8">
        {/* Um grid de clipes filtrados por categoria */}
        <ArchiveGrid items={filteredProjects} />
        {/* Caso não haja clipes filtrados, exibe uma mensagem de "sem dados" */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center font-mono text-neutral-500">
            // NO_DATA_FOUND_IN_SECTOR
          </div>
        )}
      </main>
      {/* Footer estético; */}
      <ArchiveFooter />
    </div>
  );
}
