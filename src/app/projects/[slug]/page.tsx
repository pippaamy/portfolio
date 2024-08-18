import Link from "next/link";
import { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import { projects } from "../../data";

type ProjectPageProps = {
  params: { slug: string };
};
const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const project = projects.filter((project) => project.slug === params.slug)[0];
  return (
    <section
      className="flex flex-col min-h-screen  py-20 px-10
    "
    >
      <Link href="/projects">
        <button className=" text-base font-medium   hover:text-white font-mono bg-indigo-400 p-3 rounded-lg">
          Back to all
        </button>
      </Link>

      <li className="text-primary-text p-10 list-none " key={project.name}>
        <div>
          <div>
            <h3 className="text-4xl font-bold">{project.name}</h3>
            <ul className="flex flex-wrap pt-2">
              {project.techStack.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="px-2 py-1 mr-2 mb-2 bg-accent text-accent-text font-semibold "
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex ">
            <Link href={project.githubLink} className="p-5 hover:text-white">
              Github
              <FaGithub />
            </Link>

            {project.liveLink == "" ? (
              <p> </p>
            ) : (
              <Link href={project.liveLink} className="p-5 hover:text-white">
                Live <CgWebsite />
              </Link>
            )}
          </div>
        </div>

        <p className="py-4 whitespace-pre-line">{project.description}</p>
        <div className="flex justify-center items-center flex-wrap">
          {project.images.map((image, index) => {
            return (
              <div key={index} className="px-2 p-6">
                <Image
                  src={image}
                  alt="picture of project"
                  width={350}
                  height={820}
                />
              </div>
            );
          })}
        </div>
      </li>
    </section>
  );
};

export default ProjectPage;
