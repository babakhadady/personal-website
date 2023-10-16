import Experience from "../../components/experience/experience";
import Skill from "../../components/skill/skill";
import experiences from "../../data/json/experiences.json";
import skills from "../../data/json/skills.json";
import "./styles.scss";

function About() {
  return (
    <div className="about-container">
      <h1>about</h1>
      <h2>experiences</h2>

<div className="experiences-container">

      {experiences.map((experience, idx) => {
        return <Experience experience={experience} key={idx} />;
      })}
</div>
      <h2>skills</h2>
      <div>
        <ul className="skills-container">
          {skills.map((skill, idx) => {
            return <Skill skill={skill} key={idx} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;
