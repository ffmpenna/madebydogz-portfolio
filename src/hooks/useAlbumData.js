import { useEffect, useState } from 'react';
import { fetchAlbumBySlug } from '../services/api';

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

  return { album, isLoading };
}
