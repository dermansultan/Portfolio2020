import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { docTitleUpdate } from "./docTitleUpdate";
import CaseCard from "./Main/CaseCard";
import { HashLink } from "react-router-hash-link";
import ReactGa from "react-ga";
import styled, { keyframes } from "styled-components";
import landing from "../Img/landing.svg";
import { ReactComponent as Circle } from "../Img/dash-circle.svg";
import { ReactComponent as VertLine } from "../Img/vert-line.svg";
import { ReactComponent as HorizLine } from "../Img/horiz-line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as MyPalate } from "../Img/caseStudies/MyPalate/mypalate.svg";
import { ReactComponent as Trac } from "../Img/caseStudies/Trac/trac.svg";
import { ReactComponent as Ruma } from "../Img/caseStudies/Ruma/ruma.svg";
import { ReactComponent as Lumber } from "../Img/caseStudies/Lumber/lumber.svg";

const hover = keyframes`
  0% {
    transform: translateY(0px)
  }
  50% {
    transform: translateY(3px)
  }
  100% {
    transform: translateY(0px)

  }
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 6rem;
  }
`;

const Span = styled.span`
  font-weight: ${(props) => props.fWeight};
  color: ${(props) => props.fColor};
`;

const SpanLink = styled.a`
  font-weight: ${(props) => props.fWeight};
  color: ${(props) => props.fColor};
  border-bottom: 2.5px solid;
`;

const IntroPara = styled.p`
  margin: ${(props) => props.margin};
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  width: 85%;
  font-size: clamp(16px, 1vw, 48px);
  line-height: 175%;
  color: #343434;
  @media only screen and (max-width: 900px) {
    width: 95%;
  }
`;

const Header = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(50px, 3.25vw, 144px);
  line-height: 140%;
  white-space: nowrap;
  color: #363635;
`;

const Subheader = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(32px, 5vw, 64px);
  line-height: 135px;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 25px;
  color: white;
`;

const Landing = styled.img`
  width: 100%;
  z-index: 1;
  position: relative;
  opacity: 0;
  transform: scale(0.99);
  transition: 0.5s ease;
  transition-delay: 2.8s;
`;

const LandingContainer = styled.div`
  position: relative;
  width: 30%;
  max-width: 475px;
  height: auto;
  @media only screen and (max-width: 900px) {
    width: 35%;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
  .circle {
    width: 133%;
    height: 133%;
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transform-origin: top left;
    transition: transform 0.7s ease, opacity 0.25s ease;
    opacity: 0;
  }

  .vertLine,
  .horizLine {
    position: absolute;
    transform: translate(-50%, -50%);
    transition: clip-path 0.5s linear, opacity 0.25s ease;
    opacity: 0;
  }
  .vertLine {
    height: 133%;
    top: 47%;
    left: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition-delay: 1s;
  }
  .horizLine {
    width: 132%;
    top: 47%;
    left: 50%;
    transition-delay: 2s;
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }

  &.visible .vertLine,
  &.visible .horizLine,
  &.visible .circle {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transform: translate(-50%, -50%) scale(1);
  }

  &.visible img {
    opacity: 1;
    transform: none;
  }
`;

const GreetingBio = styled.div`
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 5rem;
  }
`;

const Btn = styled.button`
  margin: ${(props) => props.margin};
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: 31px;
  color: #ffffff;
  border: none;
  width: 300px;
  height: 55px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #1882ff 0%,
    rgba(24, 130, 255, 0.76) 103.03%
  );
  border-radius: 52px;
  transition: transform 0.2s; /* Animation */

  &:hover {
    svg {
      animation: ${hover} 1s ease infinite;
    }
  }
  @media only screen and (max-width: 769px) {
    margin: 34px 0 0 0;
    width: 100%;
    height: 50px;
    border-radius: 52px;
  }
`;

const intro = { delay: 0, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] };
const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    docTitleUpdate("| Home");
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  const gaClickHandler = (name) => {
    ReactGa.event({
      category: "Button",
      action: `${name}`,
    });
    // console.log(`${name} was clicked!`);
  };

  return (
    <>
      <div className="mainContainer">
        <motion.div
          exit={{ opacity: 0, transition: { outro } }}
          transition={intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="homeContainer"
        >
          <HeroContainer>
            <GreetingBio>
              <Header>Hello there.</Header>
              <IntroPara margin={"15px 0 0 0"}>
                I'm <Span fWeight={"bold"}>Derman Sultan</Span>, a{" "}
                <Span fColor={"#1882FF"} fWeight={"bold"}>
                  Product Designer
                </Span>{" "}
                with a passion for creating elegant and intuitive experiences
                through design and code. Currently I am working as a{" "}
                <Span fWeight={"bold"}>UI/UX Designer</Span> at{" "}
                <SpanLink
                  href="https://lumber.dev/"
                  target="_blank"
                  rel="noreferrer"
                  fColor={"#1882FF"}
                  fWeight={"bold"}
                >
                  Lumber
                </SpanLink>{" "}
                , and a <Span fWeight={"bold"}>Product Designer</Span> at{" "}
                <SpanLink
                  href="https://mypalate.ca/"
                  target="_blank"
                  rel="noreferrer"
                  fColor={"#1882FF"}
                  fWeight={"bold"}
                >
                  MyPalate
                </SpanLink>{" "}
              </IntroPara>
              <HashLink smooth to="/#projects">
                <Btn
                  margin={"55px 0 0 0"}
                  onClick={() => gaClickHandler("My work was clicked.")}
                >
                  My Work{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ marginLeft: "15px" }}
                  />
                </Btn>
              </HashLink>
            </GreetingBio>

            <LandingContainer className={isVisible ? "visible" : null}>
              <Landing src={landing} />
              <Circle className="circle" />
              <VertLine className="vertLine" />
              <HorizLine className="horizLine" />
            </LandingContainer>
          </HeroContainer>
        </motion.div>
      </div>
      <div
        className="projectsContainer"
        id="projects"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <CaseCard
            title={"Dashboard Redesign"}
            titleCol={"#124561"}
            roles={["UX Consulting", "Information Architecture"]}
            roleCol={"#505050"}
            desc={
              "An overhaul to a client of Lumber’s - Goodehealth’s original dashboard with the goal of increasing user retention and conversion."
            }
            descCol={"#505050"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#124561"}
            reverse
            mainBackCol={"#FFFFFF"}
            projLink={"/Trac"}
            vector={<Lumber style={{ marginLeft: "90px" }} />}
          />
          <CaseCard
            title={"MyPalate Inc."}
            titleCol={"#4E0BDC"}
            roles={["Research", "Design Systems"]}
            roleCol={"#4E0BDC"}
            desc={
              "Health and food based start-up. I had the pleasure of researching and creating a design system to use across web and mobile platforms."
            }
            descCol={"#505050"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#4E0BDC"}
            mainBackCol={"#FFFFFF"}
            projLink={"/MyPalate"}
            vector={<MyPalate />}
          />
          <CaseCard
            title={"Trac"}
            titleCol={"#0040C9"}
            roles={["UX/UI Design", "User Research"]}
            roleCol={"#2F62CE"}
            desc={
              "A personal management application that helps students keep track of tasks, deadlines and facilitate planning of group work."
            }
            descCol={"#505050"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#0040C9"}
            reverse
            mainBackCol={"#FFFFFF"}
            projLink={"/Trac"}
            vector={<Trac />}
            hover="rotate"
          />
          <CaseCard
            title={"Ruma"}
            titleCol={"#23514F"}
            roles={["UX/UI Design"]}
            roleCol={"#23514F"}
            desc={
              "A desktop app that aims to give families and friends a way to enjoy content together remotely."
            }
            descCol={"#505050"}
            imgAlt={"Mockup of Ruma Application"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#23514F"}
            mainBackCol={"#FFFFFF"}
            projLink={"/Ruma"}
            vector={<Ruma />}
            hover="scale"
          />
          {/* <CaseCard
            title={"Coming Soon"}
            titleCol={"#252A41"}
            roles={["UI / UX design"]}
            roleCol={"#343434"}
            desc={"Sit tight! This case study is under construction."}
            descCol={"#252A41"}
            img={ghbc}
            imgAlt={"Mockup of Game-Hero BootCamp Application"}
            btnColor={"#FFFFFF"}
            btnBackCol={"#252A41"}
            reverse={false}
            mainBackCol={"#9CECFD"}
            projLink={"/"}
            construct={true}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
