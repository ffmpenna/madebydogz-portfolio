import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-blue-500 transition text-sm uppercase font-bold tracking-widest"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 transition text-sm uppercase font-bold tracking-widest"
          >
            Sobre
          </Link>
        </div>

        <div className="text-center">
          <img
            src={logo}
            alt="Logo"
            className="inline-block h-15 transition-transform duration-500 ease-in-out hover:scale-125 hover:cursor-pointer"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="#contato"
            className="text-xs border border-white px-3 py-1 hover:bg-white hover:text-black transition uppercase font-bold"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
