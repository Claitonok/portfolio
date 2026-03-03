import {IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-slate-800">
    <nav className="flex justify-between items-center p-6 bg-slate-950 border-b border-slate-800">
      <h1 className="text-xl font-bold text-white">
        Claitonok<span className="text-cyan-400">.dev</span>
      </h1>

      <div className="space-x-6 text-white">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <a 
          href="https://github.com/Claitonok"
          target="_blank"
          className="hover:text-blue-400"
        >
          {/* IconBrandGithub */}
          <IconBrandGithubFilled size={20} className="inline-block mr-1" />
          GitHub
          {/* IconBrandGithubFilled */}
        </a>
      </div>
    </nav>
 </header>
  );
}

export function NavbarHome() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-slate-800">
    <nav className="flex justify-between items-center p-6 bg-slate-950 border-b border-slate-800">
      <h1 className="text-xl font-bold text-white">
        Claitonok<span className="text-cyan-400">.dev</span>
      </h1>

      <div className="space-x-6 text-white">
        <a 
          href="https://github.com/Claitonok"
          target="_blank"
          className="hover:text-blue-400"
        >
          {/* IconBrandGithub */}
          <IconBrandGithubFilled size={20} className="inline-block mr-1" />
          GitHub
          {/* IconBrandGithubFilled */}
        </a>
        <Link href="/sobre" className="hover:text-blue-400">
            Sobre
        </Link>
         <Link href="/contato" className="hover:text-blue-400">
            Contato
        </Link>
      </div>

      {/* Botão CTA */}
        <Link
          href="/projetos"
          className="hidden md:inline-block px-5 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-medium hover:scale-105 transition"
        >
          🚀 Ver Projetos
        </Link>

    </nav>
  </header>
  );
}