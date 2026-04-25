import { useNavigate } from 'react-router-dom';
import { BackgroundGrid, Marquee } from '@/components/ui';
import { ClipsHighlightGrid, PhotosHighlightGrid } from '@/components';
import { HomeBanner, HomeHeader, HomeSection } from './components';
import { useHomeData } from '@/hooks/useHomeData';
import { Footer } from '@/components/ui';

export default function Home() {
  const navigate = useNavigate();
  const { recentAlbums, recentVideos, isLoading } = useHomeData();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-red-900 selection:text-white">
      {/* Efeito para o fundo da página */}
      <BackgroundGrid />
      <div className="relative z-10 md:mx-20">
        {/* Header simples para a página principal.*/}
        <HomeHeader />
        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center px-4 md:px-20 relative py-15 md:py-20">
          {/* Banner estético e chamativo para a página principal */}
          <HomeBanner />
        </section>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ - VISUALS - EDITING - VFX - " direction="left" />
        </div>
        {/* Componente modular para criar sessões de conteúdo na página principal. 
        Leva título, subtítulo, botão de navegação para uma página desejada (nesse caso a de clipes) e
        o conteúdo da sessão por meio da "children" */}
        <HomeSection
          title="MUSIC VIDEO"
          span="VIDEOCLIPES - VISUALIZER - VFX"
          buttonText="Ver Tudo"
          onButtonClick={() => navigate('/archive?view=VIDEOS')}
          bg={0}
        >
          {/* Grid de clipes destacados */}
          <ClipsHighlightGrid items={recentVideos} isLoading={isLoading} />
        </HomeSection>

        <HomeSection
          title="CLIQUES & CENAS"
          span="ON-SET - FASHION - SHOWS"
          buttonText="Ver Tudo"
          onButtonClick={() => navigate('/archive?view=FOTOS')}
          bg={1}
        >
          {/* Grid de fotografias destacadas */}
          <PhotosHighlightGrid items={recentAlbums} isLoading={isLoading} />
        </HomeSection>

        {/* Footer contendo informções de contato e sugerindo parceria. */}
        <Footer />
      </div>
    </div>
  );
}
