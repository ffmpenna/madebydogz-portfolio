import PhotoCard from './ui/PhotoCard';

// Garantir a ordem e variedade de tamanhos dos cards na grid de destaque da homePage;
const sizes = [
  'md:col-span-5 md:row-span-2',
  'md:col-span-7 md:row-span-1',
  'md:col-span-4 md:row-span-1',
  'md:col-span-3 md:row-span-1',
];

export default function PhotosHighlightGrid({ items, slice = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 auto-rows-[300px] md:auto-rows-[400px]">
      {items.slice(0, slice).map((props, index) => (
        <PhotoCard key={index} {...props} size={sizes[index % sizes.length]} />
      ))}
    </div>
  );
}
