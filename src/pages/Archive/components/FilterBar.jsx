export default function FilterBar({ categories, activeFilter, onFilterChange }) {
  return (
    <nav className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={`
            px-4 py-1 text-[10px] font-mono border transition-all uppercase tracking-widest
            ${
              activeFilter === cat
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-white'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
