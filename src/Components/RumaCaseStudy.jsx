import React, { useEffect, useState } from "react";
import ProjectDetails from "./CaseStudy/ProjectDetails";
import rumaBanner from "../Img/Ruma4k.png";
import ProjectHeader from "../Components/CaseStudy/ProjectHeader";
import ProjectQuote from "../Components/CaseStudy/ProjectQuote";
import ProjectTiles from "../Components/CaseStudy/ProjectTiles";
import timelineRuma from "../Img/caseStudies/Ruma/timelineRuma.png";
import { docTitleUpdate } from "./docTitleUpdate";
import { images, solutionArr } from "../Img/caseStudies/Ruma/image";
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
} from "./CaseStudy/CaseStudy-styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Ruma = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Ruma Case Study");
  });

  return (
    // <div className="mainContainer Ruma">
    <MainContainer>
      <CaseContainer
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Banner backImg={rumaBanner}></Banner>
        <ProjectDetails
          btnCol={"#1d66b9"}
          name={"Ruma"}
          role={"UX/UI Design, Branding"}
          tools={"Invision, Adobe XD"}
          team={"Rohail Khan"}
          namelist={["Rohail Khan"]}
          duration={"48 hours"}
          demoLink={
            "https://xd.adobe.com/view/5a675d5e-e5ab-47c2-92ab-ed169babdfd4-0f34/?fullscreen"
          }
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara margin={"20px 0 0 0"}>
            I took part in the Adobe x Netflix Creative Jam, a 48 hour online
            design challenge. My partner and I came up with our project Ruma.
            Ruma is a desktop app that aims to give families and friends a way
            to enjoy content together remotely.
          </BodyPara>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Challenge</Header>
          <ProjectQuote text="How might we create a platform for people to share experiences with contents like movie and tv shows?"></ProjectQuote>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Solution</Header>
          <WrapperCol row margin={"12px 0 0 0"}>
            <ProjectImg
              width={"60%"}
              margin={"30px 0 20px 0"}
              noBorder
              MobWidth={"100%"}
              src={images[9].src}
              onClick={() => {
                lightBoxHandler(images[9].src, "");
              }}
            />
            <WrapperCol
              alignSelf={"center"}
              margin={"0 0 0 40px"}
              MobMargin={"10% 0 0 0"}
              MobPadding={"0 0 0 0"}
            >
              <SubHeader>Watch Rooms</SubHeader>
              <BodyPara>
                Users are able to host watch rooms where they can invite their
                friends and family to enjoy content with them. In the watch
                rooms you can chat and setup a playlist of what the room will be
                streaming.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol row margin={"12px 0 0 0"} MobDirec={"column-reverse"}>
            <WrapperCol
              alignSelf={"center"}
              margin={"0 40px 0 0"}
              MobMargin={"10% 0 0 0"}
              MobPadding={"0 0 0 0"}
            >
              <SubHeader>Communities</SubHeader>
              <BodyPara>
                Users can join communities around the world on Ruma. These
                communities can range from genre interests, to specific shows or
                series. In a community users can engage in discussion with posts
                and can join watch rooms being hosted by users within the
                community.
              </BodyPara>
            </WrapperCol>
            <ProjectImg
                width={"60%"}
                margin={"30px 0 20px 0"}
                noBorder
                MobWidth={"100%"}
                src={images[13].src}
                onClick={() => {
                  lightBoxHandler(images[13].src, "");
                }}
              />
          </WrapperCol>
          <WrapperCol row margin={"12px 0 0 0"}>
            <ProjectImg
              width={"60%"}
              margin={"30px 0 20px 0"}
              noBorder
              MobWidth={"100%"}
              src={images[14].src}
              onClick={() => {
                lightBoxHandler(images[14].src, "");
              }}
            />
            <WrapperCol
              alignSelf={"center"}
              margin={"0 0 0 40px"}
              MobMargin={"10% 0 0 0"}
              MobPadding={"0 0 0 0"}
            >
              <SubHeader>Discovery</SubHeader>
              <BodyPara>
                The discover tab lets users explore different communities they
                can join. Based on their interest communities are reccomended to
                them. Users also have the option to search to find communities
                based on their search terms.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
        </Section>
        <Section>
          <Header>Project Timeline</Header>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"75%"}
            MobWidth={"135%"}
            single
            src={images[18].src}
            onClick={() => {
              lightBoxHandler(images[18].src, "");
            }}
          />
        </Section>
        <Section>
          <Header>Brainstorming</Header>
          <SubHeader margin={"20px 0 0 0"}>Audience and the Brief</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            With the short amount of time to create a prototype my partner and I
            researched existing applications that allowed users to share the
            watching experience. We looked into websites such as Watch2gether
            and third party browser plugins such as Netflix Party.
          </BodyPara>
          <BodyPara>
            For inspiration on the layout we looked upon current streaming
            platforms such as Netflix, Disney+ and Apple TV, and Amazon Prime
            Video. We wanted to make sure the experience we created would be
            familiar to users who are accustomed to streaming platforms
            interfaces.
          </BodyPara>
          <BodyPara>
            The brief given to us also included many different questions to
            consider, we did our best to address these within the ideation
            process of the application. These specifically were some questions
            from the brief that we had considered in our ideation process.
          </BodyPara>
        </Section>
        <ProjectImg
          single
          margin={"35px 0 25px 0"}
          width={"90%"}
          noBorder
          src={images[17].src}
          onClick={() => {
            lightBoxHandler(images[17].src, "");
          }}
        />
        <Section>
          <SubHeader>Final Concept</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            After considering the brief questions we started to iterate on ideas
            of the general app. We started with topics we wanted to address, and
            then moved onto features.
          </BodyPara>
          <BodyPara margin={"20px 0 0 0"}>
            Finalizing into three core features we wanted to focus our user
            experience on. The dashboard and rooms page was to be the base that
            would connect the concepts all together.
          </BodyPara>
        </Section>
        <ProjectImg
          single
          width={"90%"}
          margin={"30px 0 0 0"}
          noBorder
          src={images[12].src}
          onClick={() => {
            lightBoxHandler(images[12].src, "");
          }}
        />
        <Section>
          <Header>Wireframes</Header>
          <BodyPara margin={"20px 0 0 0"}>
            We went on to creating wireframes that fit our intended user
            journey. We made sure to keep an emphasis on visibility and
            organization. At a glance the user should be able to fully
            understand the context of the page they are on.
          </BodyPara>
          <ProjectImg
            margin={"20px 0 0 0"}
            single
            width={"85%"}
            margin={"30px 0 0 0"}
            noBorder
            src={images[15].src}
            onClick={() => {
              lightBoxHandler(images[15].src, "");
            }}
          />
        </Section>
        <div
          className="projectSectionWrapper"
          style={{
            paddingTop: "12px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ProjectHeader text="Moodboard"></ProjectHeader>
          <ProjectImg
            single
            width={"100%"}
            margin={"30px 0 0 0"}
            noBorder
            src={images[6].src}
          />
        </div>
        <div
          className="projectSectionWrapper"
          style={{
            paddingTop: "12px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Header>Design System</Header>
          <ProjectImg
            single
            width={"85%"}
            margin={"30px 0 0 0"}
            noBorder
            src={images[7].src}
            onClick={() => {
              lightBoxHandler(images[7].src, "");
            }}
          />
        </div>
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
            slowly realized we may have not fleshed this out as much as we
            should have. It's very simple to say this page will feature 'x'
            feature but until you deep dive and see how that feature fits in the
            overall app and layout you won't get a feel of its true gravity.
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

export default Ruma;
