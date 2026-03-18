import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cadastro", label: "Cadastro" },
  { to: "/como-ajudar", label: "Como Ajudar" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/images/lacos.logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-stone-800 text-base leading-tight">
            Casa<br />
            <span className="text-rose-400 text-xs font-semibold tracking-wide">Laços Humanos</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-rose-50 text-rose-500"
                  : "text-stone-600 hover:text-rose-500 hover:bg-rose-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cadastro"
            className="ml-2 px-4 py-2 bg-rose-400 text-white rounded-lg text-sm font-semibold hover:bg-rose-500 transition-all duration-200 shadow-sm"
          >
            Quero Ajuda
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? "bg-rose-50 text-rose-500"
                    : "text-stone-600 hover:bg-rose-50 hover:text-rose-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cadastro"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-rose-400 text-white rounded-lg text-sm font-semibold text-center hover:bg-rose-500 transition"
            >
              Quero Ajuda
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
