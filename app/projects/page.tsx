import ProjectCard from "@/components/ProjectCard";
import BackLink from "@/components/BackLink";

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
    <main className="min-h-screen px-4 py-8 sm:p-8">
      <div className="max-w-6xl mx-auto mb-8 space-y-6">
        <BackLink />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Proyectos
        </h1>
      </div>

      <section className="stagger max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </section>
    </main>
  );
}
