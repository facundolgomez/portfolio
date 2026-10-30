export type Project = {
  name: string;
  description: string;
  url: string;

  repo?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "DaleMesa",
    description:
      "App que muestra en tiempo real qué mesas están libres en bares y restaurantes, usando una cámara con IA para detectar la ocupación sin exponer la imagen del local. Desarrollada en equipo durante la hackatón Shippear 3.0.",
    url: "https://dalemesa.vercel.app/",
    tech: ["Next.js", "Supabase"],
  },
  {
    name: "Club de deportes",
    description:
      "Sistema de gestión para club deportivo desarrollado como proyecto final de la materia Práctica Profesional Supervisada.",
    url: "https://github.com/francocallegari/PPS-Club-Deportivo",
    tech: ["React", ".NET", "C#"],
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

export const contact = {
  email: "facundolgomez87@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=facundolgomez87@gmail.com",
  github: "https://github.com/facundolgomez",
  linkedin:
    "https://www.linkedin.com/in/facundo-laureano-g%C3%B3mez-3ba42433a/",
  location: "Rosario, Argentina",
};
