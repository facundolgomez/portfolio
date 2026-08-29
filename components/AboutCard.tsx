import Link from "next/link";

export default function AboutCard() {
  return (
    <Link
      href="/about"
      className="group rounded-3xl bg-zinc-200 dark:bg-[#151515] hover:bg-[#0B684F] cursor-pointer transition p-6"
    >
      <h2 className="text-xl text-zinc-900 dark:text-white group-hover:text-white font-semibold transition">
        Sobre mí
      </h2>

      <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 mt-4 transition">
        Información personal.
      </p>
    </Link>
  );
}
