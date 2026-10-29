import { ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <a
      href="https://www.linkedin.com/in/facundo-laureano-g%C3%B3mez-3ba42433a/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="
        card
        group
        flex
        items-center
        justify-center
        hover:bg-[#164E8A]
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
      <FaLinkedin
        aria-hidden="true"
        className="w-12 h-12 text-zinc-900 dark:text-white group-hover:text-white group-hover:scale-105 transition duration-300"
      />
    </a>
  );
}
