import { useNavigate } from 'react-router-dom';
import Marquee from '../../components/ui/Marquee.jsx';
import BackgroundGrid from '../../components/ui/BackgroundGrid.jsx';
import ClipsHighlightGrid from '../../components/ClipsHighlightGrid.jsx';
import PhotosHighlightGrid from '../../components/PhotosHighlightGrid.jsx';
import { projects } from '../../data/projects.js';
import HomeHeader from './components/HomeHeader.jsx';
import HomeFooter from './components/HomeFooter.jsx';
import HomeBanner from './components/HomeBanner.jsx';
import HomeSection from './components/HomeSection.jsx';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-red-900 selection:text-white">
      {/* Efeito para o fundo da página */}
      <BackgroundGrid />
      <div className="relative z-10">
        {/* Header simples para a página principal. Tem apenas a função de voltar à landingPage */}
        <HomeHeader />
        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center px-4 md:px-20 relative py-15 md:py-20">
          {/* Banner estético e chamativo para a página principal */}
          <HomeBanner />
        </section>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — VISUALS — EDITING — VFX " direction="left" />
        </div>
        {/* Componente modular para criar sessões de conteúdo na página principal. 
        Leva título, subtítulo, botão de navegação para uma página desejada (nesse caso a de clipes) e
        o conteúdo da sessão por meio da "children" */}
        <HomeSection
          title="DROPS RECENTES"
          span="SELECTED_WORKS_VOL.1"
          buttonText="Ver Tudo"
          onButtonClick={() => navigate('/archive?view=MOTION')}
          bg={0}
        >
          {/* Grid de clipes destacados */}
          <ClipsHighlightGrid items={projects.videos} />
        </HomeSection>

        <HomeSection
          title="CLIQUES & CENAS"
          span="FASHION & BTS"
          buttonText="Ver Tudo"
          onButtonClick={() => navigate('/archive?view=STILLS')}
          bg={1}
        >
          {/* Grid de fotografias destacadas */}
          <PhotosHighlightGrid items={projects.photos} />
        </HomeSection>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — WORLDWIDE — UNDERGROUND — " direction="right" />
        </div>
        {/* Footer contendo informções de contato e sugerindo parceria. */}
        <HomeFooter />
      </div>
    </div>
  );
}
