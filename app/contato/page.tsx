import { IconBrandWhatsapp } from "@tabler/icons-react";
import Navbar from "../components/Navbar";

export default function Contato() {
  return (
    <main className="bg-slate-950 text-white min-h-screen pt-16">
      <Navbar />
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r
             from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contato
            </h1>
            <p className="text-slate-400 mt-4 text-lg">
                Estou aberto a novas oportunidades e conexões.
                    Sinta-se à vontade para entrar em contato comigo por email ou através das minhas redes sociais.
            </p>
            <div className="mt-10">
                <p className="text-lg">
                    <strong>Email:</strong> <a href="mailto:claiton_santos1@hotmail.com" 
                    className="text-cyan-400 hover:underline">
                        claiton_santos1@hotmail.com
                    </a>
                </p>
                  <p className="text-lg">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/+5513997290816" target="_blank"
                    className="text-cyan-400 hover:underline">
                        (13) 99729-0816 <IconBrandWhatsapp className="inline-block ml-2" />
                    </a>
                </p>
            </div>
        </section>
    </main>
  );
}