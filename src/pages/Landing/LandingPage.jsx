import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Canva from '../../components/3d/Canva';
import LandingHeader from './components/LandingHeader';
import LandingTitle from './components/LandingTitle';

export default function LandingPage() {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  // Função para lidar com a transição suave de saída da landingPage para a homePage.
  const handleExplore = () => {
    setExiting(true);

    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden">
      <div
        className={`absolute inset-0 z-50 bg-black transition-opacity duration-[1000ms] ease-in-out
        ${exiting ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      {/* Conjundo de componentes 3D que compões a estética do fundo da landingPage */}
      <Canva />
      <div
        className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-12 z-10 transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Header e título da landingPage, ambos simples e estéticos. */}
        <LandingHeader />
        <LandingTitle />

        {/* Botão que transiciona para a Home */}
        <button
          onClick={handleExplore}
          className="mb-10 sm:mb-0 text-white pointer-events-auto border border-white/20 bg-white/5 backdrop-blur-sm  px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm"
        >
          EXPLORE O UNDERGROUND
        </button>
      </div>
    </div>
  );
}
