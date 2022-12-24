import "./App.css";
import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Header2 from "../components/Header/Header2";
import Header3 from "../components/Header/Header3";
import Projects from "../components/Projects/Projects"
import Paragraph from "../components/Paragraph/Paragraph";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";




export default function App() {

  useEffect(() => {
    document.body.style.backgroundColor = '#0f0f0f';
    document.title = "Babak Hadady";
  }, [])

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])


  return (
    <div>
      <ParticlesBackground />
      <NavBar />

      <section className="container-main">
        <Header offset={25} offsetY={10 + scrollPosition.scrollY}>
          <Fade bottom delay={50}>
            Babak
          </Fade>
        </Header>
        <Header2 offset={125} offsetY={10 + scrollPosition.scrollY}>
          <Fade delay={500}>
            CS Student and Teaching Assistant
          </Fade>
        </Header2>
        <Paragraph offset={150} offsetY={scrollPosition.scrollY}>
          <Fade delay={1000}>
            I'm a third year undergraduate Computer Science student
          </Fade>
        </Paragraph>
        <Paragraph offset={175} offsetY={scrollPosition.scrollY}>
          <Fade delay={1150}>
            and Teaching Assistant at the University of British Columbia
          </Fade>
        </Paragraph>
        <Paragraph offset={200} offsetY={scrollPosition.scrollY}>
          <Fade delay={1300}>
            I'm seeking an intern opportunity for September 2023.
          </Fade>
        </Paragraph>
      </section>

      <section className="projects">
        <Header3 offset={1000} offsetY={scrollPosition.scrollY}>
          Projects
        </Header3>

        <Projects offset={300} offsetY={scrollPosition.scrollY} />

      </section>

    </div >
  );
}
