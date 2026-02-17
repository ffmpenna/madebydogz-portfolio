import { motion, AnimatePresence } from 'framer-motion';
import Card from './ui/Card';

export default function ArchiveGrid({ items }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 relative auto-rows-[400px] z-10"
    >
      <AnimatePresence mode="popLayout">
        {items.map((project) => (
          <Card key={project.id} {...project} size={undefined} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
