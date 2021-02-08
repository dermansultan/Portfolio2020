import ProjectDetails from "./CaseStudy/ProjectDetails";
import { docTitleUpdate } from "./docTitleUpdate";
import React, { useEffect } from "react";
import tracBanner from "../Img/Trac4k.png";
import ProjectQuote from "../Components/CaseStudy/ProjectQuote";
import {
  CaseContainer,
  Banner,
  BodyPara,
  Header,
  WrapperCol,
  Section,
  SubHeader,
  MainContainer,
  ListItem,
  List,
  IconWrapper,
  ProjectImg,
  SpanPara,
} from "./CaseStudy/CaseStudy-styling";

const outro = { duration: 1.45, ease: [0.6, 0.01, -0.05, 0.9] };

const Trac = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Trac Case Study");
  });

  return (
    <MainContainer>
      <CaseContainer
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Banner backImg={tracBanner}></Banner>
        <ProjectDetails
          role={"User Research"}
          tools={"Figma"}
          team={"Rohail Khan"}
          duration={"8 weeks"}
          demoLink={
            "https://www.figma.com/proto/UH5EO1vWdPOG8AbPfqGR7U/Trac-Prototype?node-id=0%3A1&viewport=575%2C935%2C0.1355305165052414&scaling=scale-down"
          }
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara>
            With remote learning on the rise due to the ongoing COVID-19
            pandemic Trac is an application aimed at students with the goal of
            creating an intuitive platform that promotes self-regulation and
            time management amongst students.
          </BodyPara>
        </Section>
        <Section>
          <Header>Challenge</Header>
          <ProjectQuote text="How might we develop a mobile application that helps students keep track of their course work and manage their time?"></ProjectQuote>
        </Section>
        <Section>
          <Header>Solution</Header>
          <BodyPara>
            Trac - a personal management application that helps students keep
            track of tasks, deadlines and facilitate planning of group work.
          </BodyPara>
        </Section>
        <Section>
          <Header>Design Process</Header>
        </Section>
        <Section>
          <Header>Research</Header>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default Trac;
