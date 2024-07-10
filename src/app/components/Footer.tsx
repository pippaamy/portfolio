import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex   bottom-0 fixed bg-indigo-400 rounded-t-lg">
      <a
        href="https://github.com/pippaamy"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-violet-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://uk.linkedin.com/in/pippa-austin-52a627b2"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-violet-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:pippa_austin@live.com"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-violet-500  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
}
