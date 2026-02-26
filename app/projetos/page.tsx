import Navbar from "../components/Navbar";
import Link from "next/link";

const projects = [
  {
    title: "Sistema de Hospedagem",
    description:
      "Aplicação Java Dynamic Web Project com API Spring Boot integrada ao Mercado Pago (PIX e cartão), banco MySQL e deploy com Docker.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker", "Mercado Pago"],
    github: "https://github.com/Claitonok/Projeto-locacao-casa",
  },
  {
    title: "API de Pagamentos",
    description:
      "API desenvolvida com Spring Boot para integração de pagamentos via PIX e cartão utilizando Mercado Pago.",
    tech: ["Spring Boot", "REST API", "Docker","Mercado Pago","PostgreSQL", "swagger"],
    github: "https://github.com/Claitonok/pg_api",
  },
    {
    title: "Portfólio Pessoal",
    description:
      "Portfólio pessoal desenvolvido com Next.js, React e Tailwind CSS, apresentando projetos e habilidades de desenvolvimento web.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Claitonok/Portifolio",
    },
    {
    title: "Calculadora-IMC.---v2.3",
    description:
      "Aplicação web para cálculo de IMC (Índice de Massa Corporal) com interface responsiva.",
    tech: ["HTML", "CSS", "JavaScript","Docker"],
    github: "https://github.com/Claitonok/Calculadora-IMC.---v2.3",
    },
    {
    title: "Api-login-page",
    description:
      "API de login desenvolvida com Spring Boot e segurança via Auth0.",
     tech: ["Spring Boot", "REST API", "Docker","Auth0","PostgreSQL", "swagger"],
    github: "https://github.com/Claitonok/login",
    },
    {
    title: "Airbnb Clone",
    description:
      "Aplicação de hospedagem estilo Airbnb, com backend em Node.js e frontend em React, utilizando Express para a API e MongoDB para o banco de dados.",
    tech: ["React", "Node.js", "Express", "API de dados"],
    github: "https://github.com/Claitonok/airbnd",
    }
];

export default function Projetos() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl mb-16 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projetos em Destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-lg border border-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.github}
                target="_blank"
                className="inline-block text-sm font-medium text-blue-400 group-hover:text-cyan-400 transition"
              >
                Ver no GitHub →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}