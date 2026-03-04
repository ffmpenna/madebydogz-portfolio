import { PhotoCard, SkeletonCard } from './ui';

// Garantir a ordem e variedade de tamanhos dos cards na grid de destaque da homePage;
const sizes = [
  'md:col-span-5 md:row-span-2',
  'md:col-span-7 md:row-span-2',
  'md:col-span-4 md:row-span-2',
  'md:col-span-4 md:row-span-2',
  'md:col-span-4 md:row-span-2',
];

export default function PhotosHighlightGrid({ items, isLoading, slice = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 auto-rows-[300px] md:auto-rows-[300px]">
      {isLoading
        ? [...Array(slice)].map((_, index) => (
            <SkeletonCard key={index} size={sizes[index % sizes.length]} />
          ))
        : items.map((props, index) => (
            <PhotoCard key={props._id} {...props} size={sizes[index % sizes.length]} />
          ))}
    </div>
  );
}
