import React, {useEffect} from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tag from "./Tag";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectRow = (props) => {

  useEffect(()=>{
    AOS.init({duration: 700, once: true});
  },[])

  return (
    <div
      className={`flex flex-col py-5 ${
        props.project.reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } `}
    >
      <div data-aos={`${props.project.reverse ? "fade-left" : "fade-right"}`} className="flex flex-1 gap-2 flex-col justify-center text-center items-center">
        <h3 className="font-semibold text-xl">{props.project.title}</h3>
        <ul className="flex flex-row gap-2 sm:gap-3  sm:justify-evenly">
          {props.project.tags.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
        </ul>
        <p className="px-4 sm:px-0 sm:w-3/4">{props.project.description}</p>
        {props.project.notes ? (
          <p className="italic px-4 sm:px-0 sm:w-3/4">
            Note: App hosted on free Heroku server. Please allow 15-30s to spin
            up.
          </p>
        ) : null}

        <ul className="flex gap-6">
          <li className="text-2xl">
            <a className="hover:text-sky-600" target='_blank' rel="noopener noreferrer" href={props.project.externalLink}>
              <FaExternalLinkAlt />
            </a>
          </li>
          <li className="text-2xl">
            <a className="hover:text-sky-600" target='_blank' rel="noopener noreferrer" href={props.project.githubLink}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div data-aos={`${props.project.reverse ? "fade-right" : "fade-left"}`} className="flex py-5 sm:py-0 px-4 sm:px-0 flex-1">
        <img
          className="hover:-translate-y-3 transition-all sm:w-3/4 rounded-lg"
          src={props.project.image}
          alt={`${props.project.title} Website`}
        />
      </div>
    </div>
  );
};

export default ProjectRow;
