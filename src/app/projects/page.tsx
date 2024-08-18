import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../../app/data";
export default function Projects() {
  return (
    <div
      className="flex min-h-screen flex-col  justify-between py-16 px-10 
    "
    >
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.slug} />;
      })}
    </div>
  );
}
