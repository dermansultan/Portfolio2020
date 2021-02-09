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
import toDoBanner from "../Img/Todolist4k.png";
import images from "../Img/caseStudies/ToDo/image";

const outro = { duration: 1.45, ease: [0.6, 0.01, -0.05, 0.9] };

const ToDo = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Vanilla Js To-Do List");
  });

  return (
    <MainContainer>
      <CaseContainer
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Banner backImg={toDoBanner}></Banner>
        <ProjectDetails
          btnCol={"#46529D"}
          name={"ToDo"}
          codeProject
          role={"Front-End Development"}
          tools={"Figma"}
          team={"Me 👋"}
          duration={"Ongoing"}
          demoLink={"https://github.com/dermansultan/ToDoList"}
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara>
            This was my first go at creating a full on JavaScript 'application'.
            Before this I had only expiremented with coding applications that
            were narrow in scope such as a weight calculator or tic tac toe{" "}
            <SpanPara>(you can see those on my github!).</SpanPara> I set out to
            create a ToDoList with <SpanPara>Vanilla JavaScript</SpanPara> in
            hopes of learning a few new technologies.
          </BodyPara>
        </Section>
        <Section>
          <Header>App Features</Header>
          <List margin={"20px 0 0 0"}>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              User can create named 'projects' that are seperate to do lists
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              User can create, delete and update to do list items
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              To do list items feature, due date, priority level, title, and
              description
            </ListItem>
            <ListItem margin={"10px 0 0 0"} weight={"700"}>
              Filter tasks within projects by due date, and date added
            </ListItem>
          </List>
        </Section>
        <Section>
          <Header>First times...</Header>
          <BodyPara>
            Through this personal project I was able to learn quite a few useful
            skills. To save on bundle size I used <SpanPara>Webpack</SpanPara>{" "}
            for the very first time. This was quite the challenge as I had never
            used NPM or a bundler before. I was able to get Webpack up and
            running (through their amazing documentation page) , setting up
            scripts within my package.json, and configuring webpack to support
            plugins such as font and css loaders.
          </BodyPara>
          <BodyPara>
            I practiced <SpanPara>code-splitting</SpanPara> and had worked with an external module
            for the first time. Previously I had never seperated my code into
            seperate modules. As I wasn't relying on a JavaScript framework I
            had to split up my code into seperate modules since how 'manual' DOM
            manipulation can be. I used date-fns library to make formatting
            dates a little easier on the user side.
          </BodyPara>
          <BodyPara>
            I chose to keep all the user data within{" "}
            <SpanPara>local storage</SpanPara> as I intended for this project to
            be mainly practice. The users 'projects' fall under objects which
            contain tasklists arrays within them. Each task is an object that
            holds different key value pairs such as title, description, due date
            etc.
          </BodyPara>
        </Section>
        <Section>
          <Header>Wireframes</Header>
          <WrapperCol
            margin={"25px 0 0 0"}
            row
            itemCenter
            justCont={"space-between"}
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
            <ProjectImg
              shadow
              noBorder
              src={images[2].src}
              width={"20%"}
              MobWidth={"60%"}
            />
            <ProjectImg
              shadow
              noBorder
              src={images[3].src}
              width={"20%"}
              MobWidth={"60%"}
            />
          </WrapperCol>
        </Section>
        <Section>
          <Header>Design System</Header>
          <ProjectImg
            margin={"20px 0 0 0"}
            shadow
            single
            noBorder
            src={images[4].src}
            width={"70%"}
          />
        </Section>
        <Section>
          <Header>Final Prototype</Header>
          <WrapperCol
            margin={"25px 0 0 0"}
            row
            itemCenter
            justCont={"space-evenly"}
          >
            <ProjectImg
              shadow
              noBorder
              src={images[6].src}
              width={"20%"}
              MobWidth={"60%"}
            />
            <ProjectImg
              shadow
              noBorder
              src={images[7].src}
              width={"20%"}
              MobWidth={"60%"}
            />
          </WrapperCol>
        </Section>
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 12px 0"}>Takeaways</Header>
          <SubHeader margin={"12px 0 0 0"}>
            Vanilla JavaScript is great... but tedious
          </SubHeader>
          <BodyPara>
            Compared to today's frameworks using vanilla javascript felt tedious
            but rewarding. It really helped me solidify my understanding of the
            fundamentals. Creating functions that made div wrappers manually
            really helped me realize how fortunate we are to use the map method
            with React Components.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>Set out a plan</SubHeader>
          <BodyPara>
            This was my first code project where I had to plan out my
            application structure. After{" "}
            <SpanPara>(many scribbles in my notebook)</SpanPara> I planned out a
            structure for the to do objects to follow and went on to research
            Local Storage and libraries I could use in the project.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>For next time</SubHeader>
          <BodyPara>
            There is still a lot I would like to implement into this to do list.
            Storing the users list in Google Firebase or learning how to host
            and build out my own backend, or even dabbling with some css +
            promise based animations.
          </BodyPara>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default ToDo;
