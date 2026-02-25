import { useNavigate } from 'react-router-dom';

export default function AboutNav() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors uppercase tracking-widest"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK
      </button>
      <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
        // About MBD®
      </div>
    </>
  );
}
