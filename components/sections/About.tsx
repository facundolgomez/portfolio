import Image from "next/image";
import Reveal from "@/components/Reveal";
import Section from "./Section";

const facts = [
  { label: "Docencia", value: "Profesor de Programación y Bases de datos" },
  { label: "Inglés", value: "B1" },
];

export default function About() {
  return (
    <Section id="sobre-mi" index="03" title="Sobre mí">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:items-start">
        <Reveal className="shrink-0 self-center md:self-auto">
          <Image
            src="/images/facuwolf.jpeg"
            alt="Facundo Laureano Gómez"
            width={240}
            height={320}
            className="w-[200px] h-[270px] sm:w-[240px] sm:h-[320px] object-cover object-[50%_30%] grayscale transition duration-700 hover:grayscale-0"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xl sm:text-2xl leading-relaxed text-zinc-300 text-pretty">
            Programador de 26 años, de Rosario. Me atrae especialmente todo lo
            relacionado con algoritmos y estructuras de datos, además disfruto el
            desarrollo web front end y backend, y estoy siempre abierto a meterme
            en proyectos distintos que despierten mi interés. Fuera del código, el
            deporte ocupa un lugar importante en mi día a día, y también me gusta
            leer sobre distintos temas: programación, filosofía y divulgación
            científica, entre otros.
          </p>

          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {label}
                </dt>
                <dd className="mt-2 text-lg text-zinc-200">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
