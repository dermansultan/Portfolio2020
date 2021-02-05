import React, { useEffect, useState } from "react";
import ProjectDetails from "./CaseStudy/ProjectDetails";
import rumaBanner from "../Img/Ruma4k.png";
import ProjectHeader from "../Components/CaseStudy/ProjectHeader";
import ProjectQuote from "../Components/CaseStudy/ProjectQuote";
import ProjectParagraph from "../Components/CaseStudy/ProjectParagraph";
import ProjectTiles from "../Components/CaseStudy/ProjectTiles";
import timelineRuma from "../Img/caseStudies/Ruma/timelineRuma.png";
import ProjectImgCap from "../Components/CaseStudy/ProjectImgCap";
import { motion } from "framer-motion";
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
} from "./CaseStudy/CaseStudy-styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

//Create master Image module for img imports
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
          role={"UX/UI Design, Branding"}
          tools={"Invision, Adobe XD"}
          team={"Rohail Khan"}
          duration={"48 hours"}
        ></ProjectDetails>
        <Section>
          <Header>Background</Header>
          <BodyPara>
            "I took part in the Adobe x Netflix Creative Jam, a 48 hour online
            design challenge. My partner and I came up with our project Ruma.
            Ruma is a desktop app that aims to give families and friends a way
            to enjoy content together remotely."
          </BodyPara>
        </Section>
        <Section>
          <Header>Design Challenge</Header>
          <ProjectQuote text='"Design a third-party desktop web site or desktop app (not Netflix-branded) where the community can celebrate shared stories together through communal and authentic experiences."'></ProjectQuote>
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
          <img
            className="projectTimeline Ruma"
            alt="rumaTimeline"
            src={timelineRuma}
            onClick={() => {
              lightBoxHandler(timelineRuma, "This was a timeline!");
            }}
          ></img>
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
          <Header>Iteration: Concept</Header>
          <BodyPara>
            After considering the brief questions we started to iterate on ideas
            of the general app. We started with topics we wanted to address, and
            then moved onto features.
          </BodyPara>
          <WrapperCol>
            <WrapperCol row itemCenter margin={"5px 0 5px 0"}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: "4px" }}
              />
              <SubHeader>Feature:</SubHeader>
            </WrapperCol>
            <SubHeader blue>
              Create anticipation by scheduling parties
            </SubHeader>
            <SubHeader>Information Required</SubHeader>
            <List>
              <ListItem>Date, Time, Timezone</ListItem>
              <ListItem>User who scheduled</ListItem>
              <ListItem>Confirmation</ListItem>
            </List>
          </WrapperCol>
          <WrapperCol>
            <WrapperCol row itemCenter margin={"5px 0 5px 0"}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: "4px" }}
              />
              <SubHeader>Feature:</SubHeader>
            </WrapperCol>
            <SubHeader blue>Watching shared content</SubHeader>
            <SubHeader>Information Required</SubHeader>
            <List>
              <ListItem>Chat</ListItem>
              <ListItem>Audio/Video Call</ListItem>
              <ListItem>Playlist</ListItem>
              <ListItem>Invite Link</ListItem>
            </List>
          </WrapperCol>
          <WrapperCol>
            <WrapperCol row itemCenter margin={"5px 0 5px 0"}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: "4px" }}
              />
              <SubHeader>Feature:</SubHeader>
            </WrapperCol>
            <SubHeader blue>Engage in pre and post-event discussions</SubHeader>
            <SubHeader>Information Required</SubHeader>
            <List>
              <ListItem>Comments</ListItem>
              <ListItem>Name</ListItem>
              <ListItem>Time</ListItem>
            </List>
          </WrapperCol>
          <WrapperCol>
            <WrapperCol row itemCenter margin={"5px 0 5px 0"}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: "4px" }}
              />
              <SubHeader>Feature:</SubHeader>
            </WrapperCol>
            <SubHeader blue>Join watch parties in different communities</SubHeader>
            <SubHeader>Information Required</SubHeader>
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
          {/* <div className="projectImgContainer">
            <ProjectImgCap
              caption="Table breaking down features + content to be included 
"
              image={images[0].src}
              onClick={() => {
                lightBoxHandler(
                  images[1].src,
                  "Table breaking down features + content to be included"
                );
              }}
            ></ProjectImgCap>
            <ProjectImgCap
              caption="Starting with topics we wanted to address with Ruma
"
              image={images[1].src}
            ></ProjectImgCap>
          </div> */}
        </Section>
        <Section>
          <Header>Iteration: Wireframes and User Flows</Header>
          <BodyPara>
            We continued to break down the features during our wireframing
            process.
          </BodyPara>
          <div
            className="projectImgContainer"
            style={{ flexDirection: "column" }}
          >
            <ProjectImgCap
              caption="Sections and their belonging screens
"
              image={images[2].src}
            ></ProjectImgCap>
            <ProjectImgCap
              caption="Organizing each individual section and breaking down what to be included
"
              image={images[3].src}
            ></ProjectImgCap>
            <ProjectImgCap
              caption="Different iterations for each individual page. 
"
              image={images[4].src}
            ></ProjectImgCap>
            <ProjectParagraph
              text="Onboarding + Joining User Flow Wireframes
"
            ></ProjectParagraph>
            <ProjectImgCap
              caption="Onboarding + Joining User Flow Wireframes
"
              image={images[5].src}
            ></ProjectImgCap>
          </div>
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
          <ProjectHeader text="Styletile"></ProjectHeader>
          <img className="projectImg Single" src={images[7].src}></img>
        </div>
        <div
          className="projectSectionWrapper"
          style={{ paddingTop: "12px", width: "100%" }}
        >
          <ProjectHeader text="Prototype, Flow and Features"></ProjectHeader>
          <p className="paraProjects">
            Our final prototype for Ruma can be seen <span>here</span> or below
          </p>
          <div className="protoWrap">
            <iframe
              width="1280"
              height="720"
              src="https://xd.adobe.com/embed/5a675d5e-e5ab-47c2-92ab-ed169babdfd4-0f34/?fullscreen"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="projectSectionWrapper" style={{ paddingTop: "12px" }}>
          <ProjectHeader text="Ruma: Features"></ProjectHeader>
          <div className="projectFeatureWrapper">
            {/* <img alt="gif of feature to be here!"></img> */}
            <div className="featureTextWrapper">
              <h2 className="projectSubHeader">Watch Rooms</h2>
              <p className="paraProjects feature">
                Users are able to host watch rooms where they can invite their
                friends and family to enjoy content with them. In the watch
                rooms you can chat and setup a playlist of what the room will be
                streaming.
              </p>
            </div>
          </div>
          <div className="projectFeatureWrapper">
            {/* <img alt="gif of feature to be here!"></img> */}
            <div className="featureTextWrapper">
              <h2 className="projectSubHeader">Communities</h2>
              <p className="paraProjects feature">
                Users can join communities around the world on Ruma. These
                communities can range from genre interests, to specific shows or
                series. In a community users can engage in discussion with posts
                and can join watch rooms being hosted by users within the
                community.
              </p>
            </div>
          </div>
          <div className="projectFeatureWrapper">
            {/* <img alt="gif of feature to be here!"></img> */}
            <div className="featureTextWrapper">
              <h2 className="projectSubHeader">Discovery</h2>
              <p className="paraProjects feature">
                The discover tab lets users explore different communities they
                can join. Based on their interest communities are reccomended to
                them. Users also have the option to search to find communities
                based on their search terms.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="projectSectionWrapper" style={{ paddingTop: "12px" }}> */}
        <Section>
          <Header>Takeaways</Header>
          <SubHeader>What didn't work...</SubHeader>
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
          <SubHeader>Iterate, Iterate, Iterate</SubHeader>
          <BodyPara>
            I feel the back and forth between my partner and I was healthy. We
            were able to bounce ideas off one another with real criticisms.
            Although I feel as a duo we did this aspect well, during our
            iteration process we probably could have gone over more ideas. As we
            were pressed were time I believe this wasn't as much of a focus but
            it is something I definetly want to be able to do in future
            projects.
          </BodyPara>
          <SubHeader>Delegating</SubHeader>
          <BodyPara>
            Most groups had 3 members. Since there was a lot of work to do
            amongst just us two I feel as if we could've delegated individual
            tasks better. There were times where we both were working on a task
            that we probably could've left to one individual and vice-versa.
          </BodyPara>
        </Section>
        {/* <div className="deadspace" style={{ height: "900px" }}></div> */}
      </CaseContainer>
    </MainContainer>
  );
};

export default Ruma;
