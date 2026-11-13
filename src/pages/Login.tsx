import { Link, useNavigate } from "react-router-dom";
import { site } from "@/lib/site";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulação — depois ligamos auth real
    setTimeout(() => {
      setLoading(false);
      navigate("/app");
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-surface">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 font-semibold text-xl">
            <span className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">
              L
            </span>
            {site.name}
          </Link>
          <p className="mt-3 text-zinc-400 text-sm">Entre para começar a prospectar</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl glass space-y-5"
        >
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 focus:border-brand-500 outline-none transition text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Palavra-passe</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 focus:border-brand-500 outline-none transition text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-500 hover:bg-brand-400 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition"
          >
            {loading ? "A entrar..." : "Entrar"}
          </button>

          <p className="text-center text-xs text-zinc-500">
            Ainda não tem conta?{" "}
            <button
              type="button"
              onClick={() => navigate("/app")}
              className="text-brand-400 hover:underline"
            >
              Criar conta grátis
            </button>
          </p>
        </form>

        <p className="text-center text-xs text-zinc-600 mt-6">
          Ao continuar, aceita os Termos e a Política de Privacidade.
        </p>
      </div>
    </div>
  );
}
