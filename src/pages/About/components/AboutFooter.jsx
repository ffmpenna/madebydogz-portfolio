import FillingButton from '../../../components/ui/FillingButton';

export default function AboutFooter() {
  return (
    <>
      <div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          [ NOME ]
        </h2>
        <p className="text-sm font-mono text-[#ce1e1e] uppercase tracking-widest mb-6">
          Diretor & Fotógrafo
        </p>
        <a
          href="https://www.instagram.com/madebydogz/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FillingButton text="Vamos trabalhar juntos" />
        </a>
      </div>
      <div className="w-full md:w-1/3 text-sm font-mono text-neutral-500 leading-relaxed z-10">
        Com um olhar afiado para a estética urbana e vasta experiência em sets de
        filmagem, comando a visão criativa por trás da lente da MBD. O foco não é apenas
        apertar o rec, mas construir uma identidade visual sólida para cada artista.
      </div>
      <h1 className="absolute bottom-[-1vw] left-[-2vw] text-[25vw] md:text-[20vw] font-black text-white/[0.01] pointer-events-none select-none leading-none z-0">
        MADE
      </h1>
    </>
  );
}
