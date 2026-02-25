import { useNavigate } from 'react-router-dom';

import BackgroundGrid from '../../components/ui/BackgroundGrid';
import ErrorLog from './components/ErrorLog';
import SystemAlert from './components/SystemAlert';
import SecurityFooter from './components/SecurityFooter';
import FillingButton from '../../components/ui/FillingButton';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Componentes para adicionar detalhes visuais à página de erro 404 */}
      <ErrorLog />
      <BackgroundGrid />

      <div className="relative z-10 text-center px-4">
        <SystemAlert />

        <div className="relative mb-4 select-none">
          <h1 className="text-[12rem] md:text-[18rem] leading-none font-black tracking-tighter relative">
            404
          </h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-2 mix-blend-difference">
          Footage Missing
        </h2>

        <p className="text-neutral-500 font-mono text-sm max-w-md mx-auto mb-10">
          O arquivo que você está procurando foi movido, deletado ou apreendido pela
          polícia.
        </p>

        <FillingButton onClick={() => navigate('/')} text="Voltar à base" />
      </div>

      <SecurityFooter />
    </div>
  );
}
