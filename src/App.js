import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./router/routes";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import ErrorPage from "./pages/error/error";

import "./App.scss";
import ParticlesBackground from "./components/particles/particles";
import NavigationBar from "./components/navbar/navbar";
import Projects from "./pages/projects/projects";
import { useEffect } from "react";

export const INITIAL_DURATION = 1000;

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground>
        <ScrollTop>
          <NavigationBar />
          <Routes>
            <Route path={routes.main} element={<Main />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.projects} element={<Projects />} />

            <Route path={routes.error} element={<ErrorPage />} />
          </Routes>
        </ScrollTop>
      </ParticlesBackground>
    </BrowserRouter>
  );
}

export default App;

function ScrollTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
}
