import { motion, AnimatePresence } from 'framer-motion';
import VideoCard from '../../../components/ui/VideoCard';

export default function ArchiveMotionGrid({ items }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 relative auto-rows-[400px] z-10"
    >
      <AnimatePresence mode="popLayout">
        {items.map((project) => (
          <VideoCard key={project.id} {...project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
