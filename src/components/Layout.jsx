import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Aqui é onde as páginas (Home, About, etc) vão aparecer */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
