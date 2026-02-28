import SkeletonCard from './ui/SkeleteonCard';
import Card from './ui/VideoCard';
// Garantir a ordem e variedade de tamanhos dos cards na grid de destaque da homePage;
const sizes = [
  'lg:col-span-8 lg:row-span-2',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-8',
  'lg:col-span-4',
];

export default function ClipsHighlightGrid({ items, isLoading, slice = 5 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
      {isLoading
        ? [...Array(slice)].map((_, index) => (
            <SkeletonCard key={index} size={sizes[index]} />
          ))
        : items
            .slice(0, slice)
            .map((props, index) => <Card {...props} key={index} size={sizes[index]} />)}
    </div>
  );
}
