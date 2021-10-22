import React from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const ContactMe = () => {
  return (
    <div>
      <div className="h">
        <div className="header">Contact Me</div>
      </div>
      <div className={clsx("content")}>
        <div className="contact">
          <div className={clsx("grid grid-cols-2 gap-32", "md:grid-cols-3")}>
            <a
              href="https://github.com/rBrandon1"
              target="_blank"
              rel="noreferrer">
              <Icon
                icon="akar-icons:github-fill"
                color="white"
                width="75"
                height="75"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/brandnramirez/"
              target="_blank"
              rel="noreferrer">
              <Icon
                icon="bx:bxl-linkedin"
                color="white"
                width="75"
                height="75"
              />
            </a>
            <a
              href="mailto:ramirezbrandon077@gmail.com"
              target="_blank"
              rel="noreferrer">
              <Icon icon="carbon:email" color="white" width="75" height="75" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer className="text-base">
          <div>© Brandon Ramirez 2021</div>
        </footer>
      </div>
    </div>
  );
};
export default ContactMe;
