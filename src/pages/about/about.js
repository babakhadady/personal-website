import Skill from "../../components/skill/skill";
import skills from "../../data/skills.json";
import "./styles.scss";

function About() {
  return (
    <div className="about-container">
      <h1>about</h1>
      <h2>experiences</h2>

      <h2>skills</h2>
      <div>
        <ul className="skills-container">
          {skills.map((skill, idx) => {
            return <Skill skill={skill} key={idx}></Skill>;
          })}
        </ul>
      </div>
      <p className="text">test</p>
    </div>
  );
}

export default About;
