import Navbar from "../components/Navbar";

export default function Projetos() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              Sistema de Hospedagem
            </h3>

            <p className="text-slate-300 mb-4">
              Aplicação Java Dynamic Web Project com API Spring Boot
              integrada ao Mercado Pago (PIX e cartão),
              banco MySQL e deploy com Docker.
            </p>

            <a
              href="https://github.com/Claitonok/Projeto-locacao-casa"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        </div>

        {/* Aqui temos projetos sendo listados */}
         <div className="grid md:grid-cols-2 gap-8 mt-5">
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-3">
              Sistema de Hospedagem
            </h3>

            <p className="text-slate-300 mb-4">
              Aplicação Java Dynamic Web Project com API Spring Boot
              integrada ao Mercado Pago (PIX e cartão),
              banco MySQL e deploy com Docker.
            </p>

            <a
              href="https://github.com/Claitonok/Projeto-locacao-casa"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        </div>
        {/* Aqui temos projetos sendo listados */}


      </section>
    </main>
  );
}