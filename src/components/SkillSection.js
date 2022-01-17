import React from "react";
import SkillImage from "./SkillImage";

const SkillSection = (props) => {
  return (
    <div className="shadow-lg">
      <h3 className="text-center font-bold text-2xl">{props.skill.title}</h3>
      <ul className="flex justify-center p-10 gap-5">
        {props.skill.technologies.map((technology) => {
          return <SkillImage key={technology.props.className} image={technology} />;
        })}
      </ul>
    </div>
  );
};

export default SkillSection;
