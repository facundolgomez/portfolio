import { siGithub } from "simple-icons/icons";
import { ExternalLink } from "lucide-react";

export default function GithubCard() {
  return (
    <a
      href="https://github.com/facundolgomez"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="card group flex items-center justify-center hover:bg-[#5C3A16]"
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
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-12 h-12 fill-zinc-900 dark:fill-white group-hover:fill-white group-hover:scale-105 transition duration-300"
      >
        <path d={siGithub.path} />
      </svg>
    </a>
  );
}
