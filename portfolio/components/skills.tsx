import React from "react";
import { Icon } from "@iconify/react";

interface SkillsInfo {
  skillsData: {
    title: string;
    icon: string;
    icon2?: string;
    years: string;
  };
}

const Skills = (props: SkillsInfo) => {
  const { title, years, icon, icon2 } = props.skillsData;

  return (
    <div>
      <div>
        <div className="content-title">
          <div style={{ display: "flex" }}>
            <Icon icon={icon!} color="white" width="30" height="30" />
            <Icon icon={icon2!} color="white" width="30" height="30" />
          </div>
          <div>{title}</div>
        </div>
        <div className="content-subtitle">{years}</div>
      </div>
    </div>
  );
};

export default Skills;
