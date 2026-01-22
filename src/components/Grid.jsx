import Card from './Card';

const items = [
  {
    id: 1,
    size: 'lg:col-span-8 lg:row-span-2',
    title: 'CLIP_01.MP4',
    client: 'Cliente X',
    type: 'MUSIC VIDEO',
  },
  {
    id: 2,
    size: 'lg:col-span-4',
    title: 'CLIP_02.MP4',
    client: 'Cliente Y',
    type: 'VISUALIZER',
  },
  {
    id: 3,
    size: 'lg:col-span-4',
    title: 'CLIP_03.MP4',
    client: 'Cliente Z',
    type: 'VFX',
  },
  {
    id: 4,
    size: 'lg:col-span-8',
    title: 'CLIP_04.MP4',
    client: 'Cliente W',
    type: 'PRODUÇÃO',
  },
  {
    id: 4,
    size: 'lg:col-span-4',
    title: 'CLIP_05.MP4',
    client: 'Cliente V',
    type: 'PRODUÇÃO',
  },
];

export default function Grid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
      {items.map(({ id, size, title, client, type }) => (
        <Card key={id} size={size} title={title} client={client} type={type} />
      ))}
    </div>
  );
}
