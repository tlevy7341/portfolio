import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "../utils/ParticlesConfig";
import "../App.css";

const Hero = ({ myRefs }) => {
  const [aboutRef, skillsRef, projectsRef] = myRefs;
  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Particles canvasClassName="particles_canvas" options={ParticlesConfig} />
      <div
        id="hero"
        className="bg-darkbg flex flex-col justify-center items-center text-white w-screen h-screen"
      >
        <p className="font-bold font-roboto text-2xl sm:text-6xl z-10">
          Hi, I'm <span className="text-sky-600">Tyrail.</span>
        </p>
        <p className="font-bold font-roboto text-2xl sm:text-6xl z-10">
          I'm a Full Stack Developer.
        </p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => executeScroll(skillsRef)}
            className="underline font-semibold text-sm sm:text-xl hover:text-sky-600 z-10"
          >
            Skills
          </button>
          <span>&#8226;</span>
          <button
            onClick={() => executeScroll(projectsRef)}
            className="underline font-semibold text-sm sm:text-xl hover:text-sky-600 z-10"
          >
            Projects
          </button>
          <span>&#8226;</span>
          <button
            onClick={() => executeScroll(aboutRef)}
            className="underline font-semibold text-sm sm:text-xl hover:text-sky-600 z-10"
          >
            About
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
