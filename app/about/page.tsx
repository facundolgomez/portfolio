import Image from "next/image";
import BackLink from "@/components/BackLink";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:p-8">
      <div className="max-w-4xl mx-auto mb-8">
        <BackLink />
      </div>

      <div className="stagger max-w-4xl mx-auto">
        <section className="card hover:transform-none p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
          <Image
            src="/images/facuwolf.jpeg"
            alt="Facundo Gómez"
            width={200}
            height={280}
            priority
            className="shrink-0 self-center md:self-auto rounded-2xl object-cover object-[50%_30%] border border-(--card-border) shadow-lg shadow-black/10 w-[200px] h-[280px]"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl tracking-tight text-zinc-900 dark:text-white font-semibold">
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
          </div>
        </section>
      </div>
    </main>
  );
}
