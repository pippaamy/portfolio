import Header from "./Header";

export default function NavBar() {
  return (
    <div className="flex  fixed  bg-indigo-400  ">
      <Header />
      <a
        href="/"
        className="block rounded-md px-32 py-2 text-base font-medium  hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Home
      </a>
      <a
        href="/skills"
        className="block rounded-md px-32 py-2 text-base font-medium  hover:bg-violet-500 hover:text-white font-mono tracking-widest"
        aria-current="page"
      >
        About
      </a>
      <a
        href="/projects"
        className="block rounded-md px-32 py-2 text-base font-medium  hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Projects
      </a>
      <a
        href="/contact"
        className="block rounded-md px-32 py-2 text-base font-medium  hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Contact me
      </a>
    </div>
  );
}
