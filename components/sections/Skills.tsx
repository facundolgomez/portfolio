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
import Reveal from "@/components/Reveal";
import Section from "./Section";

const iconClass =
  "w-6 h-6 shrink-0 transition-colors duration-300 text-zinc-500 group-hover:text-white";

function SimpleIcon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d={path} />
    </svg>
  );
}

const skills = [
  { name: "React", icon: <SimpleIcon path={siReact.path} /> },
  { name: "TypeScript", icon: <SimpleIcon path={siTypescript.path} /> },
  { name: "JavaScript", icon: <SimpleIcon path={siJavascript.path} /> },
  { name: ".NET", icon: <SimpleIcon path={siDotnet.path} /> },
  { name: "C#", icon: <TbBrandCSharp aria-hidden="true" className={iconClass} /> },
  { name: "MySQL", icon: <SimpleIcon path={siMysql.path} /> },
  { name: "HTML", icon: <SimpleIcon path={siHtml5.path} /> },
  { name: "CSS", icon: <SimpleIcon path={siCss.path} /> },
  { name: "Java", icon: <FaJava aria-hidden="true" className={iconClass} /> },
  { name: "Python", icon: <SimpleIcon path={siPython.path} /> },
  { name: "C", icon: <SimpleIcon path={siC.path} /> },
];

export default function Skills() {
  return (
    <Section id="tecnologias" index="02" title="Tecnologías">
      <Reveal>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
          {skills.map(({ name, icon }) => (
            <li
              key={name}
              className="group flex items-center gap-4 text-xl sm:text-2xl text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              {icon}
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
