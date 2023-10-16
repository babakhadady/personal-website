import { Fade } from "react-reveal";
import "./style.scss";

function Experience({ experience }) {
  return (
    <Fade delay={400}>
      <div className="experience-container">
        <div className="experience-position">{experience.position}</div>
        <div className="experience-company">{experience.company}</div>
        <div className="experience-date">{experience.date}</div>
        {experience.responsibilities.map((responsibility, idx) => {
          return (
            <div className="experience-body" key={idx}>
              {responsibility}
            </div>
          );
        })}
      </div>
    </Fade>
  );
}

export default Experience;
