import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import "./App.css";
import particlesConfig from "./components/config/particlesConfig";
import React from "react";
import "./script.js";  
export default function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div>
<body>
  
    <div1>
      
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
        <h1 class="heading listitems"> Hello. </h1>

        <h2 class="listitems"> About </h2>

        <p class="listitems">
            My name is Babak Hadady, I am a Computer Science major at the University of
            British Columbia graduating in 2025.
            I am seeking a coop term for September 2023.
        </p>

        <h2 class="listitems experience" id="experience"> Experiences </h2>
    </div>
</body>
      <Particles options={particlesConfig} init={particlesInit}/>
    </div>
  );
}
