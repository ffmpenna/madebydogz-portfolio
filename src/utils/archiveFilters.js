export const getFilteredCategories = (categories, viewMode) => {
  // Filtra as categorias com base no tipo de mídia e modo de visualização
  const filtered = categories.filter((cat) => {
    if (viewMode === 'VIDEOS')
      return cat.mediaType === 'video' || cat.mediaType === 'both';
    if (viewMode === 'FOTOS')
      return cat.mediaType === 'photo' || cat.mediaType === 'both';
    return true;
  });

  return ['ALL', ...filtered.map((cat) => cat.title)];
};

export const getFilteredProjects = (projects, activeFilter) => {
  // Filtra os projetos com base no filtro ativo (ALL, VIDEO, FOTO)
  return projects.filter((project) =>
    activeFilter === 'ALL' ? true : project.type === activeFilter,
  );
};
