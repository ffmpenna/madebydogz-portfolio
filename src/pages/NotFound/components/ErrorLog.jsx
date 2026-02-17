import { useEffect, useState } from 'react';

export default function ErrorLog() {
  const [codes, setCodes] = useState([]);
  // useEffect para simular um fluxo constante de erros de sistema;
  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.random().toString(16).substr(2, 8).toUpperCase();
      const err = `ERR_0x${hex} // DISK_CORRUPTED`;
      setCodes((prev) => [err, ...prev].slice(0, 15));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 h-full w-full md:w-64 p-6 font-mono text-[10px] text-red-500/30 overflow-hidden pointer-events-none select-none z-0">
      {/* map com efeito de Fade vertical */}
      {codes.map((code, i) => (
        <div key={i} style={{ opacity: 1 - i * 0.1 }}>
          {code}
        </div>
      ))}
    </div>
  );
}
