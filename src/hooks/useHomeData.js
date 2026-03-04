import { useState, useEffect } from 'react';
import { fetchAlbumsForGrid, fetchVideos } from '@/services/api';

// Esse hook é responsável por buscar os dados recentes de álbuns e vídeos para a página inicial. Ele gerencia o estado dos álbuns, vídeos e o estado de carregamento, garantindo que os dados sejam atualizados quando o componente for montado.
export function useHomeData() {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Função para carregar os dados recentes de álbuns e vídeos.
    const loadHomeData = async () => {
      setIsLoading(true);

      const [albums, videos] = await Promise.all([fetchAlbumsForGrid(), fetchVideos()]);

      setRecentAlbums(albums.slice(0, 6));
      setRecentVideos(videos.slice(0, 5));

      setIsLoading(false);
    };

    loadHomeData();
  }, []);

  return { recentAlbums, recentVideos, isLoading }; // Retorna os álbuns recentes, vídeos recentes e o estado de carregamento para que os componentes possam usá-los.
}
