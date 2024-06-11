export default function NavBar() {
  return (
    <div className="flex justify-evenly  ">
      <a
        href="/"
        className="block rounded-md px-16 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Home
      </a>
      <a
        href="/skills"
        className="block rounded-md px-16 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white font-mono tracking-widest"
        aria-current="page"
      >
        About me
      </a>
      <a
        href="/projects"
        className="block rounded-md px-16 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Projects
      </a>
      <a
        href="/contact"
        className="block rounded-md px-16 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white font-mono tracking-widest"
      >
        Contact me
      </a>
    </div>
  );
}
