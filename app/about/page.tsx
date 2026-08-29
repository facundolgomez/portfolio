import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Volver
        </Link>
      </div>

      <section className="max-w-2xl mx-auto">
        <Image
          src="/images/facuwolf.jpeg"
          alt="Facundo Gómez"
          width={200}
          height={250}
          className="rounded-2xl object-cover object-[50%_30%] border-2 border-zinc-300 dark:border-zinc-700 w-[200px] h-[280px]"
        />
        <h1 className="text-3xl text-zinc-900 dark:text-white font-semibold">
          Sobre mí
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
          Programador de 26 años, de Rosario. Me atrae especialmente todo lo
          relacionado con algoritmos y estructuras de datos, además disfruto el
          desarrollo web front end y backend, y estoy siempre abierto a meterme
          en proyectos distintos que despierten mi interés. Fuera del código, el
          deporte ocupa un lugar importante en mi día a día, y también me gusta
          leer sobre distintos temas: programación, filosofía y divulgación
          científica, entre otros.
        </p>
      </section>
    </main>
  );
}
