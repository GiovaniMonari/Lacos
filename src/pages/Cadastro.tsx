import { useState, useEffect, FormEvent } from "react";
import { useLocation } from "react-router-dom";

type FormStatus = "idle" | "success" | "error";

function HelpForm() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    endereco: "",
    situacao: "",
    tipoAjuda: "",
    observacoes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStatus("success");
    setFormData({ nome: "", idade: "", telefone: "", endereco: "", situacao: "", tipoAjuda: "", observacoes: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-7 sm:p-9">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-stone-800">Preciso de Ajuda</h2>
          <p className="text-stone-400 text-xs mt-0.5">Preencha o formulário abaixo — nossa equipe entrará em contato</p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <p className="text-teal-700 font-semibold text-sm">Cadastro enviado com sucesso!</p>
            <p className="text-teal-600 text-xs mt-0.5">Entraremos em contato em breve. Você não está sozinho(a).</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Nome Completo *</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Idade *</label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              placeholder="Sua idade"
              min="1"
              max="120"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Telefone / WhatsApp *</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            placeholder="(00) 00000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Endereço *</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
            placeholder="Rua, número, bairro, cidade"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Situação atual *</label>
          <select
            name="situacao"
            value={formData.situacao}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition bg-white"
          >
            <option value="">Selecione sua situação</option>
            <option value="emocional">Sofrimento emocional / psicológico</option>
            <option value="financeira">Dificuldade financeira</option>
            <option value="educacional">Dificuldade educacional</option>
            <option value="familiar">Conflito ou problema familiar</option>
            <option value="pcd">Pessoa com deficiência (PCD)</option>
            <option value="violencia">Situação de violência</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Tipo de ajuda que precisa *</label>
          <select
            name="tipoAjuda"
            value={formData.tipoAjuda}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition bg-white"
          >
            <option value="">Selecione o tipo de ajuda</option>
            <option value="apoio-emocional">Apoio emocional / escuta</option>
            <option value="reforco">Reforço escolar</option>
            <option value="atividades">Participar de atividades sociais</option>
            <option value="familia">Apoio familiar</option>
            <option value="inclusao">Inclusão PCD</option>
            <option value="orientacao">Orientação sobre direitos e benefícios</option>
            <option value="multiplos">Vários tipos de ajuda</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Observações (opcional)</label>
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            rows={4}
            placeholder="Conte um pouco mais sobre sua situação. Tudo o que compartilhar será tratado com sigilo e respeito."
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition resize-none"
          />
        </div>

        <p className="text-xs text-stone-400">
          * Campos obrigatórios. Todas as informações são tratadas com total confidencialidade.
        </p>

        <button
          type="submit"
          className="w-full py-3.5 bg-rose-400 text-white rounded-xl font-bold text-sm hover:bg-rose-500 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          Enviar Cadastro
        </button>
      </form>
    </div>
  );
}

function VolunteerForm() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    contato: "",
    area: "",
    disponibilidade: "",
    experiencia: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setFormData({ nome: "", idade: "", contato: "", area: "", disponibilidade: "", experiencia: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <div id="voluntario" className="bg-white rounded-2xl shadow-sm border border-stone-100 p-7 sm:p-9">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-stone-800">Quero Ser Voluntário</h2>
          <p className="text-stone-400 text-xs mt-0.5">Sua ajuda pode transformar muitas vidas</p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <p className="text-teal-700 font-semibold text-sm">Inscrição recebida com sucesso!</p>
            <p className="text-teal-600 text-xs mt-0.5">Obrigado(a) por querer fazer a diferença! Entraremos em contato.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Nome Completo *</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Idade *</label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              placeholder="Sua idade"
              min="16"
              max="99"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Contato (WhatsApp ou e-mail) *</label>
          <input
            type="text"
            name="contato"
            value={formData.contato}
            onChange={handleChange}
            required
            placeholder="(00) 00000-0000 ou email@exemplo.com"
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Área de interesse *</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition bg-white"
          >
            <option value="">Selecione uma área</option>
            <option value="educacao">Educação e reforço escolar</option>
            <option value="psicologia">Psicologia e saúde mental</option>
            <option value="social">Trabalho social e assistência</option>
            <option value="saude">Saúde e bem-estar</option>
            <option value="artes">Artes, música e cultura</option>
            <option value="esportes">Esportes e atividades físicas</option>
            <option value="juridico">Orientação jurídica</option>
            <option value="ti">Tecnologia e comunicação</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Disponibilidade *</label>
          <select
            name="disponibilidade"
            value={formData.disponibilidade}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition bg-white"
          >
            <option value="">Selecione sua disponibilidade</option>
            <option value="manha">Manhã (seg–sex)</option>
            <option value="tarde">Tarde (seg–sex)</option>
            <option value="noite">Noite (seg–sex)</option>
            <option value="fim-de-semana">Fim de semana</option>
            <option value="flexivel">Horário flexível</option>
            <option value="remoto">Apenas remoto / online</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5">Experiência anterior (opcional)</label>
          <textarea
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            rows={4}
            placeholder="Conte um pouco sobre sua experiência, formação ou habilidades que pode oferecer ao projeto."
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-sm placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition resize-none"
          />
        </div>

        <p className="text-xs text-stone-400">
          * Campos obrigatórios. Você receberá um retorno assim que nossa equipe analisar sua inscrição.
        </p>

        <button
          type="submit"
          className="w-full py-3.5 bg-teal-500 text-white rounded-xl font-bold text-sm hover:bg-teal-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          Quero Ser Voluntário
        </button>
      </form>
    </div>
  );
}

export default function Cadastro() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"ajuda" | "voluntario">("ajuda");

  useEffect(() => {
    if (location.hash === "#voluntario") {
      setActiveTab("voluntario");
      setTimeout(() => {
        const el = document.getElementById("voluntario");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <main className="pt-16 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-50 via-white to-rose-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Faça parte
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            Cadastro
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Seja para pedir ajuda ou oferecer apoio — todos são bem-vindos. Preencha o formulário e logo entraremos em contato.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex bg-white rounded-2xl border border-stone-200 p-1.5 mb-8 shadow-sm">
            <button
              onClick={() => setActiveTab("ajuda")}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "ajuda"
                  ? "bg-rose-400 text-white shadow-sm"
                  : "text-stone-500 hover:text-rose-400"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Preciso de Ajuda
            </button>
            <button
              onClick={() => setActiveTab("voluntario")}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "voluntario"
                  ? "bg-teal-500 text-white shadow-sm"
                  : "text-stone-500 hover:text-teal-500"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Quero Voluntariar
            </button>
          </div>

          {/* Forms */}
          {activeTab === "ajuda" ? <HelpForm /> : <VolunteerForm />}

          {/* Bottom note */}
          <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <p className="text-amber-800 font-semibold text-sm">Precisa falar urgente?</p>
              <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                Se você estiver em situação de risco, entre em contato diretamente pelo nosso WhatsApp:
                {" "}<a href="https://wa.me/5511999999999" className="underline font-semibold">(11) 99999-9999</a>{" "}
                — estamos disponíveis para te ouvir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
