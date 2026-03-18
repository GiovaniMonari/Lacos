import { Link } from "react-router-dom";

const ways = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Doações",
    color: "text-rose-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
    desc: "Contribuições financeiras ajudam a manter o projeto ativo e ampliar o alcance dos nossos serviços.",
    details: [
      "Qualquer valor faz diferença",
      "Doação única ou recorrente",
      "Doação de materiais e alimentos",
      "Nota de reconhecimento enviada por e-mail",
    ],
    action: "Quero Doar",
    actionHref: "/contato",
    actionStyle: "bg-rose-400 hover:bg-rose-500 text-white",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Parcerias",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    desc: "Empresas e organizações podem se tornar parceiras, contribuindo com recursos, espaços ou serviços.",
    details: [
      "Parceria institucional ou comercial",
      "Cessão de espaço físico",
      "Patrocínio de eventos e atividades",
      "Parceria para capacitação profissional",
    ],
    action: "Ser Parceiro",
    actionHref: "/contato",
    actionStyle: "bg-violet-500 hover:bg-violet-600 text-white",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
    title: "Divulgação",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    desc: "Compartilhar nosso trabalho nas redes sociais ajuda a alcançar mais pessoas que precisam de apoio.",
    details: [
      "Compartilhe nas redes sociais",
      "Fale com amigos e familiares",
      "Indique pessoas que precisam",
      "Ajude a divulgar eventos e atividades",
    ],
    action: "Nos Seguir",
    actionHref: "/contato",
    actionStyle: "bg-amber-500 hover:bg-amber-600 text-white",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Voluntariado",
    color: "text-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    desc: "Doe seu tempo e seus conhecimentos. Toda habilidade é bem-vinda — do ensino à tecnologia, da arte ao cuidado.",
    details: [
      "Aulas, oficinas e atividades",
      "Apoio administrativo e comunicação",
      "Saúde, psicologia e assistência social",
      "Eventos e ações comunitárias",
    ],
    action: "Ser Voluntário",
    actionHref: "/cadastro#voluntario",
    actionStyle: "bg-teal-500 hover:bg-teal-600 text-white",
  },
];

const impactData = [
  { value: "R$ 50", desc: "cobre os materiais de uma criança por um mês" },
  { value: "R$ 100", desc: "apoia uma família por duas semanas" },
  { value: "R$ 200", desc: "financia uma oficina cultural inteira" },
  { value: "R$ 500", desc: "mantém um programa por um mês completo" },
];

export default function ComoAjudar() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-50 via-white to-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Faça a diferença
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-5">
            Como <span className="text-rose-400">Ajudar</span>
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Existem muitas formas de apoiar o projeto. Cada contribuição — grande ou pequena — tem um impacto real na vida de alguém.
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((w) => (
              <div
                key={w.title}
                className={`rounded-2xl p-8 border ${w.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${w.bg} ${w.color} rounded-2xl flex items-center justify-center mb-5`}>
                  {w.icon}
                </div>
                <h3 className="text-stone-800 font-bold text-xl mb-3">{w.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{w.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {w.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-stone-600 text-sm">
                      <div className={`w-5 h-5 ${w.bg} ${w.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to={w.actionHref}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${w.actionStyle} shadow-sm hover:shadow-md hover:-translate-y-0.5`}
                >
                  {w.action}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-3">Impacto real</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-3">Sua doação em perspectiva</h2>
            <p className="text-stone-500 text-sm max-w-lg mx-auto">
              Veja o que cada contribuição pode fazer pela nossa comunidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((item) => (
              <div key={item.value} className="bg-white rounded-2xl p-6 text-center border border-stone-100 shadow-sm">
                <p className="text-3xl font-extrabold text-rose-400 mb-2">{item.value}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-rose-400 to-rose-500 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pronto para apoiar o projeto?
              </h2>
              <p className="text-rose-100 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                Entre em contato conosco e descubra a melhor forma de contribuir. Juntos, podemos fazer muito mais.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contato"
                  className="px-8 py-4 bg-white text-rose-500 rounded-xl font-bold text-sm hover:bg-rose-50 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Quero Apoiar o Projeto
                </Link>
                <Link
                  to="/cadastro#voluntario"
                  className="px-8 py-4 bg-rose-600 text-white rounded-xl font-bold text-sm hover:bg-rose-700 transition border border-rose-300 hover:-translate-y-0.5"
                >
                  Ser Voluntário
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
