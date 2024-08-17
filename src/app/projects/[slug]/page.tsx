import Link from "next/link";
import { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const projects = [
  {
    name: "Good news",
    slug: "good-news",
    type: "mobile",
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    shortDescription: "Recreation of a news site like reddit",
    description:
      "This is a social news site, similar to reddit. Good News contains, articles are divided into topics, and each article allows users to upvote using the API. Users can also add or delete comments on an article.",
    githubLink: "https://github.com/pippaamy/fe-news",
    liveLink: "https://goodnews101.netlify.app/",
    images: [],
  },
  {
    name: "News Backend",
    slug: "news-backend",
    type: "desktop",
    techStack: ["JavaScript", "SQL", "Jest", "Supertest"],
    shortDescription: "Recreation of a news site like reddit",
    description:
      "This is a social news site, similar to reddit. Good News contains, articles are divided into topics, and each article allows users to upvote using the API. Users can also add or delete comments on an article.",
    githubLink: "https://github.com/pippaamy/backend-news",
    liveLink: "https://my-news-2d2d.onrender.com",
    images: [],
  },
  {
    name: "Pokemon Database",
    slug: "pokemon-data",
    type: "desktop",
    techStack: ["JavaScript", "SQL", "Jest"],
    shortDescription: "Extracts data from pokemon api & transforms it",
    description: "",
    githubLink: "https://github.com/pippatherine/pokeDB",
    liveLink: "",
    images: [],
  },
];

type ProjectPageProps = {
  params: { slug: string };
};
const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const project = projects.filter((project) => project.slug === params.slug)[0];
  return (
    <section>
      <div
        className="flex min-h-screen  p-20
    "
      >
        <Link href="/projects">
          <button className="text-primary-text mt-8 ml-8 md:ml-60">
            Back to all
          </button>
        </Link>
      </div>
      <li className="text-primary-text p-8 md:px-60" key={project.name}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-4xl font-bold">{project.name}</h3>
            <ul className="flex flex-wrap pt-2">
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
          </div>

          <div className="">
            <Link href={project.githubLink}>
              Github
              <FaGithub />{" "}
            </Link>

            <Link href={project.liveLink}>
              {" "}
              Live <CgWebsite />{" "}
            </Link>
          </div>
        </div>

        <p className="py-4 whitespace-pre-line">{project.description}</p>
      </li>
    </section>
  );
};

export default ProjectPage;
