import Header from "./Header";

export default function NavBar() {
  return (
    <div className=" flex bg-indigo-400 justify-between fixed w-full ">
      <Header />
      <a
        href="/"
        className="
       rounded-md p-3 text-base font-medium  hover:text-white font-mono tracking-widest "
      >
        Home
      </a>
      <a
        href="/skills"
        className="p-3 rounded-md  text-base font-medium   hover:text-white font-mono tracking-widest"
        aria-current="page"
      >
        About
      </a>
      <a
        href="/projects"
        className="p-3 rounded-md  text-base font-medium   hover:text-white font-mono tracking-widest"
      >
        Projects
      </a>
      <a
        href="/contact"
        className=" p-3 rounded-md  text-base font-medium   hover:text-white font-mono tracking-widest"
      >
        Contact me
      </a>
    </div>
  );
}
