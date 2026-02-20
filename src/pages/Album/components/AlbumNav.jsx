import { useNavigate } from 'react-router-dom';

export default function AlbumNav({ albumId }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center mix-blend-difference">
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors uppercase tracking-widest"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> GO BACK
      </button>
      <div className="text-[10px] font-mono tracking-widest text-white/50">
        // {albumId.padStart(3, '0')}
      </div>
    </nav>
  );
}
