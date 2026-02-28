"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 100 },
  { name: "Spring Boot", level: 100 },
  { name: "REST APIs", level: 100 },
  { name: "Docker", level: 100 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "MySQL", level: 100 },
  { name: "JWT / OAuth2", level: 100 },
];

export default function Sobre() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black via-slate-950 to-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-cyan-400
           via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h1>
          <p className="text-slate-400 mt-4">
            Full Stack Developer focused on Java & Scalable APIs
          </p>
        </motion.div>

        {/* Foto + Texto */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/20">
              <Image
                src="/minha-foto.png"
                alt="Claiton"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Full Stack Developer with strong focus on Java and Spring Boot,
              building secure REST APIs and scalable backend systems.
            </p>

            <p className="text-slate-400 leading-relaxed mb-4">
              Experienced in JWT authentication, OAuth2, Docker containerization,
              MySQL database design, and integration with external APIs such as
              payment gateways.
            </p>

            <p className="text-slate-400 leading-relaxed">
              On the frontend, I develop modern and responsive applications using
              React and Next.js, always applying clean code and best practices.
            </p>

            {/* Botão Download */}
            <a
              href="/Claiton_Curriculo_Profissional_2026.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}