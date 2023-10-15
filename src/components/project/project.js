import "./style.scss";
import { Icon } from "@iconify/react";

function Project({ project }) {
  return (
    <div className="project-container ">
      <div className="project-name">{project.name}</div>
      <div className="project-sub">{project.sub}</div>
      <div className="project-description-container">
        {project.description.map((el) => {
          return <div className="project-description"> {el}</div>;
        })}
      </div>
      <div className="project-tech-container">
        {project.tech.map((el) => {
          return <Icon className="project-icon" icon={el} />;
        })}
      </div>
    </div>
  );
}
export default Project;
