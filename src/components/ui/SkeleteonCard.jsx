export default function SkeletonCard({ size }) {
  return (
    // O aspect-[4/5] (ou o que você usar no seu card real) garante que a caixa vazia
    // tenha a exata mesma proporção da foto que vai entrar ali.
    <div
      className={`bg-white/5 animate-pulse border border-white/5 relative overflow-hidden ${size}`}
    >
      {/* Detalhe estético: Uma barra inferior simulando onde ficam os textos do título/cliente */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
        {/* Linha grossa para o título */}
        <div className="h-4 w-3/4 bg-white/10 rounded-sm"></div>
        {/* Linha fina para o subtítulo/categoria */}
        <div className="h-3 w-1/3 bg-white/10 rounded-sm"></div>
      </div>
    </div>
  );
}
