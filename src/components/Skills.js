import React from "react";
import SkillSection from "./SkillSection";
import skills from "../utils/MySkills";

const Skills = ({myRef}) => {
  return (
    <div ref={myRef} className="bg-darkbg pb-6 sm:pb-16 text-white">
      <div className="container mx-auto">
        <h2 className="uppercase text-center mb-10 font-roboto  font-bold text-4xl">
          Skills
        </h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => {
            return <SkillSection key={skill.title} skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
