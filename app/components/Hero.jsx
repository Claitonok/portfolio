"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden px-6">

      {/* Glow background */}
      <div className="absolute w-150 h-150 bg-cyan-500/10 rounded-full blur-3xl -top-40 -left-40"></div>
      <div className="absolute w-150 h-150 bg-blue-600/10 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Java Backend Specialist
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Scalable <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Backend Solutions
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl mb-8 text-lg leading-relaxed">
            Full Stack Developer specialized in Java & Spring Boot,
            building secure REST APIs, scalable architectures,
            and modern web applications with React & Next.js.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/projetos"
              className="px-8 py-3 bg-linear-to-r from-cyan-500
               to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30
                hover:scale-105 transition"
            >
              🚀 View Projects
            </a>

            <a
              href="/sobre"
              className="px-8 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition"
            >
              About Me
            </a>
             <a href="https://wa.me/+5513997290816" target="_blank" 
          className="px-3 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition"
          >
            Fale conosco no WhatsApp
        </a>

          </div>
        </motion.div>

        {/* Card Tech */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-96 h-96 rounded-3xl bg-linear-to-br
           from-cyan-500/10 to-blue-600/10 border border-cyan-500/20
            backdrop-blur-xl flex flex-col items-center 
            justify-center shadow-2xl shadow-cyan-500/10">

            <p className="text-7xl font-bold text-cyan-400">Java</p>
            <p className="text-slate-400 mt-4">
              Spring Boot • REST • Docker • MySQL
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}