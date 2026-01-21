import CategoriesGrid from '../components/Grid';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-black text-white py-32 px-4 border-b border-zinc-800">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase">
            Direto das
          </h2>
          <h2 className="text-6xl md:text-9xl bg-white text-black font-black italic tracking-tighter uppercase mt-4 mx-100">
            Ruas
          </h2>
          <p className="mt-6 text-zinc-400 font-medium uppercase tracking-widest">
            Audiovisual Underground & Cultura Urbana
          </p>
        </div>
      </section>

      <section className="text-black py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <CategoriesGrid />
        </div>
      </section>

      <section className="bg-white text-black py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-black uppercase mb-12 border-l-8 border-black pl-4">
            Drops Recentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-200 aspect-video flex items-center justify-center font-bold italic">
              CLIP_01.MP4
            </div>
            <div className="bg-zinc-200 aspect-video flex items-center justify-center font-bold italic">
              CLIP_02.MP4
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-3xl md:text-5xl font-light leading-tight italic">
            "A estética do erro, a textura do asfalto e a verdade de quem vive a cena."
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-24 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-black text-2xl uppercase underline decoration-4">
              Direção
            </h4>
            <p className="mt-2 text-zinc-600">
              Visão criativa e narrativa focada na identidade do artista.
            </p>
          </div>
          <div>
            <h4 className="font-black text-2xl uppercase underline decoration-4">
              Edição
            </h4>
            <p className="mt-2 text-zinc-600">
              Cortes rápidos, efeitos glitch e color grading urbano.
            </p>
          </div>
          <div>
            <h4 className="font-black text-2xl uppercase underline decoration-4">
              Fotografia
            </h4>
            <p className="mt-2 text-zinc-600">
              Still e cobertura de bastidores com estética analógica.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Bora pro set?
          </h2>
          <button className="bg-yellow-500 hover:bg-white hover:text-black text-white font-black py-4 px-10 transition-all duration-300 uppercase tracking-tighter text-xl">
            Solicitar Orçamento
          </button>
        </div>
      </section>
    </div>
  );
}
