import { useArchiveData } from '@/hooks/useArchiveData';
import {
  ArchiveHeader,
  ArchiveFooter,
  ArchiveStillsGrid,
  ArchiveMotionGrid,
} from './components';
import { NoiseOverlay, SkeletonCard } from '@/components/ui';

export default function Archive() {
  const {
    viewMode,
    filter,
    isLoading,
    filterButtons,
    filteredProjects,
    totalCount,
    handleSetViewMode,
    handleSetFilter,
  } = useArchiveData();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white pb-20">
      <NoiseOverlay />

      <ArchiveHeader
        categories={filterButtons}
        activeFilter={filter}
        viewMode={viewMode}
        onFilterChange={handleSetFilter}
        setViewMode={handleSetViewMode}
        totalCount={totalCount}
        filteredCount={filteredProjects.length}
      />

      <main className="mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <>
            {viewMode === 'VIDEOS' ? (
              <ArchiveMotionGrid items={filteredProjects} />
            ) : (
              <ArchiveStillsGrid items={filteredProjects} />
            )}

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center font-mono text-neutral-500">
                // NO_DATA_FOUND_IN_SECTOR
              </div>
            )}
          </>
        )}
      </main>

      <ArchiveFooter />
    </div>
  );
}
