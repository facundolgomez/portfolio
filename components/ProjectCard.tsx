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
      className="group relative rounded-3xl bg-zinc-200 dark:bg-[#151515] hover:bg-[#8A2424] cursor-pointer transition p-6 flex flex-col justify-between min-h-[180px]"
    >
      <ExternalLink
        size={18}
        strokeWidth={1.8}
        className="absolute top-5 right-5 text-zinc-400 dark:text-zinc-500 transition group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />

      <div>
        <h2 className="text-xl text-zinc-900 dark:text-white group-hover:text-white font-semibold transition">
          {name}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 mt-2 transition">
          {description}
        </p>
      </div>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-zinc-300 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:bg-white/10 group-hover:text-white transition"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
