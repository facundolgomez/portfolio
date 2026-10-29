import { ExternalLink } from "lucide-react";

type Props = {
  name: string;
  description: string;
  url: string;
  tech?: string[];
};

export default function ProjectCard({
  name,
  description,
  url,
  tech = [],
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group hover:bg-[#8A2424] p-6 flex flex-col justify-between min-h-[180px]"
    >
      <ExternalLink
        size={18}
        strokeWidth={1.8}
        aria-hidden="true"
        className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-500 transition duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />

      <div>
        <h2 className="text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-white font-semibold pr-6 transition-colors duration-300">
          {name}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 mt-2 transition-colors duration-300">
          {description}
        </p>
      </div>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
