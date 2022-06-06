import React from "react";
import skills from "../utils/MySkills";
import SkillSection from "./SkillSection";

const Skills = () => {
  return (
    <div id="skills_container" className="pb-6 text-white bg-darkbg sm:pb-16">
      <div className="container mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-center lg:mb-28 lg:text-5xl font-worksans">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => {
            return <SkillSection key={skill.title} skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
