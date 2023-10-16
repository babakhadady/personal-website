import { Fade } from "react-reveal";
import "./styles.scss";
import { Icon } from "@iconify/react";
import { INITIAL_DURATION } from "../../App";

function Project({ project }) {
  return (
    <Fade duration={INITIAL_DURATION + 500} delay={600}>
      <div className="project-container ">
        <div className="project-name">{project.name}</div>
        <div className="project-sub">{project.sub}</div>
        <div className="project-description-container">
          {project.description.map((el, idx) => {
            return (
              <div
                className="project-description"
                key={`${project.name} description-${idx}`}>
                {el}
              </div>
            );
          })}
        </div>
        <div className="project-tech-container">
          {project.tech.map((el, idx) => {
            return (
              <Icon
                className="project-icon"
                icon={el}
                key={`${project.name} tech-${idx}`}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
export default Project;
