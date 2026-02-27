// src/services/api.js
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
        type,
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

// src/services/api.js

export const fetchAlbumBySlug = async (slug) => {
  try {
    const query = `
      *[_type == "album" && slug.current == $slug][0] {
        _id,
        title,
        client,
        type,
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
