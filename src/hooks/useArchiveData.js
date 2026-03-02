import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAlbumsForGrid, fetchVideos, fetchCategories } from '@/services/api';
import { getFilteredCategories, getFilteredProjects } from '@/utils/archiveFilters';

// Esse hook é responsável por gerenciar os dados e o estado de uma página de arquivo, incluindo a visualização (álbuns ou vídeos), os filtros aplicados e o carregamento dos dados. Ele busca os álbuns, vídeos e categorias da API, e fornece funções para atualizar a visualização e os filtros, além de retornar os dados filtrados para serem exibidos nos componentes.
export function useArchiveData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [apiAlbums, setApiAlbums] = useState([]);
  const [apiVideos, setApiVideos] = useState([]);
  const [apiCategories, setApiCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewMode = searchParams.get('view') || 'VIDEOS'; // Define o modo de visualização com base no parâmetro de URL.
  const filter = searchParams.get('filter') || 'ALL'; // Define o filtro aplicado com base no parâmetro de URL.

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

  // Função para atualizar o modo de visualização, que também redefine o filtro para 'ALL' quando a visualização é alterada.
  const handleSetViewMode = (newMode) => {
    setSearchParams((prev) => {
      prev.set('view', newMode);
      prev.set('filter', 'ALL');
      return prev;
    });
  };

  // Função para atualizar o filtro aplicado, mantendo a visualização atual.
  const handleSetFilter = (newFilter) => {
    setSearchParams((prev) => {
      prev.set('filter', newFilter);
      return prev;
    });
  };

  const filterButtons = getFilteredCategories(apiCategories, viewMode); // Gera os botões de filtro com base nas categorias disponíveis para a visualização atual.

  const projectsData = viewMode === 'VIDEOS' ? apiVideos : apiAlbums; // Seleciona os dados a serem filtrados com base no modo de visualização.

  const filteredProjects = getFilteredProjects(projectsData, filter); // Aplica o filtro aos dados selecionados para obter os projetos que devem ser exibidos.

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
