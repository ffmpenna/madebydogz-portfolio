import { useState, useEffect } from 'react';
import { fetchAlbumsForGrid, fetchVideos } from '@/services/api';

export function useHomeData() {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recentVideos, setRecentVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      setIsLoading(true);

      const [albums, videos] = await Promise.all([fetchAlbumsForGrid(), fetchVideos()]);

      setRecentAlbums(albums.slice(0, 4));
      setRecentVideos(videos.slice(0, 4));

      setIsLoading(false);
    };

    loadHomeData();
  }, []);

  return { recentAlbums, recentVideos, isLoading };
}
