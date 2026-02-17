const About = () => {
  const diferenciais = [
    {
      title: 'Estética Dirty',
      desc: 'Texturas de película, VHS e glitch que definem o underground.',
    },
    { title: 'Ritmo e Corte', desc: 'Edição dinâmica que acompanha o flow do beat.' },
    {
      title: 'Cena Urbana',
      desc: 'Locações autênticas que traduzem a realidade das ruas.',
    },
  ];

  return (
    <div className="bg-white text-black">
      <section className="py-16 border-b-4 border-black">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          NÓS SOMOS <br />
          <div className="bg-black inline-block px-2 py-1">
            <span className="text-white">A RUA</span>
          </div>
        </h2>
        <p className="max-w-2xl text-xl font-medium leading-tight">
          Produtora audiovisual independente. Traduzindo o grave do trap e a vivência do
          rap em imagens cruas e autênticas.
        </p>
      </section>

      <section className="bg-black text-white -mx-4 px-4 py-20 my-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm uppercase tracking-widest text-blue-500 mb-4 font-bold">
            Nosso Manifesto
          </h3>
          <p className="text-2xl md:text-4xl font-light italic leading-relaxed">
            "Não fazemos apenas clipes. Criamos a identidade visual de quem não tem voz na
            grande mídia. Do underground para o mundo, sem filtro e com a estética que a
            cena exige."
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {diferenciais.map((item, index) => (
            <div key={index} className="border-l-4 border-black pl-6 py-4">
              <h4 className="text-xl font-black uppercase mb-2 italic">{item.title}</h4>
              <p className="text-slate-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-64 bg-slate-200 overflow-hidden rounded-sm mt-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000')] bg-cover bg-center grayscale contrast-125 opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <span className="text-black text-3xl font-black uppercase tracking-widest border-2 border-black px-6 py-2">
            Keep it Real
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
