import ProjectDetails from "./CaseStudy/ProjectDetails";
import { docTitleUpdate } from "./docTitleUpdate";
import React, { useEffect } from "react";
import tracBanner from "../Img/Trac4k.png";
import ProjectQuote from "../Components/CaseStudy/ProjectQuote";
import { CaseContainer, Banner, BodyPara, Header, WrapperCol, Section, SubHeader, MainContainer, ListItem, List, IconWrapper, ProjectImg, SpanPara } from "./CaseStudy/CaseStudy-styling";
import images from "../Img/caseStudies/Trac/image";
import BackBtn from "./CaseStudy/BackToProjectsBtn";

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Trac = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Trac Case Study");
  });

  return (
    <MainContainer>
      <CaseContainer exit={{ opacity: 0 }} transition={outro} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Banner backImg={tracBanner}>
          <BackBtn margin={"25px 0 0 0"} btnCol={"#FFFFFF"} textColor="#505050" backArrow></BackBtn>
        </Banner>
        <ProjectDetails
          name={"Trac"}
          btnCol={"#1DB954"}
          role={"User Research"}
          tools={"Figma"}
          team={"Rohail Khan, Amelia Tziougras, Rowan Abraham, Spencer Black"}
          namelist={["Rohail Khan", "Amelia Tziougras", "Rowan Abraham", "Spencer Black"]}
          duration={"8 weeks"}
          demoLink={"https://www.figma.com/proto/UH5EO1vWdPOG8AbPfqGR7U/Trac-Prototype?node-id=0%3A1&viewport=575%2C935%2C0.1355305165052414&scaling=scale-down"}
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara margin={"20px 0 0 0"}>
            With remote learning on the rise due to the ongoing COVID-19 pandemic Trac is an application aimed at students with the goal of creating an intuitive platform that promotes{" "}
            <SpanPara>self-regulation</SpanPara> and <SpanPara>time management</SpanPara> amongst students.
          </BodyPara>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Challenge</Header>
          <ProjectQuote text="How might we develop a mobile application that helps students keep track of their course work and manage their time?"></ProjectQuote>
        </Section>
        <Section padding={"0 0 55px 0"}>
          <Header margin={"20px 0 0 0"}>Solution</Header>
          <BodyPara margin={"20px 0 0 0"}>
            <SpanPara>Trac</SpanPara> - a personal management application that helps students keep track of tasks, deadlines and facilitate planning of group work.
          </BodyPara>
          <WrapperCol row margin={"55px 0 0 0"}>
            <ProjectImg noBorder margin={"0 20px 0 0"} width={"30%"} MobWidth={"100%"} data={images[0].src} shadow borderRad={"12px"} />
            <WrapperCol alignSelf={"center"} margin={"0 0 0 10%"} MobMargin={"10% 0 0 0"} MobPadding={"0 0 0 0"}>
              <Header>Dashboard</Header>
              <BodyPara>Provides users with an an overview of their week. At a glance they are able to see upcoming deadlines and on going projects.</BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol row margin={"55px 0 0 0"} MobDirec={"column-reverse"}>
            <WrapperCol alignSelf={"center"} margin={"0 10% 0 0"} MobMargin={"10% 0 0 0"} MobPadding={"0 0 0 0"}>
              <Header>Calendar</Header>
              <BodyPara>Features all created tasks colour coded by the user in a monthly view.</BodyPara>
            </WrapperCol>
            <ProjectImg noBorder margin={"0 20px 0 0"} width={"30%"} MobWidth={"100%"} data={images[1].src} shadow borderRad={"12px"} />
          </WrapperCol>
          <WrapperCol row margin={"55px 0 0 0"}>
            <ProjectImg noBorder margin={"0 20px 0 0"} width={"30%"} MobWidth={"100%"} data={images[2].src} shadow borderRad={"12px"} />
            <WrapperCol alignSelf={"center"} margin={"0 0 0 10%"} MobMargin={"10% 0 0 0"} MobPadding={"0 0 0 0"}>
              <Header>Tasks</Header>
              <BodyPara>
                Tasks can be imported through the students e-learning platform or manually created by the student. To promote collaboration Trac tasks can also be shared with other students.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
        </Section>
        <Section>
          <Header>Design Process</Header>
          <ProjectImg
            onClick={() => {
              lightBoxHandler(images[4].src, "");
            }}
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            data={images[4].src}
          ></ProjectImg>
        </Section>
        <Section>
          <Header>Research</Header>
          <SubHeader margin={"20px 0 0 0"}>Interviews</SubHeader>
          <BodyPara>
            To be able to empathise with how students have been operating in the new e-learning environment we conducted nine user interviews from students in various university and college programs.
            We asked questions focusing on <SpanPara>three main metrics</SpanPara>.
          </BodyPara>
          <ProjectImg noBorder margin={"55px 0 0 0"} width={"75%"} MobWidth={"150%"} single data={images[14].src} />
          <SubHeader margin={"20px 0 0 0"}>Insights</SubHeader>
          <BodyPara>
            Participants of the research study expressed their problems with their e-learning experience. The greatest concerns were that students felt it was difficult to{" "}
            <SpanPara>manage their time</SpanPara>, <SpanPara>had difficulty locating information across platforms</SpanPara>, and that they had to{" "}
            <SpanPara>develop their own system to manage their course loads.</SpanPara>
          </BodyPara>
          <ProjectImg
            onClick={() => {
              lightBoxHandler(images[3].src, "");
            }}
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"100%"}
            single
            data={images[3].src}
          />
        </Section>
        <Section>
          <Header>Design</Header>
          <SubHeader margin={"20px 0 0 0"}>Brainstorming</SubHeader>
          <BodyPara>
            After reviewing and gaining insights from our research we moved onto iterating over the features we would like in our application. This would range from deciding the intended user-flow,
            addressing key pain points from our insights, and finally a system map to base the flow on.
          </BodyPara>
          <ProjectImg
            onClick={() => {
              lightBoxHandler(images[13].src, "");
            }}
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"150%"}
            single
            data={images[13].src}
          />
        </Section>
        <Section>
          <SubHeader>System Map</SubHeader>
          <BodyPara>With the user-flow in mind we created a system map to better visualize how our application would be structured.</BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            data={images[16].src}
            onClick={() => {
              lightBoxHandler(images[16].src, "");
            }}
          ></ProjectImg>
        </Section>
        <Section>
          <SubHeader>Wireframes</SubHeader>
          <BodyPara>
            Once we moved onto creating low fidelity wireframes we decided to prioritize the intended user flow. This consisted of onboarding, the dashboard, task creation and the calendar.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            data={images[12].src}
            onClick={() => {
              lightBoxHandler(images[12].src, "");
            }}
          ></ProjectImg>
        </Section>
        <Section>
          <Header>Design System</Header>
          <BodyPara margin={"20px 0 0 0"}>
            We wanted the design system behind the application to match modern interfaces students were accustomed to. The simple but clean identity ensures users are able to comprehend all
            interactions.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"100%"}
            single
            data={images[10].src}
            onClick={() => {
              lightBoxHandler(images[10].src, "");
            }}
          />
        </Section>
        <Section>
          <Header>High Fidelity Prototype</Header>
          <ProjectImg noBorder margin={"55px 0 0 0"} width={"75%"} MobWidth={"100%"} single data={images[11].src} />
        </Section>
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 20px 0"}>Takeaways</Header>
          <SubHeader margin={"20px 0 0 0"}>Being the listener</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            Conducting remote interviews really put me on the spot, but I was able to find my footing. I did my best to let conversations free-flow so I could gain unique insights from each of my
            interviews. Often I would get similar opinions but frustrations that varied. Each interview provided me with new perspectives that I could incorporate into our brain-storming.
          </BodyPara>
          <SubHeader margin={"20px 0 0 0"}>For next time</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            I would've liked to expand more on the feature set of collaboration amongst students. It was a reoccurring paint point that I felt we could've addressed better if we had more time.
          </BodyPara>
          <BackBtn margin={"55px 0 0 0"} btnCol={"#1DB954"}></BackBtn>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default Trac;
