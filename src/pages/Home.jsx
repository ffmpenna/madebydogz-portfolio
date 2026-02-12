import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';
import Grid from '../components/Grid.jsx';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-red-900 selection:text-white">
      <div
        className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        <nav className="flex justify-between items-center p-5 md:p-10 border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-[#050505]/80">
          <span className="font-black tracking-tighter text-lg md:text-xl">MBD®</span>
          <button
            onClick={() => navigate('/')}
            className="text-[10px] md:text-xs font-mono uppercase hover:text-red-500 hover:underline underline-offset-4"
          >
            [ Return to 3D ]
          </button>
        </nav>

        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center px-4 md:px-20 relative py-10 md:py-0">
          <div className="relative">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-[25vw] md:text-[14vw] leading-[0.8] md:leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference break-words"
            >
              Made <br />
              <span className="text-[#B40001]">By</span> <br />
              Dogz
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 md:mt-0 md:absolute md:top-20 md:right-20 max-w-[200px] md:max-w-xs text-left md:text-right"
            >
              <p className="font-mono text-[10px] md:text-xs text-neutral-400 mb-2">
                EST. 2024 // RIO DE JANEIRO
              </p>
              <p className="text-xs md:text-sm font-bold uppercase leading-tight text-white border-l-2 border-red-600 pl-4">
                Cultura Underground. Trap, Rap & Estética Urbana.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — VISUALS — EDITING — VFX " direction="left" />
        </div>

        <section className="py-12 md:py-20 px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-0">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent stroke-text opacity-60 leading-none">
              DROPS RECENTES
            </h2>
            <span className="font-mono text-[10px] md:text-sm bg-white text-black px-2 py-1 whitespace-nowrap">
              SELECTED_WORKS_VOL.1
            </span>
          </div>

          <Grid />
        </section>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — WORLDWIDE — UNDERGROUND — " direction="right" />
        </div>

        <footer className="py-16 md:py-32 px-4 md:px-20 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-10">
            <div className="w-full">
              <p className="font-mono text-neutral-500 mb-2 md:mb-4 uppercase text-xs md:text-sm">
                Tem um projeto?
              </p>
              <a
                href="mailto:contato@madebydogz.com"
                className="block text-4xl sm:text-6xl md:text-8xl font-black text-white hover:text-[#B40001] transition-colors uppercase tracking-tighter leading-[0.9] break-words"
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
      </div>
    </div>
  );
}
