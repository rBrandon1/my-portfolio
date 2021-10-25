import React from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const ContactMe = () => {
  return (
    <div>
      <h1 className="h">
        <div className="header">Contact Me</div>
      </h1>
      <div className={clsx("content")}>
        <div className="contact">
          <div className={clsx("grid grid-cols-1 gap-16", "lg:grid-cols-3")}>
            <div className="contacts">
              <a
                href="https://github.com/rBrandon1"
                target="_blank"
                rel="noreferrer">
                <Icon
                  icon="akar-icons:github-fill"
                  color="rgba(253, 230, 138)"
                  width="50"
                  height="50"
                />
              </a>
              <div className="username">@rBrandon1</div>
            </div>
            <div className="contacts">
              <a
                href="https://www.linkedin.com/in/brandnramirez/"
                target="_blank"
                rel="noreferrer">
                <Icon
                  icon="bx:bxl-linkedin"
                  color="rgba(253, 230, 138)"
                  width="50"
                  height="50"
                />
              </a>
              <div className="username">@brandnramirez</div>
            </div>
            <div className="contacts">
              <a
                href="mailto:ramirezbrandon077@gmail.com"
                target="_blank"
                rel="noreferrer">
                <Icon
                  icon="carbon:email"
                  color="rgba(253, 230, 138)"
                  width="50"
                  height="50"
                />
              </a>
              <div className="username">ramirezbrandon077@gmail.com</div>
            </div>
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
