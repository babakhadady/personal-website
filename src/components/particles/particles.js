import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../config/particlesConfig";
import React from "react";
import "./style.scss";

function ParticlesBackground(height) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      options={particlesConfig}
      init={particlesInit}
      className={"particles-wrapper"}
      height={height}
    />
  );
}

export default ParticlesBackground;
