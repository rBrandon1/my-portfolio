import React from "react";
import clsx from "clsx";
import Skills from "../components/skills";

const SkillsPage = () => {
  return (
    <div className="skills-page text-2xl">
      <div className="h">
        <h1 className="header text-4xl">Skills</h1>
      </div>
      <div
        className={clsx("content", "flex justify-center", "overflow-hidden")}>
        <div
          className={clsx(
            "text-justify",
            "grid grid-cols-2 gap-16",
            "md:gap-32",
            "lg:grid-cols-3"
          )}>
          <div>
            <Skills
              skillsData={{
                title: "Javascript",
                icon: "logos:javascript",
                years: "2 yrs",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "Node.js",
                icon: "logos:nodejs",
                years: "<2 yrs",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "MySQL",
                icon: "cib:mysql",
                years: "<1 yr",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "Java",
                icon: "logos:java",
                years: "<1 yr",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "React",
                icon: "vscode-icons:file-type-reactjs",
                years: "2 yrs",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "HTML/CSS",
                icon: "vscode-icons:file-type-html",
                icon2: "vscode-icons:file-type-css",
                years: "2 yrs",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "Next.js",
                icon: "teenyicons:nextjs-outline",
                years: "1 yr",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "Flutter/Dart",
                icon: "logos:flutter",
                years: "2 yrs",
              }}
            />
          </div>
          <div>
            <Skills
              skillsData={{
                title: "Typescript",
                icon: "logos:typescript-icon",
                years: "<1 yr",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsPage;
