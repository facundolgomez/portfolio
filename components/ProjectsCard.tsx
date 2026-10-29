import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsCard() {
  return (
    <Link
      href="/projects"
      className="card group col-span-2 p-6 hover:bg-[#8A2424]"
    >
      <ArrowRight
        size={18}
        strokeWidth={1.8}
        aria-hidden="true"
        className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-500 transition duration-300 group-hover:text-white group-hover:translate-x-0.5"
      />
      <h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white group-hover:text-white font-semibold transition-colors duration-300">
        Proyectos
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 mt-4 transition-colors duration-300">
        Aplicaciones desarrolladas.
      </p>
    </Link>
  );
}
