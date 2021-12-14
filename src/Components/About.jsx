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
import { ReactComponent as Arrow } from "../Img/arrow.svg";

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
    text-decoration: underline;
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
  background-color: #eeeeee;
  width: 100%;
  border-radius: 20px;
  padding: 34px 10px;
  padding-left: 0;
  font-size: 24px;

  @media (max-width: 1920px) {
    font-size: 21px;
  }

  .emoji {
    margin: 0 39px 0 43px;
  }
  @media (max-width: 1440px) {
    padding: 24px 20px;
    font-size: 17px;

    .emoji {
      margin: 0 26px 0 23px;
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

const Social = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  #arrow {
    display: flex;
    margin-bottom: 50px;
    svg {
      margin-top: 15px;
      width: 229px;
    }
  }
  #arrow span {
    display: block;
    transform: rotate(-5deg);
    font-size: 64px;
    line-height: 115%;
    max-width: 290px;
    text-align: center;
    margin-right: 32px;
  }

  .icon {
    margin: 0;
    width: 75px;
    height: auto;
  }

  #icons {
    padding: 64px 80px;
    box-shadow: 4px 24px 60px rgba(109, 141, 173, 0.25);
    border-radius: 20px;
    display: flex;
    gap: 100px;
    background-color: white;
    position: relative;
    bottom: -60px;
    margin-left: 50px;
  }

  @media screen and ${device.smallDesktop} {
    #arrow span {
      font-size: 50px;
    }

    #arrow svg {
      width: 180px;
    }

    .icon {
      width: 50px;
    }

    #icons {
      padding: 54px 70px;
      gap: 60px;
    }
  }

  @media screen and ${device.smallLaptop} {
    #arrow span {
      font-size: 40px;
      max-width: 219px;
      margin-right: 0px;
    }

    #arrow svg {
      width: 160px;
    }

    .icon {
      width: 50px;
    }

    #icons {
      padding: 34px 60px;
      gap: 60px;
      bottom: -40px;
      margin-left: 30px;
    }
  }
  @media screen and ${device.tablet} {
    #arrow span {
      font-size: 30px;
      max-width: 200px;
      margin-right: 0px;
    }

    #arrow svg {
      width: 120px;
      margin-top: 0;
    }

    #arrow {
      margin-bottom: 20px;
    }

    .icon {
      width: 30px;
    }

    #icons {
      padding: 24px 40px;
      gap: 30px;
      bottom: -25px;
      margin-left: 20px;
    }

    @media screen and ${device.mobileTablet} {
      #arrow span {
        font-size: 20px;
        max-width: 130px;
      }
      #arrow svg {
        width: 90px;
        margin-top: -10px;
      }
    }

    @media screen and ${device.mobile} {
      #arrow span {
        font-size: 16px;
        max-width: 86px;
      }
      #arrow svg {
        display: none;
      }
      .icon {
        width: 20px;
      }

      #icons {
        padding: 14px 25px;
        gap: 20px;
        bottom: -25px;
        margin-left: 20px;
      }
    }
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
          <Header>I’m Derman!</Header>
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
            I’m always looking for new ways to learn more, and expand
            my abilities. Let's get connected below!
          </Para>
          <Social>
            <div id="arrow">
              <span style={{ fontFamily: "Indie Flower" }}>
                Let’s get in touch!
              </span>
              <Arrow />
            </div>
            <div id="icons">
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
          </Social>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
