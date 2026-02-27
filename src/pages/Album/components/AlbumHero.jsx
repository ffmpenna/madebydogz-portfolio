import { motion } from 'framer-motion';

export default function AlbumHero({ album }) {
  return (
    <header className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <img
        src={album.heroImageUrl}
        alt={album.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-[1800px] mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono bg-[#ce1e1e] text-white px-2 py-1 uppercase tracking-widest">
              {album.type}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              {album.date}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-2">
            {album.title}
          </h1>
          <h2 className="text-xl md:text-3xl font-mono text-neutral-500 uppercase tracking-tight">
            {album.client}
          </h2>
        </motion.div>
      </div>
    </header>
  );
}
