export default function CardInfo({ type, title, client, index }) {
  return (
    <>
      <div className="relative group h-full">
        <span className="absolute top-4 left-4 text-[10px] font-mono bg-[#ce1e1e] text-white px-1.5 py-0.5 uppercase tracking-widest opacity-100 group-hover:opacity-0 duration-300">
          {type}
        </span>
        <div className="absolute bottom-0 z-10 p-6 mt-auto w-full bg-gradient-to-t from-black/90 to-transparent pt-12">
          <h3
            className={`${index === 0 ? 'md:text-7xl' : 'text-3xl'} font-black text-white uppercase leading-none mb-1 group-hover:text[#CE1E1E] transition-colors mix-blend-difference`}
          >
            {title}
          </h3>
          <p className="text-sm font-mono text-neutral-300 uppercase tracking-widest">
            {client}
          </p>
        </div>
      </div>
    </>
  );
}
