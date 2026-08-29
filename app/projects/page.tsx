import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Club de deportes",
    description:
      "Sistema de gestión para club deportivo desarrollado como proyecto final de la materia Práctica Profesional Supervisada.",
    url: "https://github.com/francocallegari/PPS-Club-Deportivo",
    tech: [".NET", "C#"],
  },
  {
    name: "API de guarderia de animales",
    description:
      "API REST para gestionar el registro y cuidado de mascotas en una guardería.",
    url: "https://github.com/facundolgomez/proyecto-web-API",
    tech: [".NET", "C#"],
  },

  {
    name: "Berserk memotest",
    description:
      "Juego de memoria con temática Berserk, animaciones de flip y sonido.",
    url: "https://berserk-memotest.vercel.app/",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "Lista de tareas",
    description: "Aplicación para crear, marcar y eliminar tareas pendientes.",
    url: "https://facundolgomez.github.io/Things-to-do/",
    tech: ["HTML", "CSS", "JS"],
  },
];

export default function ProyectsPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Volver
        </Link>
      </div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </section>
    </main>
  );
}
