import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-02-26',
});

export const testConnection = async () => {
  try {
    const data = await client.fetch('*[_type == "album"]');
    console.log('Conexão com o Sanity bem sucedida! Dados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao conectar com o Sanity:', error);
  }
};
