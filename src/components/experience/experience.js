import "./style.scss";

function Experience({ experience }) {
  return (
    <li>
      <div className="experience-container">
        <div className="experience-position">{experience.position}</div>
        <div className="experience-company">{experience.company}</div>
        <div className="experience-date">{experience.date}</div>
        {experience.responsibilities.map((responsibility) => {
          return <div className="experience-body"> {responsibility}</div>;
        })}
      </div>
    </li>
  );
}

export default Experience;
