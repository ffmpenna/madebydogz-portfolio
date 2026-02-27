import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { albums } from '../../data/projects';
import NotFound from '../NotFound/NotFound';

import AlbumNav from './components/AlbumNav';
import AlbumHero from './components/AlbumHero';
import AlbumCredits from './components/AlbumCredits';
import AlbumGallery from './components/AlbumGallery';
import { useEffect, useState } from 'react';
import { fetchAlbumBySlug } from '../../services/api';

export default function Album() {
  // Nota: o seu 'id' na URL agora na verdade é o 'slug' (ex: baile-do-bloc)
  const { id } = useParams();

  // 1. Criamos os estados para guardar os dados e o aviso de carregamento
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 2. O useEffect dispara a busca na API assim que a página abre
  useEffect(() => {
    const getAlbumData = async () => {
      setIsLoading(true); // Garante que a tela de loading apareça

      const data = await fetchAlbumBySlug(id);

      setAlbum(data);
      setIsLoading(false); // Desliga o loading quando os dados chegam
    };

    getAlbumData();
  }, [id]); // Se o ID da URL mudar, ele busca de novo

  // 3. TELA DE LOADING (Estética MBD)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <span className="text-[#ce1e1e] font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
          // Fetching_Data...
        </span>
      </div>
    );
  }

  // 4. Tratamento de Erro (404)
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
      <AlbumNav albumId={id} />

      <AlbumHero album={album} />

      <AlbumCredits specs={album.specs} credits={[]} />

      <AlbumGallery gallery={album.galleryUrls} title={album.title} />
    </motion.div>
  );
}
