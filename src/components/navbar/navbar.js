import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import "./style.scss";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <ul>
        <li>
          <Link to={routes.main} className="navigation-element">
            home
          </Link>
        </li>
        <li>
          <Link to={routes.about} className="navigation-element">
            about
          </Link>
        </li>
        <li>
          <Link to={routes.projects} className="navigation-element">
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
    </div>
  );
}

export default NavigationBar;
