export default function AlbumCredits({ specs, credits }) {
  return (
    <section className="max-w-[1800px] mx-auto px-4 py-12 md:py-20 border-b border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div>
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
            Specs
          </p>
          <p className="text-sm font-mono text-white uppercase tracking-wider">{specs}</p>
        </div>

        {credits.map((credit, index) => (
          <div key={index}>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
              {credit.role}
            </p>
            <p className="text-sm font-mono text-white uppercase tracking-wider">
              {credit.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
