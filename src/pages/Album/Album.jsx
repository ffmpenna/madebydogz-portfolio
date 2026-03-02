import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NotFound } from '../';
import { AlbumNav, AlbumHero, AlbumCredits, AlbumGallery } from './components';
import { useAlbumData } from '@/hooks/useAlbumData';

export default function Album() {
  const { slug } = useParams();

  const { album, isLoading } = useAlbumData(slug); // Usa o hook personalizado para buscar os dados do álbum com base no slug da URL.

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <span className="text-[#ce1e1e] font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
          // Fetching_Data...
        </span>
      </div>
    );
  }

  if (!album) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white selection:bg-[#ce1e1e] selection:text-white pb-24"
    >
      <AlbumNav slug={slug} />

      <AlbumHero album={album} />

      <AlbumCredits specs={album.specs} credits={album.credits} />

      <AlbumGallery gallery={album.galleryUrls} title={album.title} />
    </motion.div>
  );
}
