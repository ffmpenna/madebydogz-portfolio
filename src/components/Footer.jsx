import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Meu Projeto</h3>
            <p className="text-sm leading-relaxed">
              Transformando ideias em realidade com as melhores tecnologias do mercado.
              Focado em performance e experiência do usuário.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all"
              >
                <span className="sr-only">LinkedIn</span>
                {/* Ícone simples ou texto */}
                <span className="font-bold">In</span>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-all"
              >
                <span className="sr-only">GitHub</span>
                <span className="font-bold">Git</span>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-all"
              >
                <span className="sr-only">Twitter</span>
                <span className="font-bold">X</span>
              </a>
            </div>
            <p className="mt-4 text-sm">contato@empresa.com</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {currentYear} Meu Projeto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
