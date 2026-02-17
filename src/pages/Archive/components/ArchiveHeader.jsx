import FilterBar from './FilterBar';

export default function ArchiveHeader({
  onBack,
  categories,
  activeFilter,
  onFilterChange,
  totalCount,
  filteredCount,
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1800px] mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors uppercase"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>{' '}
            BACK
          </button>
          <h1 className="text-xl font-black tracking-tighter uppercase">
            MBD® <span className="text-neutral-600">ARCHIVE</span>
          </h1>
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
