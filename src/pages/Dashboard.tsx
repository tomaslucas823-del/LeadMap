import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import {
  Search, Plus, Building2, Phone, Mail, MessageCircle,
  MoreHorizontal, Filter, Download, LayoutDashboard,
  Users, Settings, LogOut, Brain,
} from "lucide-react";

const MOCK_LEADS = [
  { id: 1, name: "Clínica Sorriso Maputo", category: "Clínicas odontológicas", city: "Maputo", phone: "+258 84 123 4567", whatsapp: true, email: "contacto@sorrisomaputo.co.mz", score: 87, status: "Novo" },
  { id: 2, name: "Odonto Beira Center", category: "Clínicas odontológicas", city: "Beira", phone: "+258 82 987 6543", whatsapp: true, email: null, score: 72, status: "Novo" },
  { id: 3, name: "Dental Care Nampula", category: "Clínicas odontológicas", city: "Nampula", phone: "+258 86 555 1212", whatsapp: true, email: "info@dentalcare.co.mz", score: 91, status: "Contato" },
  { id: 4, name: "Clínica Horizonte Matola", category: "Clínicas odontológicas", city: "Matola", phone: "+258 84 333 2211", whatsapp: false, email: null, score: 65, status: "Novo" },
];

export function Dashboard() {
  const [niche, setNiche] = useState("Clínicas odontológicas");
  const [city, setCity] = useState("Maputo");
  const [quantity, setQuantity] = useState(50);
  const [searching, setSearching] = useState(false);
  const [leads] = useState(MOCK_LEADS);
  const [activeTab, setActiveTab] = useState<"leads" | "campanhas">("leads");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => setSearching(false), 2000);
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-60 border-r border-white/10 bg-surface-2 hidden md:flex flex-col">
        <div className="p-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">L</span>
            {site.name}
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <button onClick={() => setActiveTab("leads")} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${activeTab === "leads" ? "bg-brand-500/15 text-brand-300" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}>
            <Users size={18} /> Leads
          </button>
          <button onClick={() => setActiveTab("campanhas")} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${activeTab === "campanhas" ? "bg-brand-500/15 text-brand-300" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}>
            <LayoutDashboard size={18} /> Campanhas
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition">
            <Settings size={18} /> Definições
          </button>
        </nav>
        <div className="p-3 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition">
            <LogOut size={18} /> Sair
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-4 sm:px-6">
          <h1 className="text-sm font-medium">{activeTab === "leads" ? "Encontrar leads" : "Campanhas"}</h1>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 hidden sm:inline">1.000 créditos disponíveis</span>
            <button className="text-sm bg-brand-500 hover:bg-brand-400 text-white px-3 py-1.5 rounded-lg transition flex items-center gap-1.5">
              <Plus size={16} /> Nova busca
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6">
          {activeTab === "leads" && (
            <>
              <form onSubmit={handleSearch} className="mb-8 p-5 rounded-2xl glass grid sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5">Nicho</label>
                  <input value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-surface border border-white/10 text-sm outline-none focus:border-brand-500" placeholder="Ex: clínicas odontológicas" />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5">Cidade</label>
                  <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-surface border border-white/10 text-sm outline-none focus:border-brand-500">
                    {site.cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5">Quantidade</label>
                  <input type="number" min={10} max={200} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-surface border border-white/10 text-sm outline-none focus:border-brand-500" />
                </div>
                <div className="flex items-end">
                  <button type="submit" disabled={searching} className="w-full bg-brand-500 hover:bg-brand-400 disabled:opacity-60 text-white text-sm font-medium py-2 rounded-lg transition flex items-center justify-center gap-2">
                    {searching ? "A capturar..." : (<><Search size={16} /> Buscar leads</>)}
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-zinc-400">{leads.length} leads · {niche} · {city}</p>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition"><Filter size={16} /></button>
                  <button className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition"><Download size={16} /></button>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-surface-2 text-zinc-500 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium">Empresa</th>
                      <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Cidade</th>
                      <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Contacto</th>
                      <th className="text-left px-4 py-3 font-medium">Score IA</th>
                      <th className="text-left px-4 py-3 font-medium">Estado</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                              <Building2 size={16} className="text-brand-400" />
                            </div>
                            <div>
                              <p className="font-medium">{lead.name}</p>
                              <p className="text-xs text-zinc-500">{lead.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell text-zinc-400">{lead.city}</td>
                        <td className="px-4 py-3 hidden md:table-cell">
                          <div className="flex items-center gap-2 text-zinc-400">
                            {lead.whatsapp && <MessageCircle size={14} className="text-green-400" />}
                            {lead.email && <Mail size={14} />}
                            {!lead.whatsapp && !lead.email && <Phone size={14} />}
                            <span className="text-xs">{lead.phone}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <Brain size={14} className="text-brand-400" />
                            <span className={lead.score >= 80 ? "text-green-400" : lead.score >= 60 ? "text-yellow-400" : "text-zinc-400"}>{lead.score}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs ${lead.status === "Novo" ? "bg-blue-500/15 text-blue-300" : "bg-amber-500/15 text-amber-300"}`}>{lead.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition"><MoreHorizontal size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {searching && (
                <div className="mt-6 p-4 rounded-xl border border-brand-500/30 bg-brand-500/5 flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
                  A capturar empresas de “{niche}” em {city}…
                </div>
              )}
            </>
          )}

          {activeTab === "campanhas" && (
            <div className="text-center py-20 text-zinc-500">
              <LayoutDashboard size={40} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium text-zinc-300">Campanhas e Kanban</p>
              <p className="mt-2 text-sm max-w-sm mx-auto">Em breve: organize leads em campanhas com colunas Novo → Contato → Proposta → Fechado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
