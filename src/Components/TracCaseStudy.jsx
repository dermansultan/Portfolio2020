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
import images from "../Img/caseStudies/Trac/image";

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
          name={"Trac"}
          btnCol={"#1DB954"}
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
          <BodyPara margin={"20px 0 0 0"}>
            With remote learning on the rise due to the ongoing COVID-19
            pandemic Trac is an application aimed at students with the goal of
            creating an intuitive platform that promotes{" "}
            <SpanPara>self-regulation</SpanPara> and{" "}
            <SpanPara>time management</SpanPara> amongst students.
          </BodyPara>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Challenge</Header>
          <ProjectQuote text="How might we develop a mobile application that helps students keep track of their course work and manage their time?"></ProjectQuote>
        </Section>
        <Section>
          <Header>Solution</Header>
          <BodyPara margin={"20px 0 0 0"}>
            <SpanPara>Trac</SpanPara> - a personal management application that
            helps students keep track of tasks, deadlines and facilitate
            planning of group work.
          </BodyPara>
        </Section>
        <Section>
          <Header>Design Process</Header>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            src={images[4].src}
          ></ProjectImg>
        </Section>
        <Section>
          <Header>Research</Header>
          <SubHeader margin={"20px 0 0 0"}>Interviews</SubHeader>
          <BodyPara>
            To be able to empathise with how students have been operating in the
            new e-learning environment we conducted nine user interviews from
            students in various university and college programs. We asked
            questions focusing on three main metrics.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"150%"}
            single
            src={images[14].src}
          />
          <SubHeader margin={"20px 0 0 0"}>Insights</SubHeader>
          <BodyPara>
            Participants of the research study expressed their problems with
            their e-learning experience. The greatest concerns were that
            students felt it was difficult to manage their time, had difficulty
            locating information across platforms and that they had to develop
            their own system to manage their course loads.{" "}
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"100%"}
            single
            src={images[3].src}
          />
        </Section>
        <Section>
          <Header>Design</Header>
          <SubHeader margin={"20px 0 0 0"}>Brainstorming</SubHeader>
          <BodyPara>
            After reviewing and gaining insights from our research we moved onto
            iterating over the features we would like in our application. This
            would range from deciding the intended user-flow, addressing key
            pain points from our insights, and finally a system map to base the
            flow on.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"150%"}
            single
            src={images[13].src}
          />
        </Section>
        <Section>
          <SubHeader>Wireframes</SubHeader>
          <BodyPara>
            Once we moved onto creating low fidelity wireframes we decided to
            prioritize the intended user flow. This consisted of onboarding, the
            dashboard, task creation and the calendar.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            src={images[12].src}
          ></ProjectImg>
        </Section>
        <Section>
          <Header>Design System</Header>
          <BodyPara margin={"20px 0 0 0"}>
            During this jam, I learned how to better allocate time. Before
            getting to the wireframing process we had iterated over a few
            different ideas of the concept of the app.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"100%"}
            single
            src={images[10].src}
          />
        </Section>
        <Section>
          <Header>High Fidelity Prototype</Header>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"100%"}
            single
            src={images[11].src}
          />
        </Section>
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 20px 0"}>Takeaways</Header>
          <SubHeader margin={"20px 0 0 0"}>What didn't work...</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            During this jam, I learned how to better allocate time. Before
            getting to the wireframing process we had iterated over a few
            different ideas of the concept of the app.
          </BodyPara>
          <BodyPara margin={"20px 0 0 0"}>
            One specific feature of the app 'Communities', felt like we didn't
            get enough time to flesh it out. We had understood what we wanted to
            include in them, but when it came to laying out that feature we
            slowly realized we may have no fleshed this out as much as we should
            have. It's very simple to say this page will feature 'x' feature but
            until you deep dive and see how that feature fits in the overall app
            and layout you won't get a feel of its true gravity.
          </BodyPara>
          <BodyPara margin={"20px 0 0 0"}>
            There were many features such as the settings page that due to this
            problem set us back as a group. In the future I will employ other
            brainstorming tools such as Affinity Mapping to get a concrete idea
            out the door.
          </BodyPara>
          <SubHeader margin={"20px 0 0 0"}>Iterate, Iterate, Iterate</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            I feel the back and forth between my partner and I was healthy. We
            were able to bounce ideas off one another with real criticisms.
            Although I feel as a duo we did this aspect well, during our
            iteration process we probably could have gone over more ideas. As we
            were pressed were time I believe this wasn't as much of a focus but
            it is something I definetly want to be able to do in future
            projects.
          </BodyPara>
          <SubHeader margin={"20px 0 0 0"}>Delegating</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            Most groups had 3 members. Since there was a lot of work to do
            amongst just us two I feel as if we could've delegated individual
            tasks better. There were times where we both were working on a task
            that we probably could've left to one individual and vice-versa.
          </BodyPara>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default Trac;
