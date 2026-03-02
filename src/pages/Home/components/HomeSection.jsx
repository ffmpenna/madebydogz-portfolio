export default function HomeSection({
  title,
  span,
  buttonText,
  onButtonClick,
  bg,
  children,
}) {
  return (
    <section
      className={`py-12 md:py-20 px-4 md:px-20 flex flex-col ${bg ? ' bg-white/5' : 'bg-[#050505]'}`}
    >
      {/* Cabeçalho Original Restaurado */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-0">
        <h2 className="text-5xl sm:text-6xl md:text-[74px] font-black text-transparent stroke-text opacity-60 leading-none">
          {title}
        </h2>
        {span && (
          <span className="font-mono text-[10px] md:text-sm bg-white text-black px-2 py-1 whitespace-nowrap">
            {span}
          </span>
        )}
      </div>

      {/* Grid de Conteúdo (Os vídeos/fotos ficam aqui) */}
      {children}

      {/* Novo Botão de Ver Tudo: Imponente, impossível de ignorar */}
      <div className="mt-12 md:mt-16 w-full flex justify-center md:justify-end">
        <button
          onClick={onButtonClick}
          className="group flex items-center justify-center gap-6 w-full md:w-auto border border-white/20 bg-transparent text-white px-12 py-5 font-mono uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500"
        >
          {buttonText}
          <span className="text-neutral-500 group-hover:text-[#ce1e1e] group-hover:translate-x-2 transition-all duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
