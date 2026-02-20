import { AnimatePresence, motion } from 'framer-motion';
import StillCard from '../../../components/ui/PhotoCard';

export default function ArchiveStillsGrid({ items }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-1 relative auto-rows-[400px] z-10"
    >
      <AnimatePresence mode="popLayout">
        {items.map((props) => (
          <StillCard key={props.id} {...props} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
