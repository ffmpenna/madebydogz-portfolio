import { useNavigate } from 'react-router-dom';
import Marquee from '../../components/ui/Marquee.jsx';
import BackgroundGrid from '../../components/ui/BackgroundGrid.jsx';
import HighlightGrid from '../../components/HighlightGrid.jsx';
import { projects } from '../../data/projects.js';
import HomeHeader from './components/HomeHeader.jsx';
import HomeFooter from './components/HomeFooter.jsx';
import HomeBanner from './components/HomeBanner.jsx';
import HomeSection from './components/HomeSection.jsx';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-red-900 selection:text-white">
      <BackgroundGrid />
      <div className="relative z-10">
        <HomeHeader />
        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center px-4 md:px-20 relative py-15 md:py-20">
          <HomeBanner />
        </section>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — VISUALS — EDITING — VFX " direction="left" />
        </div>

        <HomeSection
          title="DROPS RECENTES"
          span="SELECTED_WORKS_VOL.1"
          buttonText="Ver Tudo"
          onButtonClick={() => navigate('/archive')}
        >
          <HighlightGrid items={projects} />
        </HomeSection>

        <div className="py-4 md:py-0">
          <Marquee text="MADEBYDOGZ — WORLDWIDE — UNDERGROUND — " direction="right" />
        </div>

        <HomeFooter />
      </div>
    </div>
  );
}
