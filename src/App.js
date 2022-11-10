import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import "/App.css";
import particlesConfig from "./components/config/particlesConfig";
import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-reveal";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  useEffect(() => { document.body.style.backgroundColor = '#0f0f0f' }, [])


  return (
    <div className="page">
      <div>
        <nav>
          <ul className="details">
            <li><a>CONTACT</a></li>
            <li><a href="downloads/babak hadady.docx" download>RESUME</a></li>
            <li><a href="https://www.linkedin.com/in/babak-hadady-50a857201/">LINKEDIN</a></li>
            <li><a href="#experience">EXPERIENCES</a></li>
            <li><a href="#aboutme">ABOUT ME</a></li>
          </ul>
        </nav>
      </div>
      <Particles options={particlesConfig} init={particlesInit} className={"wrapper"} height={2000} />

      <div className="body">
        <Fade bottom cascade>
          <h1 className="heading listitems"> Hello. </h1>
          <p>
            My name is Babak Hadady, I am a Computer Science major at the University of
            British Columbia graduating in 2025.
            I am seeking a coop term for September 2023.
          </p>
          <h2 className="listitems"> About </h2>
          <h2 className="listitems experience" id="experience"> Experiences </h2>
        </Fade>
      </div>
    </div>
  );
}
