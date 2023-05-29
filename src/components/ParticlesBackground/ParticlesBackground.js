import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particlesConfig";
import React from "react";
import "./style.css";
import { useEffect } from "react";

const ParticlesBackground = (height) => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };      
	console.log("HHH " + height.height)

	useEffect(() => {

	}, [height.height]);

    return (
        <Particles options={particlesConfig} init={particlesInit} 
        className={"wrapper"} height={height.height}/>

    )
}

export default React.memo(ParticlesBackground);
