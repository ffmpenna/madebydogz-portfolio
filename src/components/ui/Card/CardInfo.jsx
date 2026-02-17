export default function CardInfo({ type, title, client, isPlaying }) {
  return (
    <>
      <div className="relative z-10 p-4 flex justify-between items-start border-b border-white/5 bg-black/20 backdrop-blur-sm">
        <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 text-neutral-400 rounded-sm">
          {type}
        </span>
        <div
          className={`w-2 h-2 rounded-full bg-red-500 transition-opacity duration-300 ${
            isPlaying ? 'animate-pulse opacity-100' : 'opacity-50'
          }`}
        />
      </div>

      <div className="absolute bottom-0 z-10 p-6 mt-auto w-full bg-gradient-to-t from-black/90 to-transparent pt-12">
        <h3 className="text-3xl font-black text-white uppercase leading-none mb-1 group-hover:text-red-500 transition-colors mix-blend-difference">
          {title}
        </h3>
        <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          CLIENT: {client}
        </p>
      </div>
    </>
  );
}
