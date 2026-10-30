import Reveal from "@/components/Reveal";
import Section from "./Section";
import { projects, type Project } from "@/lib/data";

const rowClass =
  "group grid gap-x-6 gap-y-3 py-8 sm:py-10 transition-colors duration-500 hover:bg-white/[0.02]";

const newTab = <span className="sr-only">(abre en una pestaña nueva)</span>;

function ProjectInfo({ name, description, tech }: Project) {
  return (
    <>
      <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-200 transition duration-500 group-hover:text-white group-hover:translate-x-2 group-focus-visible:text-white">
        {name}
      </h3>
      <p className="max-w-2xl leading-relaxed text-zinc-400 transition duration-500 group-hover:translate-x-2">
        {description}
      </p>
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition duration-500 group-hover:translate-x-2">
        <span className="sr-only">Tecnologías: </span>
        {tech.join(" · ")}
      </p>
    </>
  );
}

// Toda la fila es un único link
function LinkRow(p: Project) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${rowClass} grid-cols-[1fr_auto] focus-visible:bg-white/[0.02]`}
    >
      <ProjectInfo {...p} />
      <span
        aria-hidden="true"
        className="col-start-2 row-start-1 row-span-3 self-start text-2xl sm:text-4xl text-zinc-500 transition duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:text-white"
      >
        ↗
      </span>
      {newTab}
    </a>
  );
}

function DemoRepoRow(p: Project & { repo: string }) {
  const links = [
    { label: "Demo", href: p.url },
    { label: "Código", href: p.repo },
  ];

  return (
    <div className={`${rowClass} grid-cols-1 sm:grid-cols-[1fr_auto]`}>
      <ProjectInfo {...p} />

      <ul className="flex items-baseline gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-zinc-500 sm:col-start-2 sm:row-start-1 sm:row-span-3 sm:self-start sm:pt-4">
        {links.map(({ label, href }, i) => (
          <li key={label} className="flex items-baseline gap-3">
            {i > 0 && <span aria-hidden="true">·</span>}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-baseline gap-1 transition-colors duration-300 hover:text-white"
            >
              {label}
              <span className="sr-only"> de {p.name}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              >
                ↗
              </span>
              {newTab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="proyectos" index="01" title="Proyectos">
      <ul className="border-t border-white/10">
        {projects.map((p, i) => (
          <li key={p.name} className="border-b border-white/10">
            <Reveal delay={i * 80}>
              {p.repo ? (
                <DemoRepoRow {...p} repo={p.repo} />
              ) : (
                <LinkRow {...p} />
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
