// Botão de preenchimento com animação de preenchimento ao passar o mouse
export default function FillingButton({ onClick, text, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-wider overflow-hidden hover:bg[#CE1E1E] hover:text-white transition-colors duration-300 cursor-pointer"
    >
      <span className="relative z-10">{text}</span>

      <div className="absolute inset-0 bg[#CE1E1E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
    </button>
  );
}
