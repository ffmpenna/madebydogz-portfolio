import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

export default function AlbumGallery({ gallery, title }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <main className="max-w-[1800px] mx-auto px-4 mt-8 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2">
          {gallery.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative group bg-neutral-900 overflow-hidden cursor-crosshair aspect-square"
            >
              <img
                src={`${image}?w=800&q=80&auto=format`}
                alt={`${title} - ${image.id}`}
                loading="lazy"
                className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  [ View ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* O AnimatePresence gerencia a entrada/saída suave do componente */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            gallery={gallery}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
