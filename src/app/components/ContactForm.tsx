import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  return (
    <>
      <div className="p-5 hover:bg-violet-500/50  rounded-lg hover hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
        <a
          href="mailto:pippa_austin@live.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
          <h2 className="font-bold text-lg p-3 border-b-2">
            Email : pippa_austin@live.com
          </h2>
        </a>
      </div>
      <div className="p-5 hover:bg-violet-500/50  rounded-lg hover hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
        <a
          href="https://github.com/pippaamy"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <h2 className="font-bold text-lg p-3 border-b-2">
            Github : https://github.com/pippaamy
          </h2>
        </a>
      </div>
      <div className="p-5 hover:bg-violet-500/50 rounded-lg hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
        <a
          href="https://uk.linkedin.com/in/pippa-austin-52a627b2"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <h2 className="font-bold text-lg p-3 border-b-2">
            LinkedIn : https://uk.linkedin.com/in/pippa-austin-52a627b2
          </h2>
        </a>
      </div>
    </>
  );
}
