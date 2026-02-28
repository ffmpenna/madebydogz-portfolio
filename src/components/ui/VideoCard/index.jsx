import { motion } from 'framer-motion';
import { useInViewAutoplay } from './useInViewAutoplay';
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';

export default function VideoCard({
  title,
  client,
  size,
  type,
  previewUrl,
  thumbnailUrl,
  videoUrl,
}) {
  // Usa o hook personalizado para controlar a reprodução automática do vídeo com base na visibilidade e interação do usuário;
  const { containerRef, videoRef, isPlaying, handleMouseEnter, handleMouseLeave } =
    useInViewAutoplay();

  return (
    <motion.div
      ref={containerRef} // Ref para o container do card, usado para observar a visibilidade do vídeo na tela;
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(videoUrl || 'https://www.youtube.com', '_blank')}
      className={`${size} relative bg-[#111] border border-[#222] hover:border-red-500/50 transition-colors group overflow-hidden cursor-pointer`}
    >
      {/* Conteúdo do card de vídeo */}
      <CardMedia
        videoRef={videoRef} // Ref para o elemento de vídeo, usado para controlar a reprodução;
        videoSrc={previewUrl}
        thumbSrc={thumbnailUrl}
        isPlaying={isPlaying} // Indica se o vídeo está atualmente tocando, usado para mostrar ou ocultar a miniatura;
      />

      {/* Rodapé do card de vídeo com as informações do clipe */}
      <CardInfo type={type} title={title} client={client} isPlaying={isPlaying} />
    </motion.div>
  );
}
