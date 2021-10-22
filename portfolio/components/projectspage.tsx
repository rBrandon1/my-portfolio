import React from "react";
import clsx from "clsx";
import Projects from "../components/projects";

const ProjectsPage = () => {
  return (
    <div className="projects-page text-2xl">
      <div className="h">
        <div className="header text-4xl">Projects</div>
      </div>
      <div
        className={clsx("content", "overflow-hidden", "flex justify-center")}>
        <div>
          <div>
            <Projects
              projectsData={{
                title: "SNAX",
                description:
                  "Snax, the social snacking platform of the future. \
                    Snax is a cross-platform mobile app that serves to provide \
                    unbiased reviews on a huge number of snacks. Users can rate \
                    snacks using 8 carefully chosen criterias, each representing a \
                    different aspect of the snacking experience. This app was built in \
                    Flutter using the Dart programming language and leverages Firebase's Firestore \
                    and Cloud Functions to store and analyze data. Download the beta from \
                    @snaxappofficial on Instagram (iOS only at this time).",
                img: "/imgs/snax.png",
                link: "https://orifriesen.wixsite.com/mysite/snax",
              }}
            />
          </div>
          <div>
            <Projects
              projectsData={{
                title: "Optimum Weather Website",
                description:
                  "This is my weather webstie that may or may not be a bit broken 😬. It is usable,\
                    that is if you want to see the weather for a location different from your true location.\
                    Although it's not in the best shape, it allowed me to learn API's and page routing with Next.js.\
                    Maybe one day it'll get an overhaul 👀",
                img: "/imgs/optimum.png",
                link: "https://weather.brandnramirez.com/",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
