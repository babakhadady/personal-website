import projects from "../../documents/projects.json";
import Project from "../../components/project/project";

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Projects;
