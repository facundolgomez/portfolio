import { siGithub } from "simple-icons/icons";
import { ExternalLink } from "lucide-react";

export default function GithubCard() {
  return (
    <a
      href="https://github.com/facundolgomez"
      target="_blank"
      rel="noopener noreferrer"
      className=" group
        relative rounded-3xl bg-zinc-200 dark:bg-[#151515] flex items-center justify-center hover:bg-[#5C3A16] cursor-pointer transition"
    >
      <ExternalLink
        size={18}
        strokeWidth={1.8}
        className="
    absolute
    top-5
    right-5
    text-zinc-400 dark:text-zinc-500
    transition
    group-hover:text-white
    group-hover:translate-x-0.5
    group-hover:-translate-y-0.5
  "
      />
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-12 h-12 fill-zinc-900 dark:fill-white"
      >
        <path d={siGithub.path} />
      </svg>
    </a>
  );
}
