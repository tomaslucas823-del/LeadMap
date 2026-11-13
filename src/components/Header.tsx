import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">
            L
          </span>
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#como-funciona" className="hover:text-white transition">Como funciona</a>
          <a href="#recursos" className="hover:text-white transition">Recursos</a>
          <a href="#precos" className="hover:text-white transition">Preços</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-zinc-300 hover:text-white transition px-3 py-1.5"
          >
            Entrar
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium bg-brand-500 hover:bg-brand-400 text-white px-4 py-2 rounded-lg transition"
          >
            Começar grátis
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-surface-2 px-4 py-4 space-y-3">
          <a href="#como-funciona" className="block py-2" onClick={() => setOpen(false)}>Como funciona</a>
          <a href="#recursos" className="block py-2" onClick={() => setOpen(false)}>Recursos</a>
          <a href="#precos" className="block py-2" onClick={() => setOpen(false)}>Preços</a>
          <a href="#faq" className="block py-2" onClick={() => setOpen(false)}>FAQ</a>
          <div className="pt-3 flex flex-col gap-2">
            <Link to="/login" className="text-center py-2" onClick={() => setOpen(false)}>Entrar</Link>
            <Link
              to="/login"
              className="text-center bg-brand-500 text-white py-2.5 rounded-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Começar grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
