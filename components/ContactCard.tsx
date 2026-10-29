import { ExternalLink } from "lucide-react";

export default function ContactCard() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=facundolgomez87@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
  card
  group
  col-span-2
  hover:bg-[#7A1F5C]
  p-5
  md:p-6
  flex
  flex-col
  justify-between
"
    >
      <ExternalLink
        size={18}
        strokeWidth={1.8}
        aria-hidden="true"
        className="
    absolute
    top-5
    right-5
    text-zinc-400 dark:text-zinc-500
    transition
    duration-300
    group-hover:text-white
    group-hover:translate-x-0.5
    group-hover:-translate-y-0.5
  "
      />
      <h2 className="text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-white font-semibold transition-colors duration-300">
        Contacto
      </h2>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wider transition-colors duration-300">
            Ubicación
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
            Rosario, Argentina
          </p>
        </div>

        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wider transition-colors duration-300">
            Email
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
            facundolgomez87@gmail.com
          </p>
        </div>
      </div>
    </a>
  );
}
