import ProjectDetails from "./CaseStudy/ProjectDetails";
import { docTitleUpdate } from "./docTitleUpdate";
import React, { useEffect } from "react";
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
import climateBanner from "../Img/Climate4k.png";
import images from "../Img/caseStudies/Weather/image";

const outro = { duration: 1.45, ease: [0.6, 0.01, -0.05, 0.9] };

const Weather = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Climate - React Weather App");
  });

  return (
    <MainContainer>
      <CaseContainer
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Banner backImg={climateBanner}></Banner>
        <ProjectDetails
          codeProject
          role={"Front-End Development , UX Design"}
          tools={"Figma"}
          team={"Me 👋"}
          duration={"48 hours"}
          demoLink={"https://github.com/dermansultan/WeatherApp"}
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara>
            Another front-end project. This time I set out to learn some React
            and work with some sort of API to handle data. I decided on using
            Open-Weather. This was my first time using a framework as well as
            recieving data from a server. I was able to learn JSON Responses,
            the Fetch API, and many different React quirks.
          </BodyPara>
        </Section>
        <Section>
          <Header>Wireframes and Final Prototype</Header>
          <WrapperCol
            margin={"25px 0 0 0"}
            row
            itemCenter
            justCont={"space-evenly"}
            width={"100%"}
          >
            <ProjectImg
              shadow
              noBorder
              src={images[0].src}
              width={"20%"}
              MobWidth={"60%"}
            />
            <ProjectImg
              shadow
              noBorder
              src={images[1].src}
              width={"20%"}
              MobWidth={"60%"}
            />
          </WrapperCol>
          <ProjectImg
            margin={"40px 0 0 0"}
            single
            shadow
            noBorder
            src={images[2].src}
            width={"50%"}
            MobWidth={"60%"}
          />
        </Section>
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 12px 0"}>Takeaways</Header>
          <SubHeader margin={"12px 0 0 0"}>React Goodies</SubHeader>
          <BodyPara>
            I learned to better visualize React component structure and then
            transfer it over in code. It was great to finally be able to map
            data to a component and see it stay up to date with State. I also
            messed a bit with conditional rendering.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>JSON Response</SubHeader>
          <BodyPara>
            I did a deep dive into JavaScript promises with You Don't Know JS,
            and learned as much as I could about the Fetch API. I was able to
            recieve the data needed for the users search and store it as an
            object in state.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>For next time</SubHeader>
          <BodyPara>
            React is cool! Since this project I've delved deeper into the React
            family messing around with hooks and styled-components. I'm hoping
            to dive into more projects with React in the future.
          </BodyPara>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default Weather;
