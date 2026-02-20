import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { albums } from '../../data/projects';
import NotFound from '../NotFound/NotFound';

import AlbumNav from './components/AlbumNav';
import AlbumHero from './components/AlbumHero';
import AlbumCredits from './components/AlbumCredits';
import AlbumGallery from './components/AlbumGallery';

export default function Album() {
  const { id } = useParams();

  // Busca o álbum
  const album = albums.find((p) => p.id === id);

  // Tratamento de Erro (404)
  if (!album) {
    return <NotFound />;
  }

  // Renderização da Página
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white selection:bg-[#ce1e1e] selection:text-white pb-24"
    >
      <AlbumNav albumId={album.id} />

      <AlbumHero album={album} />

      <AlbumCredits specs={album.specs} credits={album.credits} />

      <AlbumGallery gallery={album.gallery} title={album.title} />
    </motion.div>
  );
}
