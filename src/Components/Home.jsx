import React, { useEffect } from "react";
import ConstructionSign from "./ConstructionSign";
import { motion } from "framer-motion";
import { docTitleUpdate } from "./docTitleUpdate";
import { Link } from "react-router-dom";
import CaseCard from "./Main/CaseCard";
import { HashLink } from "react-router-hash-link";
import ReactGa from "react-ga";
import trac from "../Img/caseStudies/Trac/trac.png";
import ruma2 from "../Img/caseStudies/Ruma/ruma2.png";
import ghbc from "../Img/caseStudies/GH/ghbc.png";

const intro = { delay: 1.75, duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };
const introType = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9] };
const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = () => {
  useEffect(() => {
    docTitleUpdate("| 🏠 Home ");
  });

  const gaClickHandler = (name) => {
    ReactGa.event({
      category: "Button",
      action: `${name}`,
    });
    // console.log(`${name} was clicked!`);
  };

  return (
    <div className="mainContainer">
      <div className="homeContainer">
        <div className="heroContainer">
          <div className="greetingBio">
            <motion.h1
              exit={{ opacity: 0, transition: { outro } }}
              transition={introType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="greetingMsg"
            >
              Hello there!
            </motion.h1>
            <motion.p
              exit={{ opacity: 0, transition: { outro } }}
              transition={intro}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="greetingPara"
            >
              I'm a {""}
              <span style={{ color: "#1D66B9", fontWeight: 500 }}>
                UX/UI Designer {""}
              </span>
              with a passion for creating elegant and intuitive experiences
              through
              <span style={{ color: "#1DB954", fontWeight: 500 }}>
                {" "}
                {""} Design {""}
              </span>
              and
              <span style={{ color: "#1D66B9", fontWeight: 500 }}>
                {" "}
                {""} Code
              </span>
              .
            </motion.p>
            <HashLink smooth to="/#projects">
              <motion.button
                onClick={() => gaClickHandler("My work was clicked.")}
                exit={{ opacity: 0, transition: { outro } }}
                transition={intro}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="protoBtn Home"
              >
                My Work
              </motion.button>
            </HashLink>
          </div>
        </div>
        <div
          className="projectsContainer"
          id="projects"
          style={{
            backgroundColor: "#343434",
            width: "100vw",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CaseCard
            title={"Trac"}
            titleCol={"#1882FF"}
            role={"UI / UX design"}
            roleCol={"#343434"}
            desc={
              "A personal management application that helps students keep track of tasks, deadlines and facilitate planning of group work."
            }
            descCol={"#646464"}
            img={trac}
            imgAlt={"Mockup of Trac Application"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#1882FF"}
            reverse={false}
            mainBackCol={"#FFFFFF"}
          />
          <CaseCard
            title={"Ruma"}
            titleCol={"#FFFFFF"}
            role={"UI / UX design"}
            roleCol={"#FFFFFF"}
            desc={
              "A desktop app that aims to give families and friends a way to enjoy content together remotely."
            }
            descCol={"#FFFFFF"}
            img={ruma2}
            imgAlt={"Mockup of Ruma Application"}
            btnColor={"#343434"}
            btnBackCol={"#FFFFFF"}
            reverse={true}
            mainBackCol={"#1882FF"}
          />
          <CaseCard
            title={"GH BootCamp"}
            titleCol={"#252A41"}
            role={"UI / UX design"}
            roleCol={"#343434"}
            desc={
              "A personal management application that helps students keep track of tasks, deadlines and facilitate planning of group work."
            }
            descCol={"#252A41"}
            img={ghbc}
            imgAlt={"Mockup of Game-Hero BootCamp Application"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#252A41"}
            reverse={false}
            mainBackCol={"#9CECFD"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
