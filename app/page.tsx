import { NavbarHome} from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarHome />
      <Hero />
    </main>
  );
}