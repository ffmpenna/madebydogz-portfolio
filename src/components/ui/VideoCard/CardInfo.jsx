export default function CardInfo({ type, title, client, isPlaying }) {
  return (
    <>
      <div className="absolute bottom-0 z-10 p-6 mt-auto w-full bg-gradient-to-t from-black/90 to-transparent pt-12">
        <h3 className="text-3xl font-black text-white uppercase leading-none mb-1 group-hover:text[#CE1E1E] transition-colors mix-blend-difference">
          {title}
        </h3>
        <p className="text-sm font-mono text-neutral-300 uppercase tracking-widest">
          {client}
        </p>
      </div>
    </>
  );
}
