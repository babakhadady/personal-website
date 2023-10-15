import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { routes } from "./router/routes";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import ErrorPage from "./pages/error/error";

import "./App.scss";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground height={document.documentElement.offsetHeight} />
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.about} element={<About />} />

        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
