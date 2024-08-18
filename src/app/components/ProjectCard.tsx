import Link from "next/link";
import { FunctionComponent } from "react";

type ProjectProps = {
  project: {
    name: string;
    slug: string;
    type: string;
    techStack: string[];
    shortDescription: string;
    description: string;
    githubLink: string;
    liveLink: string;
    images: string[];
  };
};

type Project = {
  name: string;
  slug: string;
  type: string;
  techStack: string[];
  shortDescription: string;
  description: string;
  githubLink: string;
  liveLink: string;
  images: string[];
};
export const ProjectCard: FunctionComponent<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col font-mono border-y-2 border-accent p-5 md:p-4">
      <Link key={project.name} href={`/projects/${project.slug}`}>
        <div className="flex justify-between">
          <div>
            <h3 className="text-4xl  font-bold">{project.name}</h3>
            <p>{project.shortDescription}</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-accent rounded-sm text-accent-text px-2 py-1 h-min">
              More
            </button>
          </div>
        </div>
        <ul className="flex flex-wrap py-2">
          {project.techStack.map((skill, index) => {
            return (
              <li
                key={index}
                className="px-2 py-1 mr-2 mb-2 bg-accent text-accent-text font-semibold"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};
