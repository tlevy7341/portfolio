import React from "react";
import Pdf from "../img/Leverett-Resume.pdf";

const About = ({myRef}) => {
  return (
    <div ref={myRef} className="bg-darkbg pb-10 text-white">
      <div className="container mx-auto">
        <h2 className="uppercase text-center mb-10 font-bold font-roboto text-4xl">
          About
        </h2>
          <div className="flex  sm:mx-auto sm:w-1/2 flex-col gap-6">
            <p className="px-5 sm:px-0">
              Hello! My name is Tyrail Leverett and I enjoy making web
              applications. I am a full stack developer so I enjoy programming
              the Frontend all the way to the Backend.
            </p>
            <p className="px-5 sm:px-0">
              As of now, my favorite development stack to work with is React on
              the Frontend and Flask on the Backend. I have extensive knowledge on
              the MERN stack as well. I then combine these technologies together
              using Docker all while using Webstorm as my code editor of choice.
            </p>
            <p className="px-5 sm:px-0">
              Outside of coding, my hobbies include watching the NBA, playing
              video games, and just spending time with my family.
            </p>
            <a
              className="self-center"
              href={Pdf}
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-sky-700 bg-sky-500">
                Resume
              </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default About;
