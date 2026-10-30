import Reveal from "@/components/Reveal";
import Section from "./Section";
import { contact } from "@/lib/data";

const links = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
];

const linkClass =
  "group inline-flex items-baseline gap-2 transition-colors duration-300 hover:text-white";

const arrowClass =
  "text-zinc-500 transition duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function Contact() {
  return (
    <Section id="contacto" index="04" title="Contacto">
      <Reveal>
        <p className="text-xl text-zinc-400">¿Charlamos? Escribime a</p>
        <a
          href={contact.emailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} mt-4 text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-100 break-all sm:break-normal`}
        >
          {contact.email}
          <span aria-hidden="true" className={arrowClass}>↗</span>
          <span className="sr-only">(abre en una pestaña nueva)</span>
        </a>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-16 flex flex-col sm:flex-row gap-10 sm:gap-20">
          <ul className="flex gap-8 text-lg text-zinc-300">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label}
                  <span aria-hidden="true" className={arrowClass}>↗</span>
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-lg text-zinc-400">{contact.location}</p>
        </div>
      </Reveal>
    </Section>
  );
}
