import { ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <a
      href="https://www.linkedin.com/in/facundo-laureano-g%C3%B3mez-3ba42433a/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        rounded-2xl
        bg-zinc-200 dark:bg-[#151515]
        flex
        items-center
        justify-center
        cursor-pointer
        transition
        hover:bg-[#164E8A]
      "
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
      <FaLinkedin className="w-12 h-12 text-zinc-900 dark:text-white group-hover:text-white transition" />
    </a>
  );
}
