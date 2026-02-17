export default function NoiseOverlay() {
  return (
    <div className="fixed inset-0 z-[50] pointer-events-none opacity-[0.05] mix-blend-overlay">
      <svg className="w-full h-full">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </div>
  );
}
