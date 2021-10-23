import type { NextPage } from "next";
import Head from "next/head";
import Typewriter from "typewriter-effect";

import SkillsPage from "../components/skillspage";
import ProjectsPage from "../components/projectspage";
import AboutMe from "../components/about";
import ContactMe from "../components/contact";
import GraphemeSplitter from "grapheme-splitter";

const stringSplitter = (string: string) => {
  const splitter = new GraphemeSplitter();
  const split: string[] = splitter.splitGraphemes(string);
  return split as unknown as string;
};

const Home: NextPage = () => {
  return (
    <div id="app" className="app text-3xl">
      <Head>
        <title>Brandon Ramirez</title>
        <link rel="icon" type="image/png" href="/imgs/rocket.png" />
        <meta property="og:description" content="Things about me" />
        <meta
          property="og:image"
          content="https://brandnramirez.com/imgs/webthumbnail.png"
        />
      </Head>
      <div className="landing-page">
        <div className="content">
          <div>
            <div className="title">
              <span className="first">Hey, I&apos;m </span>
              <span className="second">Brandon! 👋</span>
            </div>
            <div className="subtitle text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Student.",
                    "Developer?",
                    "Programmer?",
                    "Developer-Programmer 😎",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 700,
                  delay: 100,
                  stringSplitter,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SkillsPage />
      <ProjectsPage />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
