import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Instagram, Twitter, Mail, ArrowDownRight } from 'lucide-react';
import './App.css';

const PortfolioItem = ({ title, artist, img }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 0.98 }}
    >
      <div className="img-container">
        <img src={img} alt={`${artist} - ${title}`} />
        <div className="overlay">
          <Play size={48} className="play-icon" />
        </div>
      </div>
      <div className="project-info">
        <span className="artist-name">{artist}</span>
        <h3 className="track-title">{title}</h3>
      </div>
    </motion.div>
  );
};

const Marquee = () => {
  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        <span>
          VISUALS /// TRAP /// DRILL /// UNDERGROUND /// GANG.REC /// WORLDWIDE ///{' '}
        </span>
        <span>
          VISUALS /// TRAP /// DRILL /// UNDERGROUND /// GANG.REC /// WORLDWIDE ///{' '}
        </span>
        <span>
          VISUALS /// TRAP /// DRILL /// UNDERGROUND /// GANG.REC /// WORLDWIDE ///{' '}
        </span>
        <span>
          VISUALS /// TRAP /// DRILL /// UNDERGROUND /// GANG.REC /// WORLDWIDE ///{' '}
        </span>
      </motion.div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Custom Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
  };

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Noise Overlay */}
      <div className="noise-bg"></div>

      <header>
        <div className="logo">
          GANG<span className="dot">.</span>REC
        </div>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">Studio</a>
          <a href="#contact" className="contact-btn">
            Book Us
          </a>
        </nav>
      </header>

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Audiovisual Production</p>
          <h1 className="hero-title">
            NOISE <br /> <span className="hollow">CONTROL</span>
          </h1>

          <motion.button
            className="cta-main"
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
          >
            SHOWREEL 2024 <Play size={16} style={{ marginLeft: 10 }} />
          </motion.button>
        </motion.div>
      </section>

      <Marquee />

      <section id="work" className="portfolio-grid">
        <div className="section-header">
          <h2>
            SELECTED <br /> WORKS
          </h2>
          <ArrowDownRight size={48} color="#666" />
        </div>

        <div className="grid">
          <PortfolioItem
            artist="LIL DAEMON"
            title="RED SKY"
            img="https://images.unsplash.com/photo-1533619043865-1c2e2f32ff5f?q=80&w=800&auto=format&fit=crop"
          />
          <PortfolioItem
            artist="THE BLOCK"
            title="NO SNITCH"
            img="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop"
          />
          <PortfolioItem
            artist="MC VULT"
            title="CONCRETO"
            img="https://images.unsplash.com/photo-1596395816922-4886566601b6?q=80&w=800&auto=format&fit=crop"
          />
          <PortfolioItem
            artist="PLUGSTAR"
            title="GLITCH MODE"
            img="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <h2>
            LET'S MAKE <br /> HISTORY
          </h2>
          <div className="socials">
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Mail />
            </a>
          </div>
          <p className="copyright">© 2024 GANG.REC // UNDERGROUND VISION</p>
        </div>
      </footer>
    </div>
  );
}
