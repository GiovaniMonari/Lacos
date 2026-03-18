import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-rose-400 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="font-bold text-white text-sm leading-tight">
                Casa Laços Humanos
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Promovendo inclusão e apoio social para todos. Juntos somos mais fortes.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Início" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/servicos", label: "Serviços" },
                { to: "/como-ajudar", label: "Como Ajudar" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-stone-400 hover:text-rose-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cadastros */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Participe</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cadastro" className="text-stone-400 hover:text-rose-300 transition-colors">
                  Quero Ajuda
                </Link>
              </li>
              <li>
                <Link to="/cadastro#voluntario" className="text-stone-400 hover:text-rose-300 transition-colors">
                  Ser Voluntário
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-stone-400 hover:text-rose-300 transition-colors">
                  Fazer Doação
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-stone-400 hover:text-rose-300 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-stone-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contato@casalacoshumanos.org
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @casalacoshumanos
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Casa Laços Humanos. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para a comunidade</p>
        </div>
      </div>
    </footer>
  );
}
