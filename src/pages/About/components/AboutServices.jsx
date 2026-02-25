export default function AboutServices() {
  const services = [
    {
      title: 'Videos',
      items: [
        'Music Videos',
        'Visualizers & Lyric Videos',
        'VFX & Post-Production',
        'Fashion Films',
      ],
    },
    {
      title: 'Fotografia',
      items: [
        'Cover Arts',
        'Editoriais de Moda (Streetwear)',
        'Fotografia de Shows & Turnês',
        'Behind The Scenes (BTS)',
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-sm md:text-lg font-mono text-neutral-500 uppercase tracking-widest mb-12 md:mb-20 text-center">
        // Áreas de Atuação
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
        {services.map((service) => (
          <div className="border border-white/5 p-8 md:p-12 hover:bg-white/5 transition-colors group">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ce1e1e] transition-colors cursor-default">
              {service.title}.
            </h3>
            <ul className="space-y-2 font-mono text-sm text-neutral-400 cursor-default">
              {service.items.map((item) => (
                <li key={item}>+ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
