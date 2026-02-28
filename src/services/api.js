import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2026-02-26',
});

export const fetchAlbumsForGrid = async () => {
  try {
    const query = `
      *[_type == "album"] | order(_createdAt desc) {
        _id,
        title,
        client,
        "type": category->title,
        specs,
        "slug": slug.current,
        "heroImageUrl": heroImage.asset->url
      }
    `;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar álbuns para a grid:', error);
    return [];
  }
};

export const fetchAlbumBySlug = async (slug) => {
  try {
    const query = `
      *[_type == "album" && slug.current == $slug][0] {
        _id,
        title,
        client,
        "type": category->title,
        date,
        specs,
        "heroImageUrl": heroImage.asset->url,
        "galleryUrls": gallery[].asset->url
      }
    `;

    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error(`Erro ao buscar o álbum ${slug}:`, error);
    return null;
  }
};

export const fetchVideos = async () => {
  try {
    const query = `
      *[_type == "video"] | order(_createdAt desc) {
        _id,
        title,
        client,
        "type": category->title,
        "slug": slug.current,
        "thumbnailUrl": thumbnail.asset->url,
        "previewUrl": previewVideo.asset->url,
        videoUrl
      }
    `;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar os clipes no Sanity:', error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const query = `*[_type == "category"] | order(title asc) { _id, title, mediaType }`;
    return await client.fetch(query);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};
