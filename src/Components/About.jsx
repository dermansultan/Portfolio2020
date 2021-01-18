import React, { useEffect } from "react";
import dp from "../Img/dp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { docTitleUpdate } from "./docTitleUpdate";

const outro = { duration: 1.45, ease: [0.6, 0.01, -0.05, 0.9] };

const About = () => {
  useEffect(() => {
    docTitleUpdate("| 👋 About Me");
  });

  return (
    <div className="mainContainer About">
      <motion.div
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aboutContainer"
      >
        <img className="dp" src={dp} />
        <div className="aboutBio">
          <h1 className="aboutGreeting">
            {" "}
            <span>👋</span>Hello there.
          </h1>
          <p className="aboutPara">
            <span>An affinity for design and technology</span> - I love going
            out my way to find new ways to solve complex problems. I'm always
            challenging myself to learn the latest trends and technologies. I
            want to combine my passion for problem solving and design to craft
            meaningful user experiences.
          </p>
          <p className="aboutPara">
            I'm currently all about <span>Front End Development</span>. My
            journey started early in 2020. With no prior coding experience I
            became obsessed with JavaScript through expirementing with{" "}
            <span>FreeCodeCamp</span> and <span>TheOdinProject</span>. As of
            right now, I am messing around about with the <span>React</span>{" "}
            framework, (what this portfolio was made in!) learning more CSS
            techniques and about Accesibility on the Web.
          </p>
          <p className="aboutPara">
            I'm currently looking for new opportunities to learn more and expand
            my abilities. Have an opportunity for me? Get in touch with me
            below.
          </p>
          <div className="socialBtnWrapper">
            <a href="mailto:abdurrehmansultan4@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
            <a href="https://www.instagram.com/ixderman/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/derman-sultan/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/dermansultan" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
