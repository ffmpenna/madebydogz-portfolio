import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function StillCard({
  heroImageUrl,
  title,
  client,
  slug,
  type,
  specs,
  size,
}) {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ zIndex: 20 }}
      className={`relative group bg-black border border-white/5 cursor-crosshair overflow-hidden ${size}`}
      onClick={() => navigate(`/album/${slug}`)}
    >
      {/* Imagem (Mobile: Cor | Desktop: PB -> Cor) */}
      <img
        src={heroImageUrl}
        alt={client}
        className="
          w-full h-full object-cover 
          grayscale-0 opacity-100
          md:grayscale md:opacity-70 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105 
          transition-all duration-700 ease-out
        "
      />

      {/* Gradiente Escuro (Para leitura) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Metadados Superiores */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <span className="text-[10px] font-mono bg-[#ce1e1e] text-white px-1.5 py-0.5 uppercase tracking-widest">
          {type}
        </span>
        <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest border border-white/20 px-1 backdrop-blur-sm bg-black/30">
          {specs}
        </span>
      </div>

      {/* Identificação Inferior */}
      <div className="absolute bottom-4 left-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-75 md:translate-y-4 md:group-hover:translate-y-0">
        <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-none tracking-tighter mix-blend-difference mb-1">
          {title}
        </h3>
        <h4 className="text-lg md:text-1xl font-black text-red-500/80 uppercase leading-none tracking-tighter mix-blend-difference mb-1">
          {client}
        </h4>
        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          // RAW_FILE
        </p>
      </div>
    </motion.div>
  );
}
