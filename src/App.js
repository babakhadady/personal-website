import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import "/App.css";
import particlesConfig from "./components/config/particlesConfig";
import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };


  return (
    <div>
      <body>
        <div1>
    "Hello"
          <nav>
            <ul class="details">
              <li><a>CONTACT</a></li>
              <li><a href="downloads/babak hadady.docx" download>RESUME</a></li>
              <li><a href="https://www.linkedin.com/in/babak-hadady-50a857201/">LINKEDIN</a></li>
              <li><a href="#experience">EXPERIENCES</a></li>
              <li><a href="#aboutme">ABOUT ME</a></li>
              <li class="detailbar"></li>
            </ul>
          </nav>
        </div1>

        <div class="body">
        <Parallax pages={5}>
        <ParallaxLayer speed={1}>
        <h1 class="heading listitems"> Hello. </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
        <p class="listitems">
            My name is Babak Hadady, I am a Computer Science major at the University of
            British Columbia graduating in 2025.
            I am seeking a coop term for September 2023.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
        <h2 class="listitems"> About </h2>

        </ParallaxLayer>
        <ParallaxLayer offset={3}>
        <h2 class="listitems experience" id="experience"> Experiences </h2>
        </ParallaxLayer>
      </Parallax>




        </div>
      </body>
      <Particles options={particlesConfig} init={particlesInit} />
    </div>
  );
}
