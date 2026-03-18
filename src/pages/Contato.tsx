import { useState, FormEvent } from "react";

const contacts = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
    title: "WhatsApp",
    value: "(11) 99999-9999",
    sub: "Atendimento rápido e humanizado",
    href: "https://wa.me/5511999999999",
    color: "text-teal-500",
    bg: "bg-teal-50",
    hoverBg: "hover:bg-teal-500",
    btnLabel: "Chamar no WhatsApp",
    btnStyle: "bg-teal-500 hover:bg-teal-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "E-mail",
    value: "contato@casalacoshumanos.org",
    sub: "Respondemos em até 24 horas",
    href: "mailto:contato@casalacoshumanos.org",
    color: "text-rose-400",
    bg: "bg-rose-50",
    btnLabel: "Enviar E-mail",
    btnStyle: "bg-rose-400 hover:bg-rose-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    title: "Instagram",
    value: "@casalacoshumanos",
    sub: "Conteúdo, novidades e inspiração",
    href: "https://instagram.com/casalacoshumanos",
    color: "text-violet-500",
    bg: "bg-violet-50",
    btnLabel: "Ver no Instagram",
    btnStyle: "bg-violet-500 hover:bg-violet-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Localização",
    value: "Rua das Flores, 123 — Centro",
    sub: "São Paulo, SP — CEP 01310-000",
    href: "https://maps.google.com",
    color: "text-amber-500",
    bg: "bg-amber-50",
    btnLabel: "Ver no Mapa",
    btnStyle: "bg-amber-500 hover:bg-amber-600",
  },
];

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-50 via-white to-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Fale conosco
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            Entre em <span className="text-rose-400">Contato</span>
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Estamos aqui para ouvir você. Entre em contato pelo canal de sua preferência ou envie uma mensagem diretamente.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((c) => (
              <div
                key={c.title}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${c.bg} ${c.color} rounded-2xl flex items-center justify-center mb-4`}>
                  {c.icon}
                </div>
                <h3 className="text-stone-800 font-bold text-base mb-1">{c.title}</h3>
                <p className="text-stone-700 text-sm font-medium mb-1">{c.value}</p>
                <p className="text-stone-400 text-xs mb-5">{c.sub}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-xl text-white text-xs font-semibold text-center transition-all ${c.btnStyle} shadow-sm hover:shadow-md`}
                >
                  {c.btnLabel}
                </a>
              </div>
            ))}
          </div>

          {/* Contact form + map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2">Envie uma mensagem</h2>
              <p className="text-stone-500 text-sm mb-7">
                Preencha o formulário e responderemos em breve.
              </p>

              {sent && (
                <div className="mb-6 bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-700 font-semibold text-sm">Mensagem enviada!</p>
                    <p className="text-teal-600 text-xs">Obrigado pelo contato. Retornaremos em breve.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Assunto *</label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition bg-white"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="ajuda">Preciso de ajuda</option>
                    <option value="voluntario">Quero ser voluntário</option>
                    <option value="parceria">Proposta de parceria</option>
                    <option value="doacao">Quero fazer doação</option>
                    <option value="imprensa">Imprensa / mídia</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-rose-400 text-white rounded-xl font-bold text-sm hover:bg-rose-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Location info */}
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2">Nossa localização</h2>
              <p className="text-stone-500 text-sm mb-7">
                Visite-nos presencialmente. Estamos de portas abertas para você.
              </p>

              {/* Map placeholder */}
              <div className="bg-stone-100 rounded-2xl overflow-hidden h-64 mb-6 flex items-center justify-center border border-stone-200 relative">
                <div className="text-center">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-stone-600 font-semibold text-sm">Rua das Flores, 123</p>
                  <p className="text-stone-400 text-xs mt-1">Centro, São Paulo — SP</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-rose-400 font-semibold hover:text-rose-500 transition"
                  >
                    Abrir no Google Maps
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
                <h3 className="text-stone-800 font-bold text-base mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Horário de atendimento
                </h3>
                <div className="space-y-2">
                  {[
                    { days: "Segunda a Sexta", time: "08h às 18h" },
                    { days: "Sábado", time: "08h às 13h" },
                    { days: "Domingo", time: "Fechado" },
                  ].map((h) => (
                    <div key={h.days} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                      <span className="text-stone-600 text-sm">{h.days}</span>
                      <span className={`text-sm font-semibold ${h.time === "Fechado" ? "text-stone-400" : "text-rose-400"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-400 flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Para atendimentos urgentes, entre em contato via WhatsApp a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="bg-stone-50 py-12 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-stone-500 text-sm mb-5 font-medium">Siga-nos nas redes sociais</p>
          <div className="flex justify-center gap-4">
            {[
              {
                label: "WhatsApp",
                href: "https://wa.me/5511999999999",
                color: "bg-teal-500 hover:bg-teal-600",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "https://instagram.com/casalacoshumanos",
                color: "bg-violet-500 hover:bg-violet-600",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: "E-mail",
                href: "mailto:contato@casalacoshumanos.org",
                color: "bg-rose-400 hover:bg-rose-500",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm hover:shadow-md`}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
