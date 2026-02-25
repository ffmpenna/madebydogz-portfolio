import { motion } from 'framer-motion';
import AboutFooter from './components/AboutFooter';
import AboutServices from './components/AboutServices';
import AboutBanner from './components/AboutBanner';
import AboutManifesto from './components/AboutManifesto';
import AboutNav from './components/AboutNav';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white selection:bg-[#ce1e1e] selection:text-white"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 mix-blend-difference flex justify-between items-center">
        {/* "header" com botão para voltar à página anterior*/}
        <AboutNav />
      </nav>
      <header className="pt-32 pb-12 px-4 md:px-12 max-w-[1800px] mx-auto">
        {/* banner chamativo com frases curtas */}
        <AboutBanner />
      </header>
      <section className="px-4 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 py-12 md:py-24 border-t border-white/10">
        {/* manifesto sobre a MadeByDogz */}
        <AboutManifesto />
      </section>
      <section className="px-4 md:px-12 max-w-[1800px] mx-auto py-24 border-t border-white/10">
        {/* lista com as áreas de atuação da MBD*/}
        <AboutServices />
      </section>
      <footer className="relative px-4 md:px-12 max-w-[1800px] mx-auto py-24 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 overflow-hidden">
        {/* footer com sugestão de parceria */}
        <AboutFooter />
      </footer>
    </motion.div>
  );
}
