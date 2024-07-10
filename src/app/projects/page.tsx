import { ProjectCard } from "../components/ProjectCard";

export default function Projects() {
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}
