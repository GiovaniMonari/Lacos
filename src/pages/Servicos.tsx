import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Apoio Emocional",
    color: "text-rose-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
    tag: "bg-rose-100 text-rose-600",
    tagLabel: "Psicológico",
    desc: "Oferecemos escuta qualificada e acompanhamento emocional para pessoas que passam por momentos difíceis. Nosso espaço é seguro, confidencial e sem julgamentos.",
    items: [
      "Escuta ativa e acolhimento individual",
      "Grupos de apoio e rodas de conversa",
      "Encaminhamento para serviços especializados",
      "Acompanhamento em situações de crise",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Reforço Escolar",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tag: "bg-amber-100 text-amber-700",
    tagLabel: "Educação",
    desc: "Apoio pedagógico para crianças e jovens que precisam de suporte extra nos estudos. Nossas aulas são personalizadas e ministradas por voluntários qualificados.",
    items: [
      "Aulas de reforço em todas as matérias",
      "Apoio à leitura e escrita",
      "Orientação para o ENEM e vestibulares",
      "Atividades lúdicas e educativas",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M19 8v6" />
        <path d="M22 11h-6" />
      </svg>
    ),
    title: "Atividades Sociais",
    color: "text-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    tag: "bg-teal-100 text-teal-700",
    tagLabel: "Convivência",
    desc: "Promovemos atividades coletivas que fortalecem os vínculos comunitários e ajudam no desenvolvimento social e emocional de todos os participantes.",
    items: [
      "Oficinas de arte, música e cultura",
      "Eventos comunitários e celebrações",
      "Esportes e atividades físicas",
      "Grupos de convivência para idosos",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Apoio a Famílias",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    tag: "bg-violet-100 text-violet-700",
    tagLabel: "Família",
    desc: "Suporte integral para famílias em situação de vulnerabilidade. Trabalhamos com orientação, encaminhamentos e fortalecimento dos vínculos familiares.",
    items: [
      "Orientação sobre direitos e benefícios sociais",
      "Encaminhamento para serviços públicos",
      "Mediação de conflitos familiares",
      "Apoio em situações de violência doméstica",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M5 3 2 6" />
        <path d="M19 3l3 3" />
      </svg>
    ),
    title: "Inclusão PCD",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "bg-blue-100 text-blue-700",
    tagLabel: "Acessibilidade",
    desc: "Programa dedicado à inclusão plena de pessoas com deficiência, garantindo acesso igualitário a todos os nossos serviços e promovendo autonomia e participação.",
    items: [
      "Atendimento adaptado às necessidades individuais",
      "Apoio na inserção no mercado de trabalho",
      "Atividades inclusivas e acessíveis",
      "Suporte a cuidadores e familiares de PCD",
    ],
  },
];

export default function Servicos() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-50 via-white to-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            O que oferecemos
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-5">
            Nossos <span className="text-rose-400">Serviços</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuidamos das pessoas em todas as dimensões que importam. Conheça cada área de atuação da Casa Laços Humanos.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl p-7 border ${s.border} bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-14 h-14 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.tag}`}>
                    {s.tagLabel}
                  </span>
                </div>
                <h3 className="text-stone-800 font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-stone-600 text-sm">
                      <div className={`w-4 h-4 ${s.bg} ${s.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-rose-400 rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Precisa de algum desses serviços?
            </h2>
            <p className="text-rose-100 text-base max-w-lg mx-auto mb-8">
              Faça seu cadastro e nossa equipe entrará em contato para entender como podemos ajudar você.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/cadastro"
                className="px-8 py-3.5 bg-white text-rose-500 rounded-xl font-bold text-sm hover:bg-rose-50 transition shadow-md"
              >
                Fazer Cadastro
              </Link>
              <Link
                to="/contato"
                className="px-8 py-3.5 bg-rose-500 text-white rounded-xl font-bold text-sm border border-rose-300 hover:bg-rose-600 transition"
              >
                Falar Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
