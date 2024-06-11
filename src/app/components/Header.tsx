import Link from "next/link";

export default function Header() {
  return (
    <div className="flex   items-center justify-between p-24">
      <header>
        <h1 className="font-mono tracking-widest">
          <Link href="/">PIPPA AUSTIN - FULL STACK DEVELOPER</Link>
        </h1>
      </header>
    </div>
  );
}
