import { useEffect } from "react";

import "./styles.scss";
import Contact from "../../components/contact/Contact";
function Main() {
  return (
    <div id="main-page">
      <div className="heading">babak</div>
      <p className="subheading">
        software engineer, computer science student, teaching assistant
      </p>

      <p className="about-container">
        <p className="about">
          I'm a fourth year Undergraduate Computer Science student
        </p>
        <p className="about">
          and Teaching Assistant at the University of British Columbia.
        </p>
        <p className="about">
          I'm seeking an intern opportunity for September 2023.
        </p>
      </p>
      <Contact />
    </div>
  );
}

export default Main;
