import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-slate-950 border-b border-slate-800">
      <h1 className="text-xl font-bold text-blue-500">
        Claiton.dev
      </h1>

      <div className="space-x-6 text-slate-300">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <a 
          href="https://github.com/Claitonok"
          target="_blank"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export function NavbarHome() {
  return (
    <nav className="flex justify-between items-center p-6 bg-slate-950 border-b border-slate-800">
      <h1 className="text-xl font-bold text-blue-500">
        Claiton.dev
      </h1>

      <div className="space-x-6 text-slate-300">
        <Link href="/projetos" className="hover:text-blue-400">Projetos</Link>
        <a 
          href="https://github.com/Claitonok"
          target="_blank"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}