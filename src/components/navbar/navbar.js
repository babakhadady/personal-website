import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";
import "./styles.scss";
import { Fade } from "react-reveal";

import { INITIAL_DURATION } from "../../App";

function NavigationBar() {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <div className="navigation-bar">
      <Fade top cascade duration={800} delay={INITIAL_DURATION + 800}>
        <ul>
          <li>
            <Link
              to={routes.main}
              className={
                "navigation-element" +
                (location == routes.main ? " current" : "")
              }>
              home
            </Link>
          </li>
          <li>
            <Link
              to={routes.about}
              className={
                "navigation-element" +
                (location == routes.about ? " current" : "")
              }>
              about
            </Link>
          </li>
          <li>
            <Link
              to={routes.projects}
              className={
                "navigation-element" +
                (location == routes.projects ? " current" : "")
              }>
              projects
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="navigation-element"
              href="https://www.linkedin.com/in/babak-hadady-50a857201/">
              linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="navigation-element"
              href="https://www.github.com/babakhadady">
              github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="navigation-element"
              href="mailto: hadadybabak@gmail.com">
              contact
            </a>
          </li>
        </ul>
      </Fade>
    </div>
  );
}

export default NavigationBar;
