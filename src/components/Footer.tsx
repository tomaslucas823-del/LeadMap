import { Link } from "react-router-dom";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">
                L
              </span>
              {site.name}
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm">Produto</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#como-funciona" className="hover:text-white">Como funciona</a></li>
              <li><a href="#recursos" className="hover:text-white">Recursos</a></li>
              <li><a href="#precos" className="hover:text-white">Preços</a></li>
              <li><Link to="/login" className="hover:text-white">Entrar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>{site.email}</li>
              <li>{site.phoneDisplay}</li>
              <li>{site.city}, {site.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Privacidade</a>
            <a href="#" className="hover:text-zinc-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
