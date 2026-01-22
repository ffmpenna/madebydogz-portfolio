import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';
import Card from '../components/Card.jsx';
import Grid from '../components/Grid.jsx';

// --- PÁGINA HOME ---
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-yellow-900 selection:text-white">
      {/* Grid de Fundo Global (Estilo planta baixa/técnico) */}
      <div
        className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        {/* === HEADER SIMPLES === */}
        <nav className="flex justify-between items-center p-6 md:p-10 border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-[#050505]/80">
          <span className="font-black tracking-tighter text-xl">MBD®</span>
          <button
            onClick={() => navigate('/')}
            className="text-xs font-mono uppercase hover:text-yellow-500 hover:underline underline-offset-4"
          >
            [ Return to 3D ]
          </button>
        </nav>

        {/* === HERO SECTION (Urban/Brutalist) === */}
        <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 relative">
          {/* Título Gigante */}
          <div className="relative">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-[14vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference"
            >
              Made <br />
              <span className="text-yellow-600">By</span> <br />
              Dogz
            </motion.h1>

            {/* Elemento flutuante decorativo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-0 right-0 md:top-20 md:right-20 max-w-xs text-right hidden md:block"
            >
              <p className="font-mono text-xs text-neutral-400 mb-2">
                EST. 2024 // RIO DE JANEIRO
              </p>
              <p className="text-sm font-bold uppercase leading-tight text-white border-l-2 border-yellow-600 pl-4">
                Cultura Underground. Trap, Rap & Estética Urbana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* === MARQUEE DIVIDER === */}
        <Marquee text="DIRECTED BY DOGZ — VISUALS — EDITING — VFX " direction="left" />

        {/* === THE WORK (Gallery) === */}
        <section className="py-20 px-6 md:px-20">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-transparent stroke-text opacity-60">
              DROPS RECENTES
            </h2>
            <span className="font-mono text-xs md:text-sm bg-white text-black px-2 py-1">
              SELECTED_WORKS_VOL.1
            </span>
          </div>

          {/* Layout Assimétrico Urbano */}
          <Grid />
        </section>

        {/* === MARQUEE DIVIDER 2 === */}
        <Marquee text="MADE BY DOGZ — WORLDWIDE — UNDERGROUND — " direction="right" />

        {/* === CONTACT / FOOTER === */}
        <footer className="py-32 px-6 md:px-20 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div>
              <p className="font-mono text-neutral-500 mb-4 uppercase text-s">
                Tem um projeto?
              </p>
              <a
                href="mailto:contato@madebydogz.com"
                className="text-5xl md:text-8xl font-black text-white hover:text-yellow-600 transition-colors uppercase tracking-tighter leading-none"
              >
                Vamos Conversar
              </a>
            </div>

            <div className="flex gap-8 font-mono text-sm uppercase">
              <a href="#" className="hover:text-yellow-500">
                Instagram
              </a>
              <a href="#" className="hover:text-yellow-500">
                Twitter
              </a>
              <a href="#" className="hover:text-yellow-500">
                Youtube
              </a>
            </div>
          </div>

          {/* Branding Gigante de Fundo no Footer */}
          <h1 className="absolute bottom-[-5vw] left-0 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none leading-none">
            DOGZ
          </h1>
        </footer>
      </div>
    </div>
  );
}
