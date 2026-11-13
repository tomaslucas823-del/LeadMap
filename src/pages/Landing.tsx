import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import {
  MapPin, Search, Brain, Kanban, MessageSquare, Download,
  CheckCircle2, ArrowRight, Building2, Users, Zap,
} from "lucide-react";

export function Landing() {
  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/40 via-surface to-surface pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-brand-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Disponível em Maputo, Matola, Beira e Nampula
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Encontre empresas no Google Maps,{" "}
            <span className="text-brand-400">enriqueça contatos</span> e venda com IA
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            LeadMap captura leads B2B por nicho e cidade, evita duplicados, analisa aderência com IA
            e organiza tudo num funil comercial pronto a trabalhar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg shadow-brand-500/20">
              Testar 7 dias grátis <ArrowRight size={18} />
            </Link>
            <a href="#como-funciona" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 transition">
              Ver como funciona
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Sem cartão no teste · Cancele quando quiser</p>
        </div>
      </section>

      <section className="py-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm text-zinc-500 mb-6">Prospecção organizada para as principais cidades de Moçambique</p>
          <div className="flex flex-wrap justify-center gap-3">
            {site.cities.map((city) => (
              <span key={city} className="px-4 py-1.5 rounded-full glass text-sm text-zinc-300">{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Da busca à próxima ação</h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">Escolha o mercado. O LeadMap encontra, enriquece e organiza as oportunidades.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: Search, title: "Escolha o mercado", desc: "Defina nicho, cidade e quantidade de empresas." },
              { step: "02", icon: MapPin, title: "Capture empresas novas", desc: "Evita duplicidades e salva só leads novos." },
              { step: "03", icon: Brain, title: "Enriqueça e analise", desc: "WhatsApp, e-mail e análise de aderência com IA." },
              { step: "04", icon: Kanban, title: "Organize e avance", desc: "Funil visual e mensagens personalizadas." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl glass hover:bg-white/[0.07] transition">
                <span className="text-xs font-mono text-brand-400 mb-4 block">{item.step}</span>
                <item.icon className="w-8 h-8 text-brand-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="py-24 bg-surface-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tudo o que precisa para prospectar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Captura do Google Maps", desc: "Busca por nicho e localização com deduplicação." },
              { icon: MessageSquare, title: "Contatos e WhatsApp", desc: "Enriquece telefone, WhatsApp e e-mail disponíveis." },
              { icon: Brain, title: "Análise com IA", desc: "Score de aderência, dores e mensagem personalizada." },
              { icon: Kanban, title: "Funil visual", desc: "Novo → Contato → Proposta → Fechado." },
              { icon: Download, title: "Exportação Excel", desc: "Exporte a base filtrada quando quiser." },
              { icon: Zap, title: "Feito para Moçambique", desc: "Foco em WhatsApp e cidades locais." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/5 bg-surface hover:border-white/10 transition">
                <item.icon className="w-7 h-7 text-brand-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Um plano simples para começar</h2>
            <p className="mt-4 text-zinc-400">Teste 7 dias grátis. Depois escolha o que faz sentido.</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-2xl border border-brand-500/30 bg-surface relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">Recomendado</div>
              <h3 className="text-xl font-semibold">LeadMap Completo</h3>
              <p className="text-zinc-400 text-sm mt-1">Tudo o que precisa para prospectar</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">2.490</span>
                <span className="text-zinc-400">MT / mês</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {["Capturas ilimitadas", "1.000 créditos de enriquecimento / mês", "Análise completa com IA", "Mensagens personalizadas", "Kanban e campanhas", "Exportação Excel"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/login" className="mt-8 w-full inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-medium py-3 rounded-xl transition">
                Começar com 7 dias grátis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pare de pesquisar empresa por empresa</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">Organize a prospecção, ganhe contexto antes de contactar e avance com um funil claro.</p>
          <Link to="/login" className="mt-8 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-medium px-8 py-3.5 rounded-xl transition shadow-lg shadow-brand-500/20">
            Começar agora — 7 dias grátis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
