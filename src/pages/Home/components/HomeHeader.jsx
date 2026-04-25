import { useNavigate } from 'react-router-dom';

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <header className="w-screen ml-[calc(50%-50vw)] bg-[#050505]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1800px] mx-auto px-5 md:px-20 py-5 flex items-center gap-5 md:gap-10">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
          MBD® <span className="text-neutral-600">HOME</span>
        </h1>
        <div className="flex gap-5">
          <button
            onClick={() => navigate('/archive')}
            className="text-sm md:text-xl font-black uppercase hover:text[#CE1E1E] hover:underline hover:cursor-pointer underline-offset-4"
          >
            BIBLIOTECA
          </button>
          <button
            onClick={() => navigate('/about')}
            className="text-sm md:text-xl font-black uppercase hover:text[#CE1E1E] hover:underline hover:cursor-pointer underline-offset-4"
          >
            Sobre Nós
          </button>
        </div>
      </div>
    </header>
  );
}

//  <nav className="flex justify-between items-center p-5 md:p-10 border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-black/80">
//   <div className="flex items-center gap-5">
//     <span className="font-black tracking-tighter text-lg md:text-xl">MBD®</span>
//     <button
//       onClick={() => navigate('/archive')}
//       className="text-xs md:text-sm font-black uppercase hover:text[#CE1E1E] hover:underline underline-offset-4"
//     >
//       BIBLIOTECA
//     </button>
//     <button
//       onClick={() => navigate('/about')}
//       className="text-xs md:text-sm font-black uppercase hover:text[#CE1E1E] hover:underline underline-offset-4"
//     >
//       SOBRE NÓS
//     </button>
//   </div>
//   <button
//     onClick={() => navigate('/')}
//     className="text-[10px] md:text-xs font-mono uppercase hover:text[#CE1E1E] hover:underline underline-offset-4"
//   >
//     [ Return to 3D ]
//   </button>
// </nav>
