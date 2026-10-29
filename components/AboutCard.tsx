import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCard() {
  return (
    <Link
      href="/about"
      className="card group hover:bg-[#0B684F] p-6"
    >
      <ArrowRight
        size={18}
        strokeWidth={1.8}
        aria-hidden="true"
        className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-500 transition duration-300 group-hover:text-white group-hover:translate-x-0.5"
      />
      <h2 className="text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-white font-semibold transition-colors duration-300">
        Sobre mí
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 mt-4 transition-colors duration-300">
        Información personal.
      </p>
    </Link>
  );
}
