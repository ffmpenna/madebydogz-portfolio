import { useNavigate } from 'react-router-dom';

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-5 md:p-10 border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-black/80">
      <span className="font-black tracking-tighter text-lg md:text-xl">MBD®</span>
      <button
        onClick={() => navigate('/')}
        className="text-[10px] md:text-xs font-mono uppercase hover:text-red-500 hover:underline underline-offset-4"
      >
        [ Return to 3D ]
      </button>
    </nav>
  );
}
