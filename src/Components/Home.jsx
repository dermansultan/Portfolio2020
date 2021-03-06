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
import styled from "styled-components";
import landing from "../Img/landing.svg";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 125px;
  justify-content: center;
  background-color: #f9f8fd;
`;

const HomeContainer = styled.div`
  width: 90%;
  flex-direction: column;
  display: flex;
  align-items: center;
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
const GreetingMsg = styled.div``;

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
  font-weight: 400;
  font-size: clamp(50px, 3.25vw, 144px);
  line-height: 140%;
  white-space: nowrap;
  background: linear-gradient(180deg, #343434 0%, rgba(52, 52, 52, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  width: 30%;
  max-width: 475px;
  height: auto;
  @media only screen and (max-width: 900px) {
    width: 35%;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

const GreetingBio = styled.div`
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 5rem;
}
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
  background: linear-gradient(
    90deg,
    #1882ff 0%,
    rgba(24, 130, 255, 0.76) 103.03%
  );
  border-radius: 52px;
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(1.01);
  }
  @media only screen and (max-width: 769px) {
    margin: 34px 0 0 0;
    width: 100%;
    height: 50px;
    border-radius: 52px;
  }
`;

const intro = { delay: 0, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] };
const introType = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };
const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = () => {
  useEffect(() => {
    docTitleUpdate("| Home");
  });

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
                  My Work
                </Btn>
              </HashLink>
            </GreetingBio>
            <Landing src={landing} />
          </HeroContainer>
        </motion.div>
      </div>
      <div
        className="projectsContainer"
        id="projects"
        style={{
          backgroundColor: "#343434",
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflowX: "hidden",
          borderTop: "15px solid #1882FF",
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
          <Subheader>My Work</Subheader>
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
            projLink={"/Trac"}
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
            projLink={"/Ruma"}
          />
          <CaseCard
            title={"Coming Soon"}
            titleCol={"#252A41"}
            role={"UI / UX design"}
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
          />
        </div>
      </div>
    </>
  );
};

export default Home;
