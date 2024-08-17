import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJest,
  SiTensorflow,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

export default function TechStack() {
  return (
    <ul className="flex flex-wrap pt-6 text-4xl">
      <li>
        <SiJavascript className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiTypescript className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiHtml5 className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiCss3 className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiNextdotjs className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiReact className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiNodedotjs className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiExpress className="w-20 h-20 p-3" />
      </li>

      <li>
        <SiPostgresql className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiTailwindcss className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiJest className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiTensorflow className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiFirebase className="w-20 h-20 p-3" />
      </li>
      <li>
        <SiSupabase className="w-20 h-20 p-3" />
      </li>
    </ul>
  );
}
