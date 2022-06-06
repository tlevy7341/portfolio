import React, { useEffect, useState } from "react";
import useContentful from "../utils/useContentful";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const { getProjects } = useContentful();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((projects) => setProjects(projects));
  }, []);
  return (
    <div id="projects_container" className="pb-10 text-white bg-darkbg">
      <div className="container mx-auto">
        <h2 className="py-10 mb-10 text-2xl font-bold text-center lg:text-5xl font-worksans">
          Projects
        </h2>
        {projects.map((project, index) => {
          return (
            <ProjectRow key={project.title} project={project} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
