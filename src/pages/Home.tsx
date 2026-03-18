import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Pessoas atendidas" },
  { value: "80+", label: "Voluntários ativos" },
  { value: "12", label: "Parcerias firmadas" },
  { value: "5", label: "Anos de atuação" },
];

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Apoio Emocional",
    text: "Escuta qualificada e suporte psicológico para quem mais precisa.",
    color: "text-rose-400",
    bg: "bg-rose-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Reforço Escolar",
    text: "Apoio educacional para crianças e jovens em situação de vulnerabilidade.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Inclusão Social",
    text: "Atividades e programas que promovem a convivência e o pertencimento.",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-stone-50 min-h-screen flex items-center">
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose-100 rounded-full opacity-40 translate-x-1/2 -translate-y-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 -translate-x-1/2 translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse" />
              Projeto Social em Ação
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-800 leading-tight mb-6">
              Casa{" "}
              <span className="text-rose-400">Laços</span>
              <br />
              Humanos
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-4 max-w-xl">
              Promovendo <strong className="text-stone-700">inclusão e apoio social</strong> para todos.
              Um espaço de acolhimento, cuidado e transformação.
            </p>
            <p className="text-base text-stone-500 mb-10 max-w-lg">
              Acreditamos que cada pessoa merece uma rede de apoio. Venha fazer parte da nossa comunidade.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/cadastro"
                className="px-6 py-3.5 bg-rose-400 text-white rounded-xl font-semibold text-sm hover:bg-rose-500 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Quero Ajuda
              </Link>
              <Link
                to="/cadastro#voluntario"
                className="px-6 py-3.5 bg-white text-stone-700 rounded-xl font-semibold text-sm border border-stone-200 hover:border-rose-300 hover:text-rose-500 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Quero Ser Voluntário
              </Link>
              <Link
                to="/sobre"
                className="px-6 py-3.5 bg-stone-100 text-stone-600 rounded-xl font-semibold text-sm hover:bg-stone-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                Conheça o Projeto
              </Link>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-72 border border-stone-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-stone-400 font-medium">Nossa missão</p>
                <p className="text-sm font-bold text-stone-700">Apoio integral</p>
              </div>
            </div>
            {[
              { label: "Apoio emocional", pct: 90 },
              { label: "Educação", pct: 75 },
              { label: "Inclusão PCD", pct: 65 },
            ].map((item) => (
              <div key={item.label} className="mb-3 last:mb-0">
                <div className="flex justify-between text-xs text-stone-500 mb-1">
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-300 rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-xs text-stone-400 mt-4 text-center">Áreas de atuação ativa</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-rose-400 mb-1">{s.value}</p>
                <p className="text-sm text-stone-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-2">O que fazemos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
              Cuidado em todas as dimensões
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-base">
              Oferecemos suporte completo às pessoas e famílias que mais precisam de atenção e carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-200">
                <div className={`w-12 h-12 ${h.bg} ${h.color} rounded-xl flex items-center justify-center mb-4`}>
                  {h.icon}
                </div>
                <h3 className="text-stone-800 font-bold text-base mb-2">{h.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-rose-400 font-semibold text-sm hover:text-rose-500 transition-colors"
            >
              Ver todos os serviços
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-400 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Faça parte dessa história
          </h2>
          <p className="text-rose-100 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Seja como beneficiário, voluntário ou parceiro — cada pessoa que se une a nós transforma uma vida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/cadastro"
              className="px-8 py-3.5 bg-white text-rose-500 rounded-xl font-bold text-sm hover:bg-rose-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Quero Ajuda
            </Link>
            <Link
              to="/cadastro#voluntario"
              className="px-8 py-3.5 bg-rose-500 text-white rounded-xl font-bold text-sm border border-rose-300 hover:bg-rose-600 transition-all hover:-translate-y-0.5"
            >
              Ser Voluntário
            </Link>
            <Link
              to="/como-ajudar"
              className="px-8 py-3.5 bg-transparent text-white rounded-xl font-bold text-sm border border-white/50 hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Apoiar o Projeto
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-2">Histórias reais</p>
            <h2 className="text-3xl font-bold text-stone-800">Vidas que foram tocadas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ana Luíza",
                role: "Beneficiária",
                text: "Encontrei na Casa Laços Humanos o acolhimento que eu tanto precisava. Hoje me sinto parte de uma família.",
                initial: "A",
              },
              {
                name: "Carlos Eduardo",
                role: "Voluntário",
                text: "Dar aulas de reforço aqui mudou minha perspectiva de vida. Ver o progresso das crianças me enche de esperança.",
                initial: "C",
              },
              {
                name: "Marina Silva",
                role: "Parceira",
                text: "Nossa empresa apoia o projeto há dois anos. É uma troca genuína — contribuímos e crescemos juntos como comunidade.",
                initial: "M",
              },
            ].map((t) => (
              <div key={t.name} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-200 flex items-center justify-center text-rose-600 font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-stone-800 font-semibold text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
