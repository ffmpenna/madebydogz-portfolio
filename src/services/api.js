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
      {
        "featured": *[_type == "siteSettings"][0].featuredPhotos[]->{
          _id, title, client, "type": category->title, "color": category->colorTheme.hex, specs, credits, "slug": slug.current, "heroImageUrl": heroImage.asset->url
        },
        "others": *[_type == "album" && !(_id in coalesce(*[_type == "siteSettings"][0].featuredPhotos[]._ref, []))] | order(_createdAt desc) {
          _id, title, client, "type": category->title, "color": category->colorTheme.hex, specs, credits, "slug": slug.current, "heroImageUrl": heroImage.asset->url
        }
      }
    `;

    const data = await client.fetch(query);
    const featuredList = data.featured || [];
    const othersList = data.others || [];

    return [...featuredList, ...othersList];
  } catch (error) {
    console.error('Erro ao buscar álbuns para a grid:', error);
    return [];
  }
};

export const fetchAlbumBySlug = async (slug) => {
  try {
    const query = `
      *[_type == "album" && slug.current == $slug][0] {
        _id, title, client, "type": category->title, "color": category->colorTheme.hex, date, specs, "credits": credits[]{
          role,
          "people": people[]->{
            name,
            instagram
          }
        }, "heroImage": {
  "url": heroImage.asset->url,
  "hotspot": heroImage.hotspot
}, "galleryUrls": gallery[].asset->url
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
      {
        "featured": *[_type == "siteSettings"][0].featuredVideos[]->{
          _id, title, client, "type": category->title, "color": category->colorTheme.hex, "slug": slug.current, "thumbnailUrl": thumbnail.asset->url, "previewUrl": previewVideo.asset->url, videoUrl
        },
        "others": *[_type == "video" && !(_id in coalesce(*[_type == "siteSettings"][0].featuredVideos[]._ref, []))] | order(_createdAt desc) {
          _id, title, client, "type": category->title, "color": category->colorTheme.hex, "slug": slug.current, "thumbnailUrl": thumbnail.asset->url, "previewUrl": previewVideo.asset->url, videoUrl
        }
      }
    `;

    const data = await client.fetch(query);
    const featuredList = data.featured || [];
    const othersList = data.others || [];

    return [...featuredList, ...othersList];
  } catch (error) {
    console.error('Erro ao buscar os clipes no Sanity:', error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const query = `
      {
        "featured": *[_type == "siteSettings"][0].categoryOrder[]->{
          _id, title, mediaType, "color": colorTheme.hex
        },
        "others": *[_type == "category" && !(_id in coalesce(*[_type == "siteSettings"][0].categoryOrder[]._ref, []))] | order(title asc) {
          _id, title, mediaType, "color": colorTheme.hex
        }
      }
    `;

    const data = await client.fetch(query);
    const featuredList = data.featured || [];
    const othersList = data.others || [];

    return [...featuredList, ...othersList];
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};
