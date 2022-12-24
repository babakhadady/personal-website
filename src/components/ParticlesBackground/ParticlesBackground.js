import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particlesConfig";
import React from "react";
import "./style.css";


const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };

    return (
        <Particles options={particlesConfig} init={particlesInit} 
        className={"wrapper"} height={5000} />
    )
}

export default React.memo(ParticlesBackground);