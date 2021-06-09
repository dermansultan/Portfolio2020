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
import ReactGa from "react-ga";
import styled from "styled-components";

const Header = styled.h2`
  font-family: DM Sans;
  white-space: nowrap;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 125px;
  font-size: clamp(46px, 4vw, 96px);
  color: #1882ff;
`;

const SpanLink = styled.a`
  font-weight: ${(props) => props.fWeight};
  color: ${(props) => props.fColor};
  border-bottom: 2.5px solid;
`;

const Wavespan = styled.span`
  white-space: nowrap;
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: 1; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
  padding-right: 15px;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Para = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  color: #343434;
  margin: 9px 0 9px 0;
  font-size: clamp(14px, 1.5vw, 18px);
`;

const Dp = styled.img`
  width: 100%;
  max-width: 374px;
  height: auto;
  @media only screen and (max-width: 900px) {
    align-self: center;
  }
`;

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const About = () => {
  useEffect(() => {
    docTitleUpdate("| 👋 About Me");
  });

  const gaClickHandler = (name) => {
    ReactGa.event({
      category: "Button",
      action: `${name}`,
    });
    // console.log(`${name} was clicked!`);
  };

  return (
    <div className="mainContainer About">
      <motion.div
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aboutContainer"
      >
        <Dp src={dp} />
        <div className="aboutBio">
          <Header>
            I’m Derman! <Wavespan>👋</Wavespan>
          </Header>
          <Para>
            An affinity for design and technology - I love going out my way to
            find new ways to solve complex problems. I want to combine my
            passion for problem solving and design to craft meaningful user
            experiences.
          </Para>
          <Para>
            I'm currently working as a UI/UX Designer at{" "}
            <SpanLink
              href="https://lumber.dev/"
              target="_blank"
              rel="noreferrer"
              fColor={"#1882FF"}
              fWeight={"bold"}
            >
              Lumber
            </SpanLink>
            , and in my left over time I volunteer as a Product Designer at{" "}
            <SpanLink
              href="https://mypalate.ca/"
              target="_blank"
              rel="noreferrer"
              fColor={"#1882FF"}
              fWeight={"bold"}
            >
              MyPalate
            </SpanLink>
            .
          </Para>
          <Para>
            You can find me reading medium articles on the latest trends,
            messing around with Figma plug-ins or creating something cool in
            React!
          </Para>
          <Para>
            When I'm not messing around with code or design you can find me
            looking at corgi pictures on Instagram, powerlifting (pre-pandemic),
            and obsessing over the latest PC hardware.
          </Para>
          <Para>
            I’m always looking for new opportunities to learn more, and expand
            my abilities. Have an opportunity for me? Get in touch with me
            below!
          </Para>
          <div className="socialBtnWrapper">
            <a href="mailto:abdurrehmansultan4@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                onClick={() => gaClickHandler("email was clicked")}
              />
            </a>
            <a href="https://www.instagram.com/ixderman/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon"
                onClick={() => gaClickHandler("IG was clicked")}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/derman-sultan/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
                onClick={() => gaClickHandler("LinkedIn was clicked")}
              />
            </a>
            <a href="https://github.com/dermansultan" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
                onClick={() => gaClickHandler("Github was clicked")}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
