import projects from "../../data/projects.json";
import Project from "../../components/project/project";
import "./styles.scss";
import { Fade } from "react-reveal";
import { INITIAL_DURATION } from "../../App";

function Projects() {
  return (
    <div className="projects-container">
      <Fade duration={INITIAL_DURATION}>
        <h1> projects</h1>
      </Fade>
      {projects.map((project, idx) => (
        <Project project={project} key={idx} />
      ))}
    </div>
  );
}

export default Projects;
