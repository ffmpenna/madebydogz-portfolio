export default function AlbumCredits({ specs, credits }) {
  return (
    <section className="max-w-[1800px] mx-auto px-4 py-12 md:py-20 border-b border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {specs && (
          <div>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
              Specs
            </p>
            <p className="text-sm font-mono text-white uppercase tracking-wider">
              {specs}
            </p>
          </div>
        )}

        {credits.map((c, index) => (
          <div key={index}>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
              {c.role}
            </p>
            {c.people?.map((person, pIdx) => (
              <span className="font-mono" key={pIdx}>
                {/* Link do Insta se tiver, apenas o texto se não tiver */}
                {person.instagram ? (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#B40001] transition-colors"
                  >
                    {person.name}
                  </a>
                ) : (
                  <span className="text-white">{person.name}</span>
                )}

                {/* Coloca uma vírgula se não for a última pessoa da lista */}
                {pIdx < c.people.length - 1 && <span className="text-white/50">, </span>}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
