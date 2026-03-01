import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAlbumsForGrid, fetchVideos, fetchCategories } from '../services/api';
import { getFilteredCategories, getFilteredProjects } from '../utils/archiveFilters';

export function useArchiveData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiAlbums, setApiAlbums] = useState([]);
  const [apiVideos, setApiVideos] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewMode = searchParams.get('view') || 'VIDEOS';
  const filter = searchParams.get('filter') || 'ALL';

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const [fetchedAlbums, fetchedVideos, fetchedCategories] = await Promise.all([
        fetchAlbumsForGrid(),
        fetchVideos(),
        fetchCategories(),
      ]);
      setApiAlbums(fetchedAlbums);
      setApiVideos(fetchedVideos);
      setApiCategories(fetchedCategories);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleSetViewMode = (newMode) => {
    setSearchParams((prev) => {
      prev.set('view', newMode);
      prev.set('filter', 'ALL');
      return prev;
    });
  };

  const handleSetFilter = (newFilter) => {
    setSearchParams((prev) => {
      prev.set('filter', newFilter);
      return prev;
    });
  };

  const filterButtons = getFilteredCategories(apiCategories, viewMode);
  const projectsData = viewMode === 'VIDEOS' ? apiVideos : apiAlbums;
  const filteredProjects = getFilteredProjects(projectsData, filter);
  const totalCount = projectsData.length;

  return {
    viewMode,
    filter,
    isLoading,
    filterButtons,
    filteredProjects,
    totalCount,
    handleSetViewMode,
    handleSetFilter,
  };
}
