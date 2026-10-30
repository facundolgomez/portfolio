import {
  Bricolage_Grotesque,
  Syne,
  Space_Grotesk,
  Unbounded,
} from "next/font/google";

// Tipografía del nombre: cambiar por "bricolage" | "syne" | "grotesk" | "unbounded"
const NAME_FONT: keyof typeof nameFonts = "bricolage";

const bricolage = Bricolage_Grotesque({ weight: "600", subsets: ["latin"] });
const syne = Syne({ weight: "600", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: "500", subsets: ["latin"] });
const unbounded = Unbounded({ weight: "500", subsets: ["latin"] });

const nameFonts = {
  bricolage: `${bricolage.className} tracking-tighter`,
  syne: `${syne.className} tracking-tight`,
  grotesk: `${spaceGrotesk.className} tracking-tighter`,
  unbounded: `${unbounded.className} tracking-tight`,
};

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Intro() {
  return (
    <header className="min-h-svh flex flex-col">
      <nav aria-label="Secciones" className="pt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="stagger flex-1 flex flex-col justify-center py-24">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          Hola, soy
        </p>
        <h1 className={`${nameFonts[NAME_FONT]} text-4xl md:text-6xl leading-[0.9] text-balance`}>
          Facundo Laureano Gómez
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-zinc-300">
          Software Developer — Profesor Universitario
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
          Programador de Rosario. Me interesan los algoritmos, las estructuras
          de datos y el desarrollo web, tanto front end como backend.
        </p>
      </div>
    </header>
  );
}
