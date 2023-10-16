import "./styles.scss";
import { Icon } from "@iconify/react";

function Skill({ skill }) {
  return (
    <li className="skill">
      <Icon className={"icon"} icon={skill.icon} />
      <p className="skill-name">{skill.name}</p>
    </li>
  );
}

export default Skill;
