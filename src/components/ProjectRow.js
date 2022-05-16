import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tag from "./Tag";

const ProjectRow = ({ project, index }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    setTags(project.tags.split(","));
  }, []);

  return (
    <div
      className={`flex flex-col py-10 lg:py-44 ${
        index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
      } `}
    >
      <div
        data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
        className="flex flex-col items-center justify-center flex-1 gap-2 text-center"
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <ul className="flex flex-row gap-2 sm:gap-3 sm:justify-evenly">
          {tags.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
        </ul>
        <p className="px-4 sm:px-0 sm:w-3/4">{project.description}</p>

        <ul className="flex gap-6">
          <li className="text-2xl">
            <a
              className="hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={project.externalLink}
            >
              <FaExternalLinkAlt />
            </a>
          </li>
          <li className="text-2xl">
            <a
              className="hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubLink}
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div
        data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
        className={`flex ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        } flex-1 px-4 py-5 sm:py-0 sm:px-0`}
      >
        <img
          className="transition-all rounded-lg hover:-translate-y-2 sm:w-3/4"
          src={project.image}
          alt={`${project.title} Website`}
        />
      </div>
    </div>
  );
};

export default ProjectRow;
