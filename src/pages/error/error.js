import { Link, useRouteError } from "react-router-dom";
import { routes } from "../../router/routes";

import './styles.scss'

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1> sorry about this...</h1>
      <p>the page you were looking for does not exist</p>
      <Link to={routes.main}>return home</Link>
    </div>
  );
}
