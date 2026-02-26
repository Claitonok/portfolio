import Navbar, { NavbarHome } from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      <NavbarHome />
      <Hero />
    </main>
  );
}