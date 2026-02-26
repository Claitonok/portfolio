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
        Desenvolvedor focado em aplicações Java com Spring Boot,
        integração de APIs REST e deploy com Docker.
      </p>
        <p className="text-slate-400 mb-6 mt-0">Experiência prática com sistemas de hospedagem
        e integração de pagamentos.</p>

      <div className="flex gap-4">
        <a
          href="/projetos"
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition"
        >
          Ver Projetos
        </a>

        <a
          href="https://github.com/Claitonok"
          target="_blank"
          className="border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          GitHub
        </a>
      </div>

      <div className="flex gap-4 py-6">
         <a href="https://wa.me/+5513997290816" target="_blank" 
          className="border border-blue-600 px-10 py-4 rounded-xl hover:bg-blue-600 transition"
          >
            Fale conosco no WhatsApp
        </a>
      </div>

    </section>
  );
}