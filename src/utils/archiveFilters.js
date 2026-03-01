export const getFilteredCategories = (categories, viewMode) => {
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
  return projects.filter((project) =>
    activeFilter === 'ALL' ? true : project.type === activeFilter,
  );
};
