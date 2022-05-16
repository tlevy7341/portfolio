import React from "react";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import "../App.css";
import ParticlesConfig from "../utils/ParticlesConfig";

const Hero = () => {
  return (
    <>
      <Particles canvasClassName="particles_canvas" options={ParticlesConfig} />
      <div
        id="hero"
        className="flex flex-col items-center justify-center w-screen h-screen text-white bg-darkbg"
      >
        <p className="z-10 text-2xl font-bold font-worksans sm:text-6xl">
          Hi, I'm <span className="text-sky-600">Tyrail.</span>
        </p>
        <p className="z-10 text-2xl font-bold font-worksans sm:text-6xl">
          I'm a Front-End Developer.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="skills_container"
            spy={true}
            smooth={true}
            duration={500}
            className="z-10 text-sm font-semibold underline sm:text-xl hover:text-sky-600"
          >
            Skills
          </Link>
          <span>&#8226;</span>
          <Link
            to="projects_container"
            spy={true}
            smooth={true}
            duration={500}
            className="z-10 text-sm font-semibold underline sm:text-xl hover:text-sky-600"
          >
            Projects
          </Link>
          <span>&#8226;</span>
          <Link
            to="about_container"
            spy={true}
            smooth={true}
            duration={500}
            className="z-10 text-sm font-semibold underline sm:text-xl hover:text-sky-600"
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
