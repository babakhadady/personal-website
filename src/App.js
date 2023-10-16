import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router/routes";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import ErrorPage from "./pages/error/error";

import "./App.scss";
import ParticlesBackground from "./components/particles/particles";
import NavigationBar from "./components/navbar/navbar";
import Projects from "./pages/projects/projects";

export const INITIAL_DURATION = 1000;

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground>
        <NavigationBar />
        <Routes>
          <Route path={routes.main} element={<Main />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.projects} element={<Projects />} />

          <Route path={routes.error} element={<ErrorPage />} />
        </Routes>
      </ParticlesBackground>
    </BrowserRouter>
  );
}

export default App;
