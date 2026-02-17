export default function HomeFooter() {
  return (
    <footer className="py-16 md:py-32 px-4 md:px-20 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-10">
        <div className="w-full">
          <p className="font-mono text-neutral-500 mb-2 md:mb-4 uppercase text-xs md:text-sm">
            Tem um projeto?
          </p>
          <a
            href="mailto:contato@madebydogz.com"
            className="block w-fit text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter break-words text-transparent bg-clip-text bg-[linear-gradient(90deg,#B40001_50%,#ffffff_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] transition-[background-position] duration-300 ease-in-out"
          >
            Vamos Conversar
          </a>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8 font-mono text-xs md:text-sm uppercase w-full md:w-auto">
          <a href="#" className="hover:text-red-500">
            Instagram
          </a>
          <a href="#" className="hover:text-red-500">
            Twitter
          </a>
          <a href="#" className="hover:text-red-500">
            Youtube
          </a>
        </div>
      </div>

      <h1 className="absolute bottom-[-2vw] left-[-2vw] text-[25vw] md:text-[20vw] font-black text-white/[0.02] pointer-events-none select-none leading-none z-0">
        DOGZ
      </h1>
    </footer>
  );
}
