import Image from "next/image";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="px-2 font-mono tracking-widest font-bold text-3xl">
        PIPPA AUSTIN
      </h2>

      <Image
        src="/IMG_0656.jpg"
        alt="pic of author"
        width={300}
        height={300}
        className="rounded-full aspect-square object-cover "
      />
      <h2 className="px-2 font-mono tracking-widest font-bold text-2xl">
        FULL STACK DEVELOPER
      </h2>

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
    </main>
  );
}
