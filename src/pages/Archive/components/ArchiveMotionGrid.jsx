import { motion, AnimatePresence } from 'framer-motion';
import { VideoCard, SkeletonCard } from '../../../components/ui';

export default function ArchiveMotionGrid({ items, isLoading }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 relative auto-rows-[400px] z-10"
    >
      {isLoading ? (
        [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
      ) : (
        <AnimatePresence mode="popLayout">
          {items.map((props) => (
            <VideoCard key={props._id} {...props} />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
