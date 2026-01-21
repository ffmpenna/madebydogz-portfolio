const categories = [
  {
    id: 1,
    title: 'Clipes',
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=500',
  },
  {
    id: 2,
    title: 'Fotografia',
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=500',
  },
  {
    id: 3,
    title: 'Fashion',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500',
  },
];

export default function CategoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="relative group aspect-square overflow-hidden cursor-pointer"
        >
          {/* Imagem de Fundo */}
          <img
            src={cat.img}
            alt={cat.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
          />

          {/* Overlay Preto (fica invisível e aparece no hover) */}
          <div className="absolute inset-0 bg-black/60 opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Texto em Primeiro Plano */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3
              className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tighter 
                           translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              {cat.title}
            </h3>
          </div>

          {/* Linha decorativa que cresce no hover */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-0 h-1 bg-white group-hover:w-24 transition-all duration-500" />
        </div>
      ))}
    </div>
  );
}
