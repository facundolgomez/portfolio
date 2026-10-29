import {
  siReact,
  siTypescript,
  siJavascript,
  siMysql,
  siHtml5,
  siCss,
  siPython,
  siC,
  siDotnet,
} from "simple-icons/icons";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const skills = [
  { icon: siReact, name: "React" },
  { icon: siTypescript, name: "TypeScript" },
  { icon: siJavascript, name: "JavaScript" },
  { icon: siDotnet, name: ".NET" },
  { icon: siMysql, name: "MySQL" },
  { icon: siHtml5, name: "HTML" },
  { icon: siCss, name: "CSS" },
  { icon: "java", name: "Java" },
  { icon: siPython, name: "Python" },
  { icon: siC, name: "C" },
  { icon: "csharp", name: "C#" },
];

export default function SkillsCard() {
  return (
    <article className="card group col-span-2 hover:bg-[#1e293b] p-6 overflow-hidden">
      <h2 className="text-xl tracking-tight text-zinc-900 dark:text-white group-hover:text-white font-semibold transition-colors duration-300">
        Tecnologías
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
        {skills.map(({ icon, name }) => {
          if (icon === "csharp") {
            return (
              <TbBrandCSharp
                key={name}
                className="w-7 h-7 sm:w-9 sm:h-9 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 hover:scale-110 transition duration-300"
                title={name}
              />
            );
          }
          if (icon === "java") {
            return (
              <FaJava
                key={name}
                className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 hover:scale-110 transition duration-300"
                title={name}
              />
            );
          }
          return (
            <svg
              key={name}
              role="img"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8 fill-zinc-500 dark:fill-zinc-400 group-hover:fill-zinc-200 hover:scale-110 transition duration-300"
            >
              <title>{name}</title>
              <path d={(icon as { path: string }).path} />
            </svg>
          );
        })}
      </div>
    </article>
  );
}
