import { motion } from 'framer-motion';
import { useInViewAutoplay } from './useInViewAutoplay';
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';

export default function UrbanCard({
  title,
  client,
  size,
  type,
  videoSrc,
  thumbSrc,
  youtubeLink,
}) {
  const { containerRef, videoRef, isPlaying, handleMouseEnter, handleMouseLeave } =
    useInViewAutoplay();

  return (
    <motion.div
      ref={containerRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(youtubeLink || 'https://www.youtube.com', '_blank')}
      className={`${size} relative bg-[#111] border border-[#222] hover:border-red-500/50 transition-colors group overflow-hidden cursor-pointer`}
    >
      <CardMedia
        videoRef={videoRef}
        videoSrc={videoSrc}
        thumbSrc={thumbSrc}
        isPlaying={isPlaying}
      />

      <CardInfo type={type} title={title} client={client} isPlaying={isPlaying} />
    </motion.div>
  );
}
