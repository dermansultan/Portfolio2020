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

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

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
          btnCol={"#9072F5"}
          name={"Weather"}
          codeProject
          role={"Front-End Development"}
          tools={"Figma"}
          team={"Me 👋"}
          namelist={["Me 👋"]}
          duration={"48 hours"}
          demoLink={"https://github.com/dermansultan/WeatherApp"}
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara>
            Another front-end project. This time I set out to learn some React
            and work with some sort of API to handle data. I decided on using
            Open-Weather. This was my first time using a framework as well as
            recieving data from a server. I was able to learn{" "}
            <SpanPara>JSON Responses</SpanPara>, the{" "}
            <SpanPara>Fetch API</SpanPara>, and many different{" "}
            <SpanPara>React</SpanPara> quirks.
          </BodyPara>
        </Section>
        <Section>
          <Header>App Features</Header>
          <List margin={"20px 0 0 0"}>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              User can search location using geolocation API or manually search
              with Country/City
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              Toggle between fahrenheit and celsius
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              Data from OpenWeatherAPI
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              Displays location's Sunrise and Sunset time, Cloudiness, Humidity
              percent, Wind speed and Visibility
            </ListItem>
          </List>
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
              margin={"20px 0 0 0"}
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
            I learned to better visualize React{" "}
            <SpanPara>component structure</SpanPara> and then transfer it over
            in code. It was great to finally be able to map data to a component
            and see it stay up to date with State. I also messed a bit with
            conditional rendering.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>JSON Response</SubHeader>
          <BodyPara>
            I did a deep dive into JavaScript promises with You Don't Know JS,
            and learned as much as I could about the{" "}
            <SpanPara>Fetch API</SpanPara>. I was able to recieve the data
            needed for the users search and store it as an object in state.
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
