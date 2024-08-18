import Link from "next/link";
import { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

const projects = [
  {
    name: "Good news",
    slug: "good-news",
    type: "mobile",
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    shortDescription: "Recreation of a news site like reddit",
    description:
      "This is a social news site, similar to reddit. Good News contains, articles are divided into topics, and each article allows users to upvote using the API. Users can also add or delete comments on an article as well as posting a new article or topic.",
    githubLink: "https://github.com/pippaamy/fe-news",
    liveLink: "https://goodnews101.netlify.app/",
    images: [
      "/images/news/IMG_7465.png",
      "/images/news/IMG_7466.png",
      "/images/news/IMG_7467.png",
      "/images/news/IMG_7468.png",
      "/images/news/IMG_7469.png",
    ],
  },
  {
    name: "News Backend",
    slug: "news-backend",
    type: "desktop",
    techStack: ["JavaScript", "SQL", "Jest", "Supertest"],
    shortDescription: "Recreation of a news site like reddit",
    description:
      "This is a social news site, similar to reddit. Good News contains articles that are divided into topics, and each article allows users to upvote using the API. Users can also add or delete comments on an article whilst logged in well as  well as posting a new article or topic.",
    githubLink: "https://github.com/pippaamy/backend-news",
    liveLink: "https://my-news-2d2d.onrender.com",
    images: ["/images/news/IMG_7470.png"],
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
    images: ["/images/pokemon/plan.png"],
  },
  {
    name: "Gone for a bork",
    slug: "gone-bork",
    type: "mobile",
    techStack: ["JavaScript", "React Native", "Firebase", "TensorFlow"],
    shortDescription: "Gamified dog identifaction app",
    description: "",
    githubLink: "https://github.com/pippaamy/dog-react-native",
    liveLink:
      " https://www.linkedin.com/posts/pippa-austin-52a627b2_for-our-group-project-team-husky-at-northcoders-activity-6981533689855754240-goQh?utm_source=share&utm_medium=member_ios",
    images: [
      "/images/bork/IMG_7471.png",
      "/images/bork/IMG_7472.png",
      "/images/bork/IMG_7473.png",
      "/images/bork/IMG_7474.png",
      "/images/bork/IMG_7475.png",
      "/images/bork/IMG_7476.png",
      "/images/bork/IMG_7477.png",
      "/images/bork/IMG_7478.png",
    ],
  },
];

type ProjectPageProps = {
  params: { slug: string };
};
const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const project = projects.filter((project) => project.slug === params.slug)[0];
  return (
    <section
      className="flex flex-col min-h-screen  p-20
    "
    >
      <Link href="/projects">
        <button className=" text-base font-medium   hover:text-white font-monomt-8 ml-8 md:ml-60 bg-indigo-400 p-3 rounded-lg">
          Back to all
        </button>
      </Link>

      <li
        className="text-primary-text p-8 md:px-60 list-none"
        key={project.name}
      >
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
        <div className="flex justify-center items-center">
          {project.images.map((image, index) => {
            return (
              <div key={index} className="px-2">
                <Image
                  src={image}
                  alt="pic of author"
                  width={300}
                  height={300}
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
