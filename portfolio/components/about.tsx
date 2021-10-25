import React from "react";
import clsx from "clsx";

const AboutMe = () => {
  return (
    <div>
      <div className="h">
        <h1 className="header">About Me</h1>
      </div>
      <div className={clsx("content", "about text-justify")}>
        <div>
          <p className="content-subtitle ">
            I’m a student at Arizona State University in Tempe, AZ. majoring in
            Computer Science. I work on websites focusing on front-end
            development. Over the past couple of months, I have been teaching
            myself how to utilize databases and have geared towards backend
            development.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
