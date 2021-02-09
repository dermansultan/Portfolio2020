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

const outro = { duration: 1.45, ease: [0.6, 0.01, -0.05, 0.9] };

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
          <BodyPara>
            I took part in the Adobe x Netflix Creative Jam, a 48 hour online
            design challenge. My partner and I came up with our project Ruma.
            Ruma is a desktop app that aims to give families and friends a way
            to enjoy content together remotely.
          </BodyPara>
        </Section>
        <Section>
          <Header>Challenge</Header>
          <ProjectQuote text="How might we create a platform for people to share experiences with contents like movie and tv shows?"></ProjectQuote>
        </Section>
        <Section>
          <Header>Solution</Header>
          <BodyPara>
            A web app that encourages users to explore other content based on
            their interests, and watch content amongst their loved ones.
          </BodyPara>
          <ProjectTiles
            lightBox={lightBoxHandler}
            images={solutionArr}
          ></ProjectTiles>
        </Section>
        <Section>
          <Header>Project Timeline</Header>
          <ProjectImg
            single
            margin={"35px 0 25px 0"}
            width={"70%"}
            noBorder
            src={timelineRuma}
            onClick={() => {
              lightBoxHandler(timelineRuma, "Timeline of project");
            }}
          />
        </Section>
        <Section>
          <Header>User Thinking: Audience and the Brief</Header>
          <BodyPara>
            With the short amount of time to create a prototype my partner and I
            researched existing applications that allowed users to share the
            watching experience. We looked into websites such as Watch2gether
            and third party browser plugins such as Netflix Party. For
            inspiration on the layout we looked upon current streaming platforms
            such as Netflix, Disney+ and Apple TV, and Amazon Prime Video. We
            wanted to make sure the experience we created would be familiar to
            users who are accustomed to streaming platforms interfaces. The
            brief given to us also included many different questions to
            consider, we did our best to address these within the ideation
            process of the application. These specifically were some questions
            from the brief that we had considered in our ideation process.
          </BodyPara>
        </Section>
        <div className="projectSectionWrapper RumaBvS">
          <div className="leftContainer">
            <h2 className="userThinking Brief">Brief</h2>
            <p className="paraProjects RumaBvS">
              Watch content with family remotely and privately.
            </p>
            <p className="paraProjects RumaBvS">
              Engage in realtime conversations before, during, or afterwards.
            </p>
            <p className="paraProjects RumaBvS">
              Create anticipation by scheduling watch parties and pre-event
              discussion.
            </p>
            <p className="paraProjects RumaBvS">
              Schedule and join small community and large worldwide watch
              parties.
            </p>
          </div>
          <div className="rightContainer">
            <h2 className="userThinking Solution">Ruma's Solution</h2>
            <p className="paraProjects RumaBvS">
              Users are able to setup their own private rooms where they can
              stream content with their family and friends.
            </p>
            <p className="paraProjects RumaBvS">
              Ruma's watch rooms include a live chat. This chat is also
              available before and after content is done being played.
            </p>
            <p className="paraProjects RumaBvS">
              Through the dashboard interface, users are able to see watch room
              status. Cards display if a room is closed, starting to watch soon
              or is currently watching content.
            </p>
            <p className="paraProjects RumaBvS">
              Ruma features user created communities which allow users to post
              and read discussions based on their media interest.
            </p>
          </div>
        </div>
        <Section>
          <Header>Iteration: Concept Exploration</Header>
          <BodyPara>
            After considering the brief questions we started to iterate on ideas
            of the general app. We started with topics we wanted to address, and
            then moved onto features.
          </BodyPara>
          <WrapperCol
            width={"100%"}
            row
            justCont={"space-around"}
            margin={"12px 0 0 0"}
          >
            <WrapperCol>
              <WrapperCol row itemCenter margin={"8px 0 8px 0"}>
                <IconWrapper>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{
                      marginRight: "4px",
                      color: "var(--main-txt-colour)",
                    }}
                  />
                  <SubHeader>Feature:</SubHeader>
                </IconWrapper>
              </WrapperCol>
              <SubHeader blue listSub>
                Create anticipation by scheduling parties
              </SubHeader>
              <SubHeader margin={"10px 0 10px 0"}>
                Information Required
              </SubHeader>
              <List>
                <ListItem>Date, Time, Timezone</ListItem>
                <ListItem>User who scheduled</ListItem>
                <ListItem>Confirmation</ListItem>
              </List>
            </WrapperCol>
            <WrapperCol>
              <WrapperCol row itemCenter margin={"8px 0 8px 0"}>
                <IconWrapper>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{
                      marginRight: "4px",
                      color: "var(--main-txt-colour)",
                    }}
                  />
                  <SubHeader>Feature:</SubHeader>
                </IconWrapper>
              </WrapperCol>
              <SubHeader blue listSub>
                Watching shared content
              </SubHeader>
              <SubHeader margin={"10px 0 10px 0"}>
                Information Required
              </SubHeader>
              <List>
                <ListItem>Chat</ListItem>
                <ListItem>Audio/Video Call</ListItem>
                <ListItem>Playlist</ListItem>
                <ListItem>Invite Link</ListItem>
              </List>
            </WrapperCol>
            <WrapperCol>
              <WrapperCol row itemCenter margin={"8px 0 8px 0"}>
                <IconWrapper>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{
                      marginRight: "4px",
                      color: "var(--main-txt-colour)",
                    }}
                  />
                  <SubHeader>Feature:</SubHeader>
                </IconWrapper>
              </WrapperCol>
              <SubHeader blue listSub>
                Engage in pre and post-event discussions
              </SubHeader>
              <SubHeader margin={"10px 0 10px 0"}>
                Information Required
              </SubHeader>
              <List>
                <ListItem>Comments</ListItem>
                <ListItem>Name</ListItem>
                <ListItem>Time</ListItem>
              </List>
            </WrapperCol>
            <WrapperCol>
              <WrapperCol row itemCenter margin={"8px 0 8px 0"}>
                <IconWrapper>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{
                      marginRight: "4px",
                      color: "var(--main-txt-colour)",
                    }}
                  />
                  <SubHeader>Feature:</SubHeader>
                </IconWrapper>
              </WrapperCol>
              <SubHeader blue listSub>
                Join watch parties in different communities
              </SubHeader>
              <SubHeader margin={"10px 0 10px 0"}>
                Information Required
              </SubHeader>
              <List>
                <ListItem>Genre</ListItem>
                <ListItem>Title</ListItem>
                <ListItem>Ability to share</ListItem>
                <ListItem>Ability to like</ListItem>
                <ListItem>Locations</ListItem>
                <ListItem>Description</ListItem>
                <ListItem>Timing for events</ListItem>
              </List>
            </WrapperCol>
          </WrapperCol>
        </Section>
        <Section>
          <Header>Iteration: Final Concept</Header>
          <BodyPara>
            We continued to break down the features during our wireframing
            process. Finalizing into three core features we wanted to focus our
            user experience on. The dashboard and rooms page was to be the base
            that would connect the concepts all together.
          </BodyPara>
          <ProjectImg
            single
            width={"90%"}
            margin={"30px 0 0 0"}
            noBorder
            src={images[12].src}
            onClick={() => {
              lightBoxHandler(images[12].src, "Timeline of project");
            }}
          />
        </Section>
        <Section>
          <Header>Wireframes</Header>
          <BodyPara>
            We went on to creating wireframes that fit our intended user
            journey. We made sure to keep an emphasis on visibility and
            organization. At a glance the user should be able to fully
            understand the context of the page they are on.
          </BodyPara>
          <ProjectImg
            single
            width={"85%"}
            margin={"30px 0 0 0"}
            noBorder
            src={images[15].src}
            onClick={() => {
              lightBoxHandler(images[15].src, "Wireframes");
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
          <img className="projectImg Single" src={images[6].src}></img>
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
          <img
            className="projectImg Single"
            src={images[7].src}
            onClick={() => {
              lightBoxHandler(images[7].src, "Design System");
            }}
          ></img>
        </div>
        <Section>
          <ProjectHeader text="Ruma: Features"></ProjectHeader>
          <WrapperCol row margin={"12px 0 0 0"}>
            <ProjectImg
              width={"60%"}
              margin={"30px 0 0 0"}
              noBorder
              src={images[9].src}
              onClick={() => {
                lightBoxHandler(images[9].src, "Watchroom");
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
          <WrapperCol row margin={"12px 0 0 0"}>
            <ProjectImg
              width={"60%"}
              margin={"30px 0 0 0"}
              noBorder
              src={images[13].src}
              onClick={() => {
                lightBoxHandler(images[13].src, "Community Page");
              }}
            />
            <WrapperCol
              alignSelf={"center"}
              margin={"0 0 0 40px"}
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
          </WrapperCol>
          <WrapperCol row margin={"12px 0 0 0"}>
            <ProjectImg
              width={"60%"}
              margin={"30px 0 0 0"}
              noBorder
              src={images[14].src}
              onClick={() => {
                lightBoxHandler(images[14].src, "Discovery");
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
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 12px 0"}>Takeaways</Header>
          <SubHeader margin={"12px 0 0 0"}>What didn't work...</SubHeader>
          <BodyPara>
            During this jam, I learned how to better allocate time. Before
            getting to the wireframing process we had iterated over a few
            different ideas of the concept of the app.
          </BodyPara>
          <BodyPara>
            One specific feature of the app 'Communities', felt like we didn't
            get enough time to flesh it out. We had understood what we wanted to
            include in them, but when it came to laying out that feature we
            slowly realized we may have no fleshed this out as much as we should
            have. It's very simple to say this page will feature 'x' feature but
            until you deep dive and see how that feature fits in the overall app
            and layout you won't get a feel of its true gravity.
          </BodyPara>
          <BodyPara>
            There were many features such as the settings page that due to this
            problem set us back as a group. In the future I will employ other
            brainstorming tools such as Affinity Mapping to get a concrete idea
            out the door.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>Iterate, Iterate, Iterate</SubHeader>
          <BodyPara>
            I feel the back and forth between my partner and I was healthy. We
            were able to bounce ideas off one another with real criticisms.
            Although I feel as a duo we did this aspect well, during our
            iteration process we probably could have gone over more ideas. As we
            were pressed were time I believe this wasn't as much of a focus but
            it is something I definetly want to be able to do in future
            projects.
          </BodyPara>
          <SubHeader margin={"12px 0 0 0"}>Delegating</SubHeader>
          <BodyPara>
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
