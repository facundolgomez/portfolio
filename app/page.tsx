import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
      <Intro />
      <main>
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Facundo Laureano Gómez
      </footer>
    </div>
  );
}
