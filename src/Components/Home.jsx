import React, { useEffect } from "react";
import landingGraphic from "../Img/CodePenSquares.png";
import ConstructionSign from "./ConstructionSign";
import { motion } from "framer-motion";
import { docTitleUpdate } from "./docTitleUpdate"
import { Link } from "react-router-dom";

const intro = { delay: 1.75, duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };
const introType = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9] };
const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };


const Home = () => {

  useEffect(() => {
    docTitleUpdate('| 🏠 Home ')
   });

  return (
    <div className="mainContainer">
      <ConstructionSign></ConstructionSign>
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
              Derman.greeting();
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
            <motion.button
              exit={{ opacity: 0, transition: { outro } }}
              transition={intro}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="protoBtn Home"
            >
              My Work
            </motion.button>
          </div>
          <motion.img
            transition={intro}
            exit={{ opacity: 0, transition: { outro } }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="landingGraphic"
            src={landingGraphic}
          />
        </div>
        <div className="projectsContainer" id="projects">
          <h1 className="projectsHeader">Projects</h1>
          <div className="tilesContainer">
          <Link to="/Ruma" className="tileWrap Ruma">
            <motion.div whileHover={{ scale: 1.10 }} className="tileWrap Ruma">
              <p className="tileDesc">Ruma - Streaming App</p>
              <p className="tileDesc2">UI/UX | Design Challenge</p>
            </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.10 }} className="tileWrap GHBC">
              <p className="tileDesc">Game-Hero BootCamp - Mobile App </p>
              <p className="tileDesc2">UI/UX | Design Challenge</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.10 }} className="tileWrap ToDo">
              <p className="tileDesc">
                ToDoList - CRUD App (Vanilla Js + Local Storage)
              </p>
              <p className="tileDesc2">UI/UX | Front End Development</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.10 }} className="tileWrap Climate">
              <p className="tileDesc">Climate - Weather App </p>
              <p className="tileDesc2">UI/UX | Front End Development</p>
            </motion.div>
            {/* <div className='tileWrap'>
        <img alt='RumaLogoBanner' draggable='false' className='tile' src={rumaBanner}/>
        <p className='tileDesc'>This is a great test.</p>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
