import { motion } from 'framer-motion';

const Card = ({ title, client, type, image, size = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ scale: 1.02 }}
    className={`relative group bg-[#111] border border-[#222] hover:border-red-500/50 transition-colors duration-300 flex flex-col justify-between overflow-hidden ${size}`}
  >
    {/* Placeholder do Vídeo (Aqui entraria a thumb do clipe) */}
    <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
      {/* Grid decorativo no fundo do card */}
      <div className="w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>

    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
    />

    {/* Header do Card */}
    <div className="relative z-10 p-4 flex justify-between items-start border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 text-neutral-400 rounded-sm">
        {type}
      </span>
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> {/* REC dot */}
    </div>

    {/* Footer do Card */}
    <div className="relative z-10 p-6 mt-auto">
      <h3 className="text-3xl font-black text-white uppercase leading-none mb-1 group-hover:text-red-500 transition-colors mix-blend-difference">
        {title}
      </h3>
      <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
        CLIENT: {client}
      </p>
    </div>
  </motion.div>
);

export default Card;
