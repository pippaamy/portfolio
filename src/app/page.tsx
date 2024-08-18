import Image from "next/image";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="px-2 font-mono tracking-widest font-bold text-3xl">
        PIPPA AUSTIN
      </h2>

      <Image
        src="/images/profile/IMG_0656.jpg"
        alt="pic of author"
        width={300}
        height={300}
        className="rounded-full aspect-square object-cover "
      />
      <h2 className="px-2 font-mono tracking-widest font-bold text-2xl">
        FULL STACK DEVELOPER
      </h2>
      <TechStack />
    </main>
  );
}
