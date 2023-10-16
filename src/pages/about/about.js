import { Fade } from "react-reveal";
import Experience from "../../components/experience/experience";
import Skill from "../../components/skill/skill";
import experiences from "../../data/json/experiences.json";
import skills from "../../data/json/skills.json";
import { INITIAL_DURATION } from "../../App";
import "./styles.scss";

function About() {
  return (
    <div className="about-container">
      <Fade duration={INITIAL_DURATION}>
        <h1>about</h1>
      </Fade>
      <Fade delay={200}>
        <h2>experiences</h2>
      </Fade>

      <div className="experiences-container">
        {experiences.map((experience, idx) => {
          return <Experience experience={experience} key={idx} />;
        })}
      </div>
      <Fade duration={INITIAL_DURATION}>
        <h2>skills</h2>
      </Fade>
      <ul className="skills-container">
        {skills.map((skill, idx) => {
          return (
            <Fade delay={200 * idx} key={idx}>
              <Skill skill={skill} />
            </Fade>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
