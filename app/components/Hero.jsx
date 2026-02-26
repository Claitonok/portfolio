export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
        Claiton Dos Santos Silva
      </h1>

      <h2 className="text-2xl text-blue-400 mb-6">
        Desenvolvedor Back-End Java | Spring Boot | Docker
      </h2>

      <p className="max-w-2xl text-slate-400 mb-8">
         Experiência prática com Spring Boot, integração de pagamentos,
          arquitetura REST, MySQL e containerização com Docker.
           Foco em aplicações escaláveis e código limpo.
      </p>
        <p className="text-slate-400 mb-6 mt-0">Experiência prática com sistemas e integração.</p>

      <div className="flex gap-4">
        <a
          href="/projetos"
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 
          transition shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          Ver Projetos
        </a>

        <a
          href="https://github.com/Claitonok"
          target="_blank"
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500
           transition shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          GitHub
        </a>
      </div>

      <div className="flex gap-4 py-6">
         <a href="https://wa.me/+5513997290816" target="_blank" 
          className="bg-blue-600 px-10 py-3 rounded-xl hover:bg-blue-500
           transition shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Fale conosco no WhatsApp
        </a>
      </div>

    </section>
  );
}