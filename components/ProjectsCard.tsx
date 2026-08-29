import Link from "next/link";

export default function ProjectsCard() {
  return (
    <Link
      href="/projects"
      className="group col-span-2 rounded-3xl bg-zinc-200 dark:bg-[#151515] p-6 hover:bg-[#8A2424] cursor-pointer transition"
    >
      <h2 className="text-2xl text-zinc-900 dark:text-white group-hover:text-white font-semibold transition">
        Proyectos
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 mt-4 transition">
        Aplicaciones desarrolladas.
      </p>
    </Link>
  );
}
