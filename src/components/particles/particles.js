import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../config/particlesConfig";
import "./styles.scss";

function ParticlesBackground({ children }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <div>{children}</div>
      <Particles
        options={particlesConfig}
        init={particlesInit}
        className={"particles-wrapper"}
      />
    </div>
  );
}

export default ParticlesBackground;
