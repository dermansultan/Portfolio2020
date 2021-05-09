import React, { useEffect } from "react";
import ConstructionSign from "./ConstructionSign";
import { motion } from "framer-motion";
import { docTitleUpdate } from "./docTitleUpdate";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactGa from "react-ga";

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
        <div className="projectsContainer" id="projects">
          <h1 className="projectsHeader">Projects</h1>
          <div className="tilesContainer">
            <Link to="/Trac" className="tileWrap Trac">
              <motion.div
                className="tileWrap Trac"
                whileHover={{ scale: 1.05 }}
                onClick={() => gaClickHandler("Trac was clicked into.")}
              >
                <p className="tileDesc dark">Trac - Mobile App </p>
                <p className="tileDesc2 dark">UI/UX | Design Challenge</p>
              </motion.div>
            </Link>
            <Link to="/Ruma" className="tileWrap Ruma">
              <motion.div
                className="tileWrap Ruma"
                whileHover={{ scale: 1.05 }}
                onClick={() => gaClickHandler("Ruma was clicked into.")}
              >
                <p className="tileDesc">Ruma - Streaming App</p>
                <p className="tileDesc2">UI/UX | Design Challenge</p>
              </motion.div>
            </Link>
            {/* <Link to="/ToDo" className="tileWrap ToDo"> */}
            <motion.div
              className="tileWrap"
              onClick={() => gaClickHandler("ToDo was clicked into.")}
            >
              <p className="tileDesc">🚧 Under Construction</p>
              <p className="tileDesc2">Case Study </p>
            </motion.div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
