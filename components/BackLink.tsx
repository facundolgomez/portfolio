import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full border border-(--card-border) bg-(--card) px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shadow-(--card-shadow) transition-colors duration-300"
    >
      <ArrowLeft
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />
      Volver
    </Link>
  );
}
