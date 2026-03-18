import { Link } from "react-router-dom";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Empatia",
    text: "Colocamos o ser humano no centro de tudo que fazemos.",
    color: "text-rose-400",
    bg: "bg-rose-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Compromisso",
    text: "Estamos presentes em todos os momentos da jornada de cada pessoa.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Comunidade",
    text: "Acreditamos no poder coletivo para transformar realidades.",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Dignidade",
    text: "Toda pessoa merece ser tratada com respeito e cuidado, sem julgamentos.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

const who = [
  { label: "Crianças e jovens em vulnerabilidade social" },
  { label: "Pessoas com deficiência (PCD)" },
  { label: "Famílias em situação de risco" },
  { label: "Adultos em sofrimento emocional" },
  { label: "Idosos em situação de abandono" },
  { label: "Qualquer pessoa que precise de apoio" },
];

export default function Sobre() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-50 via-white to-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              Nossa história
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-5 leading-tight">
              Quem somos e<br />
              <span className="text-rose-400">por que existimos</span>
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed">
              A Casa Laços Humanos nasceu do desejo de criar um espaço genuíno de acolhimento — onde ninguém precisa estar sozinho.
            </p>
          </div>
        </div>
      </section>

      {/* O projeto */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-3">O projeto</p>
              <h2 className="text-3xl font-bold text-stone-800 mb-5">
                Um espaço feito de cuidado e humanidade
              </h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed">
                <p>
                  A <strong className="text-stone-700">Casa Laços Humanos</strong> é um projeto social criado para oferecer apoio integral a pessoas e famílias que enfrentam situações de vulnerabilidade. Acreditamos que o ser humano precisa de mais do que recursos materiais — ele precisa de escuta, pertencimento e afeto.
                </p>
                <p>
                  Nosso trabalho é feito com e para a comunidade. Somos voluntários, profissionais e parceiros unidos pelo mesmo propósito: <strong className="text-stone-700">construir uma rede de apoio real e acessível</strong>.
                </p>
                <p>
                  Atuamos nas áreas de apoio emocional, reforço escolar, inclusão social, suporte a famílias e inclusão de pessoas com deficiência, sempre com respeito à dignidade e à história de cada pessoa.
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                <span className="text-rose-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                Nossa Missão
              </h3>
              <p className="text-stone-600 text-base leading-relaxed mb-6 italic border-l-4 border-rose-300 pl-4">
                "Oferecer apoio humano, social e educacional a pessoas e famílias em situação de vulnerabilidade, promovendo inclusão, dignidade e transformação por meio da comunidade."
              </p>
              <h3 className="text-xl font-bold text-stone-800 mb-4 mt-6">Nossa Visão</h3>
              <p className="text-stone-600 text-base leading-relaxed">
                Ser uma referência em acolhimento comunitário, onde toda pessoa encontre apoio, pertencimento e esperança para reconstruir sua trajetória de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que criamos */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-3">A origem</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Por que criamos esse projeto?</h2>
            <p className="text-stone-500 text-base leading-relaxed">
              Vimos de perto a dor silenciosa de quem não tem para onde ir, de quem precisa de ajuda mas não sabe onde encontrar. Percebemos que existia uma lacuna enorme no suporte às famílias da nossa comunidade — e decidimos agir.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-stone-100 max-w-3xl mx-auto">
            <div className="space-y-5 text-stone-600 text-base leading-relaxed">
              <p>
                Muitas pessoas vivem em silêncio, carregando sozinhas o peso de situações difíceis: problemas emocionais, dificuldades financeiras, falta de acesso à educação, isolamento social. Não por falta de coragem, mas por falta de espaço e apoio.
              </p>
              <p>
                A Casa Laços Humanos surgiu para <strong className="text-stone-700">quebrar esse isolamento</strong>. Para dizer: <em className="text-rose-400">"Você não está sozinho. Há pessoas que se importam com você."</em>
              </p>
              <p>
                Começamos pequenos, mas com um sonho grande: construir uma comunidade onde o cuidado com o outro seja natural, onde vínculos reais sejam formados e onde cada pessoa se sinta digna e acolhida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-3">O que nos guia</p>
            <h2 className="text-3xl font-bold text-stone-800">Nossos valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${v.bg} ${v.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {v.icon}
                </div>
                <h3 className="text-stone-800 font-bold text-base mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem atendemos */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-rose-400 font-semibold text-sm uppercase tracking-widest mb-3">Nosso público</p>
              <h2 className="text-3xl font-bold text-stone-800 mb-5">Quem atendemos?</h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                Nosso projeto é aberto e inclusivo. Atendemos todas as pessoas que precisam de apoio, sem distinção. Se você ou alguém que você conhece está passando por um momento difícil, estamos aqui.
              </p>
              <ul className="space-y-3">
                {who.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-stone-600 text-sm">
                    <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="text-stone-800 font-bold text-lg mb-2">Quer fazer parte?</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  Seja como beneficiário, voluntário ou parceiro. Toda forma de participação é bem-vinda e importante.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/cadastro"
                    className="block w-full py-3 bg-rose-400 text-white rounded-xl font-semibold text-sm text-center hover:bg-rose-500 transition"
                  >
                    Quero me cadastrar
                  </Link>
                  <Link
                    to="/contato"
                    className="block w-full py-3 bg-stone-100 text-stone-700 rounded-xl font-semibold text-sm text-center hover:bg-stone-200 transition"
                  >
                    Entrar em contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
