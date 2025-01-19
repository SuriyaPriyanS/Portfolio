import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles />
    //   id="tsparticles"
    //   init={particlesInit}
    //   options={{
    //     fullScreen: {
    //       enable: false
    //     },
    //     background: {
    //       color: {
    //         value: "transparent",
    //       },
    //     },
    //     fpsLimit: 120,
    //     particles: {
    //       number: {
    //         value: 160,
    //         density: {
    //           enable: true,
    //           value_area: 1500,
    //         },
    //       },
    //       color: {
    //         value: "#ffffff",
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       opacity: {
    //         value: 0.5,
    //         random: true,
    //         animation: {
    //           enable: true,
    //           speed: 1,
    //           minimumValue: 0.1,
    //           sync: false,
    //         },
    //       },
    //       size: {
    //         value: 1,
    //         random: true,
    //       },
    //       move: {
    //         enable: true,
    //         direction: "right",
    //         speed: 0.05,
    //         random: true,
    //         straight: false,
    //         outModes: {
    //           default: "out",
    //         },
    //       },
    //     },
    //     interactivity: {
    //       detectsOn: "canvas",
    //       events: {
    //         onClick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quantity: 1,
    //         },
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // 
  );
}

export default Particle;