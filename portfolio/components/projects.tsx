import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Icon } from "@iconify/react";

interface ProjectInfo {
  projectsData: {
    title: string;
    description: string;
    img?: string;
    link: string;
  };
}

const Projects = (props: ProjectInfo) => {
  const { title, description, img, link } = props.projectsData;

  return (
    <div className="projects">
      <div className={clsx("grid grid-cols-1 gap-8", "md:grid-cols-2")}>
        <div className="img">
          {img ? (
            <Image
              src={img!}
              alt="Damn, yo wifi slow"
              layout="fixed"
              width="320px"
              height="320px"
              objectFit="scale-down"
              quality={100}
            />
          ) : null}
        </div>
        <div>
          <div className="content-title">{title}</div>
          <div className="content-subtitle text-justify">{description}</div>
          <div style={{ paddingTop: "15px" }}>
            <button className="button hover:border-yellow-200">
              <a href={link} target="_blank" rel="noreferrer">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <span>Check it out!</span>
                  <span>
                    <Icon
                      icon="ci:external-link"
                      color="white"
                      width="25"
                      height="25"
                    />
                  </span>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
