import { motion } from 'framer-motion';
import { useVideoHover } from './useVideoHover';
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';

export default function Card({ title, client, size, type, videoSrc, thumbSrc }) {
  const { videoRef, isPlaying, handleMouseEnter, handleMouseLeave } = useVideoHover();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
