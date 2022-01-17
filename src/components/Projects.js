import React from "react";
import projects from "../utils/ProjectList";
import ProjectRow from "./ProjectRow";

const Projects = ({myRef}) => {
  return (
    <div ref={myRef} className="bg-darkbg pb-10 text-white">
      <div className="container mx-auto">
        <h2 className="uppercase text-center mb-10 font-roboto font-bold text-4xl">
          Projects
        </h2>
        {projects.map((project) => {

          return <ProjectRow key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
