import ContactModal from '@/components/ContactModal';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#050505] pt-20 pb-8 md:pt-32 md:pb-8 px-4 md:px-12 border-t border-white/5 overflow-hidden">
        {/* Texto Gigante de Fundo (Centralizado e alinhado na base) */}
        <h1 className="absolute -bottom-[5%] left-0 right-0 text-center text-[28vw] md:text-[22vw] font-black text-white/[0.02] pointer-events-none select-none leading-none z-0 tracking-tighter">
          MADEBYDOGZ
        </h1>

        <div className="relative z-10 max-w-[1800px] mx-auto flex flex-col justify-between h-full min-h-[40vh]">
          {/* Topo do Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-4">
            {/* Call to Action (Esquerda) */}
            <div className="w-full md:w-2/3">
              <p className="font-mono text-neutral-500 mb-6 uppercase text-xs md:text-sm tracking-widest flex items-center gap-3">
                Tem um projeto?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="block text-left w-fit text-5xl sm:text-7xl md:text-[100px] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-[linear-gradient(90deg,#B40001_50%,#ffffff_50%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] transition-[background-position] duration-500 ease-out cursor-pointer"
              >
                Vamos Conversar
              </button>
            </div>

            {/* Infos & Socials (Direita) */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full md:w-auto md:justify-end">
              {/* Localização */}
              <div className="flex flex-col gap-2 font-mono text-xs md:text-sm text-neutral-400 uppercase leading-relaxed">
                <p className="text-white font-bold tracking-widest mb-2">Local</p>
                <p>Rio de Janeiro, BR</p>
              </div>

              {/* Redes Sociais */}
              <div className="flex flex-col gap-4 font-mono text-sm md:text-base uppercase">
                <p className="text-white font-bold tracking-widest text-xs mb-1">
                  Socials
                </p>
                {['Instagram', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href={
                      social === 'Instagram'
                        ? 'https://instagram.com/madebydogz'
                        : 'https://youtube.com/@madebydogz'
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-neutral-400 transition-colors w-fit"
                  >
                    <span className="group-hover:-translate-x-1 group-hover:text-[#ce1e1e] transition-all duration-300">
                      {social}
                    </span>
                    <span className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ce1e1e]">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Base do Footer (Copyright e Back to Top) */}
          <div className="mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs uppercase text-neutral-600">
            <div className="flex gap-4 items-center">
              <span>© {currentYear} MBD®</span>
              <span className="hidden md:inline text-neutral-800">|</span>
              <span className="hidden md:inline">All rights reserved</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 hover:text-white transition-colors"
            >
              Back to Top
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {isModalOpen && (
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
