export const site = {
  name: "LeadMap",
  legalName: "LeadMap Moçambique, Lda",
  tagline: "Encontre empresas no Google Maps, enriqueça contatos e venda com IA",
  description:
    "Plataforma de prospecção B2B para Moçambique. Capture leads no Google Maps, enriqueça com WhatsApp e e-mail, analise com IA e organize o seu funil comercial.",
  city: "Maputo",
  country: "Moçambique",
  cities: ["Maputo", "Matola", "Beira", "Nampula", "Tete", "Quelimane"],
  address: "Maputo, Moçambique",
  email: "contacto@leadmap.co.mz",
  phoneDisplay: "+258 8X XXX XXXX",
  phoneWa: "", // Preencher só com dígitos (ex: 25884XXXXXXX)
  instagram: "",
  facebook: "",
  linkedin: "",
  domain: "https://www.leadmap.co.mz",
  gaId: "",
  currency: "MZN",
  currencySymbol: "MT",
} as const;

export const waHref = site.phoneWa
  ? `https://wa.me/${site.phoneWa}?text=${encodeURIComponent(
      "Olá LeadMap! Quero saber mais sobre prospecção B2B."
    )}`
  : "";
