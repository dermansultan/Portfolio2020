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
import { device } from "../theme";

const Header = styled.h2`
  font-family: DM Sans;
  white-space: nowrap;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 130%;
  font-size: 96px;
  color: #0051b0;

  @media screen and ${device.smallDesktop} {
    font-size: 70px;
  }

  @media screen and ${device.smallLaptop} {
    font-size: 54px;
  }
  @media screen and ${device.tablet} {
    font-size: 36px;
  }
`;

const SpanLink = styled.a`
  font-weight: ${(props) => props.fWeight};
  color: ${(props) => props.fColor};
  text-decoration: underline;
  &:hover {
    color: #0c468a;
  }
`;

const ParaSpan = styled.span`
  font-weight: 500;
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
  @media screen and (max-width: 340px) {
    display: none;
  }
`;

const Para = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
  color: #505050;
  font-size: 28px;

  @media screen and ${device.smallDesktop} {
    font-size: 24px;
  }

  @media screen and ${device.smallLaptop} {
    font-size: 18px;
  }
  @media screen and ${device.tablet} {
    font-size: 14px;
  }
`;

const Dp = styled.img`
  position: absolute;
  width: 627px;
  left: 0;
  top: 42%;
  border-radius: 20px;
  transform: translate(-35%, -50%);
  height: auto;
  @media only screen and (max-width: 900px) {
    align-self: center;
  }

  @media screen and ${device.smallDesktop} {
    width: 500px;
  }

  @media screen and ${device.smallLaptop} {
    width: 400px;
  }
  @media screen and ${device.tablet} {
    width: 200px;
  }
  @media only screen and (max-width: 689px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, -20%);
  }
`;

const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9fafa;
  width: 100%;
  border-radius: 20px;
  padding: 34px 10px;
  padding-left: 0;

  .emoji {
    margin: 0 39px 0 43px;
  }
  @media (max-width: 1440px) {
    padding: 24px 20px;

    .emoji {
      margin: 0 35px 0 35px;
    }
  }

  @media (max-width: 900px) {
    padding: 15px 15px;

    .emoji {
      margin: 0 15px 0 15px;
    }
  }
`;

const Spacer = styled.div`
  height: ${(props) => props.height[3]};
  @media screen and ${device.smallDesktop} {
    height: ${(props) => props.height[2]};
  }

  @media screen and ${device.smallLaptop} {
    height: ${(props) => props.height[1]};
  }
  @media screen and ${device.tablet} {
    height: ${(props) => props.height[0]};
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
        <div className="aboutBio">
          <Dp src={dp} />
          <Header>
            I’m Derman! <Wavespan>👋</Wavespan>
          </Header>
          <Spacer height={["10px", "20px", "41px", "81px"]}></Spacer>

          <Para>
            <ParaSpan>An affinity for design and technology</ParaSpan> - I love
            going out my way to find new ways to solve complex problems.
          </Para>
          <Spacer height={["21px", "31px", "41px", "81px"]}></Spacer>
          <Para>
            <PersonalInfo>
              <div className="emoji">🎓</div>Bachelor of Interaction Design at
              Sheridan College
            </PersonalInfo>
            <div style={{ marginTop: "37px" }}></div>
            <PersonalInfo>
              <div className="emoji">🍁</div>Currently based in Toronto, Canada
            </PersonalInfo>
          </Para>
          <Spacer height={["31px", "31px", "41px", "60px"]}></Spacer>

          <Para>
            You can currently find me working at{" "}
            <SpanLink
              href="https://lumber.dev/"
              target="_blank"
              rel="noreferrer"
              fColor={"#0051B0"}
              fWeight={"bold"}
            >
              Lumber
            </SpanLink>{" "}
            where I help our clients better understand and solve their user’s
            needs through design.
          </Para>
          <Spacer height={["20px", "30px", "40px", "50px"]}></Spacer>

          <Para>
            When I'm not messing around with design you can find me looking at
            corgi pictures on Instagram, reading (mostly non-fiction), or
            obsessing over the latest PC hardware.
          </Para>
          <Spacer height={["20px", "30px", "40px", "50px"]}></Spacer>

          <Para>
            I’m always looking for new opportunities to learn more, and expand
            my abilities.
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
