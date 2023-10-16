import "./styles.scss";
import Contact from "../../components/contact/contact";
import { Fade } from "react-reveal";

import { INITIAL_DURATION } from "../../App";

function Main() {
  return (
    <div id="main-page">
      <Fade top distance={"500px"} delay={100} duration={INITIAL_DURATION}>
        <div className="heading">babak</div>
      </Fade>
      <Fade delay={INITIAL_DURATION}>
        <p className="subheading">
          software engineer, computer science student, teaching assistant
        </p>
      </Fade>

      <div className="main-about-container">
        <Fade delay={INITIAL_DURATION + 200}>
          <p className="about">
            i'm a fourth year undergraduate computer science student
          </p>
        </Fade>
        <Fade delay={INITIAL_DURATION + 400}>
          <p className="about">
            and teaching assistant at the university of british columbia.
          </p>
        </Fade>{" "}
        <Fade delay={INITIAL_DURATION + 600}>
          <p className="about">
            i'm seeking an intern opportunity for january 2024.
          </p>
        </Fade>
      </div>
      <Contact />
    </div>
  );
}

export default Main;
