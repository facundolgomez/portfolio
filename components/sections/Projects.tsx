import Reveal from "@/components/Reveal";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="proyectos" index="01" title="Proyectos">
      <ul className="border-t border-white/10">
        {projects.map((p, i) => (
          <li key={p.name} className="border-b border-white/10">
            <Reveal delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 py-8 sm:py-10 transition-colors duration-500 hover:bg-white/[0.02] focus-visible:bg-white/[0.02]"
              >
                <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-200 transition duration-500 group-hover:text-white group-hover:translate-x-2 group-focus-visible:text-white">
                  {p.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="row-span-3 self-start text-2xl sm:text-4xl text-zinc-500 transition duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:text-white"
                >
                  ↗
                </span>
                <p className="max-w-2xl leading-relaxed text-zinc-400 transition duration-500 group-hover:translate-x-2">
                  {p.description}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition duration-500 group-hover:translate-x-2">
                  <span className="sr-only">Tecnologías: </span>
                  {p.tech.join(" · ")}
                </p>
                <span className="sr-only">(abre en una pestaña nueva)</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
