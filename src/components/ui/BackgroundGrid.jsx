export default function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(#ce1e1e 1px, transparent 1px), linear-gradient(90deg, #ce1e1e 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    />
  );
}
