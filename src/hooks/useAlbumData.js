import { useEffect, useState } from 'react';
import { fetchAlbumBySlug } from '@/services/api';

// Esse hook é responsável por buscar os dados de um álbum específico com base no slug fornecido. Ele gerencia o estado do álbum e o estado de carregamento, garantindo que os dados sejam atualizados sempre que o slug mudar.
export function useAlbumData(slug) {
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAlbumData = async () => {
      setIsLoading(true);

      const data = await fetchAlbumBySlug(slug);

      setAlbum(data);
      setIsLoading(false);
    };

    getAlbumData();
  }, [slug]);

  return { album, isLoading }; // Retorna o álbum e o estado de carregamento para que os componentes possam usá-los.
}
