export default function FillingButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-wider overflow-hidden hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer"
    >
      <span className="relative z-10">{text}</span>

      <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
    </button>
  );
}
