import ProjectDetails from "./CaseStudy/ProjectDetails";
import { docTitleUpdate } from "./docTitleUpdate";
import React, { useEffect } from "react";
import ghBanner from "../Img/goodehealth.jpg";
import ProjectQuote from "../Components/CaseStudy/ProjectQuote";
import { CaseContainer, Banner, BodyPara, Header, WrapperCol, Section, SubHeader, MainContainer, ListItem, List, IconWrapper, ProjectImg, SpanPara } from "./CaseStudy/CaseStudy-styling";
import images from "../Img/caseStudies/Trac/image";
import BackBtn from "./CaseStudy/BackToProjectsBtn";
import dashboard from "../Img/ghDashboard.jpg";
import timeline from "../Img/caseStudies/GoodeHealth/timeline.png";
import lumber from "../Img/caseStudies/GoodeHealth/lumber.png";
import gh from "../Img/caseStudies/GoodeHealth/gh.png";
import { ReactComponent as Search } from "../Img/caseStudies/GoodeHealth/search.svg";
import { ReactComponent as Members } from "../Img/caseStudies/GoodeHealth/members.svg";
import { ReactComponent as Analysis } from "../Img/caseStudies/GoodeHealth/analysis.svg";

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const GoodeHealth = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Trac Case Study");
  });

  return (
    <MainContainer>
      <CaseContainer exit={{ opacity: 0 }} transition={outro} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Banner backImg={ghBanner}>
          <BackBtn margin={"55px 0 0 0"} btnCol={"#FFFFFF"} textColor="#505050" backArrow></BackBtn>
        </Banner>
        <ProjectDetails
          name={"Trac"}
          role={"UX/UI Designer"}
          tools={"Figma"}
          team={"Lumber Team (+ Me) Goodehealth Team"}
          namelist={["Lumber Team (+ Me)", "Goodehealth Team"]}
          duration={"4 months"}
        ></ProjectDetails>
        <Section>
          <Header>Context</Header>
          <BodyPara margin={"20px 0 0 0"}>
            During Fall of 2021 I worked alongside the Lumber team to redevelop one of our client's (Goodehealth) applications. The agency would be responsible for porting over the existing product to
            a new tech stack, and an overhaul to the user experience.
          </BodyPara>
        </Section>
        <Section>
          <Header>Background</Header>
          <BodyPara margin={"20px 0 0 0"}>
            Goodehealth offers two main products. A blood test kit and a superfood blend to go with it. The blood test kit is sent off to a lab where through their application users can see in depth
            data about their health.
            <br /> <br />
            This data includes biomarkers and suggestions on how they can improve their health. These biomarkers offer a way for users to truly understand aspects of their health they need to focus on
            improving. <br /> <br />
            Goodehealth's main goal is to provide a personalized health experience that is approachable to a non health savvy audience. The application broad scope ranges from educating the user how
            to improve their health, recommending them purchases from their product lines and finally a way to visual the data the lab tests give to the users.
          </BodyPara>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Challenge</Header>
          <ProjectQuote text="How might we redevelop Goodhealth's current product to better reflect what users expect from a modern health application, as well as address current issues with the product?"></ProjectQuote>
        </Section>
        <Section padding={"0 0 30px 0"}>
          <Header margin={"20px 0 0 0"}>Solution</Header>
          <BodyPara margin={"20px 0 0 0"}>
            An overhaul of the Goodehealth dashboard experience. Here they can view their test kit results, manage their account and be recommended further steps to improve their overall health.
          </BodyPara>
          <WrapperCol row margin={"55px 0 0 0"}>
            <img src={dashboard} width="100%" />
          </WrapperCol>
          <Section margin="20px 0 0 0">
            <Header margin="0 0 30px 0">Timeline</Header>
            <img src={timeline} width="100%" />
          </Section>
          <Section margin="20px 0 0 0">
            <Header margin="0 0 30px 0">My Role</Header>
            <BodyPara>
              On this project I was tasked to help facilitate the design side of the redevelopment. I worked alongside both the Goodehealth, and Lumber team to communicate and collaborate on design. I
              lead the project's initial user experience redesign push.
              <br /> <br />I was to communicate and receive feedback on design decisions with the Goodehealth team. This would include weekly chats with their team to gain insights on their product
              goals, it's customers and their key performance indicators.
            </BodyPara>
            <WrapperCol margin="77px 0" row gap="100px">
              <img src={lumber} width="50%" />
              <img src={gh} width="50%" />
            </WrapperCol>
            <BodyPara>
              I would also collaborate with our own team's developers to ensure the design of the product was clearly understood. This was done through Design QA documents, and flow walkthrough calls.
              There were other stakeholders that were collaborated with throughout the process but these were the one’s I would deal with day to day.
              <br /> <br />
              Overall I would say my role was cross functional as I acted as the glue between the business side and engineering.
            </BodyPara>
          </Section>
        </Section>

        <Section>
          <Header>Research</Header>
          <BodyPara>
            Kicking off the redevelopment, the developers were to assigned recreate the backend with a new tech-stack. I won't go into the nitty gritty details of that because, after all this is a
            design case study.
            <br />
            <br />
            But during this phase calls with the developers better helped me contextualize the limitations we could face with aspects of the application. This helped me rationalize design choices I
            was going to make.
            <br />
            <br />
            Although In the end the developers were able to plan out a more modern stack that would aid our design efforts.
            <br />
            <br />
            <SpanPara>During this time, my team simultaneously would start the process of the redesign. The research process was informed as follows: </SpanPara>
          </BodyPara>
          <WrapperCol row gap="105px" margin="70px 0 0 100px">
            <Search style={{ width: "143px", minWidth: "143px" }} />
            <WrapperCol>
              <Header margin={"20px 0 0 0"}>Heuristic and usability evaluation on the current application.</Header>
              <BodyPara>
                The goal here was to identify glaring issues with clarity as health products can be overwhelming or confuse their less informed users. This would also gain us a few notes to keep in
                mind for when the design system was to be created.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <ul style={{ color: "#004061", fontWeight: 500, fontSize: "clamp(14px,1.5vw,18px)", listStylePosition: "inside", lineHeight: "162%" }}>
              <li>System status was not clear in many cases</li>
              <li>Language and labels revolving around scientific terms were vague and confusing</li>
              <li>Important information was behind many clicks</li>
              <li>Recommendations and Made For You pages felt generic and impersonalized</li>
              <li>Health Score Breakdown Logic was rounding numbers displaying less accurate information to the user</li>
              <li>Certain components weren’t clear (hyper links without any styling)</li>
            </ul>
          </WrapperCol>
          <WrapperCol row gap="105px" margin="70px 0 0 100px">
            <Members style={{ width: "183px", minWidth: "183px" }} />
            <WrapperCol>
              <Header margin={"20px 0 0 0"}>Calls directly with the Goodehealth team members.</Header>
              <BodyPara>
                Particularly their customer-facing and analytics employees. They would help us gain insights on specific issues customers were facing with the current application. For example: parts
                of the application that had high drop off rates, or customers conveying frustrations with the current subscription model. The goal here was to really understand user’s frustrations
                with the current product.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <ul style={{ color: "#004061", fontWeight: 500, fontSize: "clamp(14px,1.5vw,18px)", listStylePosition: "inside", lineHeight: "162%" }}>
              <li>Users had troubles managing their subscriptions </li>
              <li>Confusion revolving around the steps required to register a customers blood test kit for the first time</li>
              <li>Returning kit users also faced frustrations when trying to register a new kit</li>
            </ul>
          </WrapperCol>
          <WrapperCol row gap="105px" margin="70px 0 0 100px">
            <Analysis style={{ width: "113px", minWidth: "113px" }} />
            <WrapperCol>
              <Header margin={"20px 0 0 0"}>Competitor analysis to see what others in our similar niche were doing. </Header>
              <BodyPara>
                Goodehealth's product provided biomarkers and an overall score to its users. Getting a grasp of how this complicated data was visualized by other products helped us with our final
                product.
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <BodyPara margin="0 0 20px 0">While many aspects across competitors were repeated some unique features of note we considered were: </BodyPara>
            <ul style={{ color: "#004061", fontWeight: 500, fontSize: "clamp(14px,1.5vw,18px)", listStylePosition: "inside", lineHeight: "162%" }}>
              <li>Important trends displayed to the user within the same view of the score</li>
              <li>Individual biomarkers displayed with a broad approach with insight available upon further click</li>
              <li>Trends of Data points in terms of data visualization</li>
              <li>Individual data points on graphs can be interacted with</li>
              <li>Direct comparison between the two data points for individual markers</li>
            </ul>
          </WrapperCol>
          <BodyPara style={{ textAlign: "center", marginTop: "80px" }}>
            <SpanPara color="#004061">
              These together would help us focus down on problems that needed to be addressed from a design perspective.
              <br /> Our goals from this research ended up being:
            </SpanPara>
          </BodyPara>
          <div
            style={{
              width: "100vw",
              position: "relative",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              backgroundColor: "#F5F5F5",
              padding: "100px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul style={{ color: "#004061", fontWeight: 700, fontSize: "clamp(14px,1.5vw,23px)", lineHeight: "107%", maxWidth: "1160px" }}>
              <li style={{ marginBottom: "30px" }}>Restructuring certain redundant information through the app and making pages accessible and explorable</li>
              <li style={{ marginBottom: "30px" }}>Educate, and empower users to explore the product</li>
              <li style={{ marginBottom: "30px" }}>Bridge the gap between the physical aspect of the product and the digital (user gets the kit, must register it)</li>
              <li>Address Customer service side confusions</li>
            </ul>
          </div>
        </Section>
        <Section>
          <Header>Design</Header>
          <Header color="#595A4A" margin={"20px 0 0 0"}>
            Phase One
          </Header>
          <BodyPara>
            With this phase the goal was to create a low fidelity prototype of the mobile version of the application. We would eventually present this to the Goodehealth team for feedback. There were
            a number of considerations to be made as the application was an in browser experience.
          </BodyPara>
        </Section>
        <Section>
          <SubHeader color="#595A4A">Information Architecture</SubHeader>
          <BodyPara>
            Before considering wireframes, we focused on the structure of the app given it's current issues. Goodehealth's analytics team mentioned drop off of certain pages of the application was
            high. The old application was segmented into many different sections, and we wanted to recreate the experience to feel cohesive so that each section felt valuable to the end user.{" "}
          </BodyPara>
          <BodyPara>
            We ended up using a combination of mind-mapping and card sorting with our internal teams to create a structure. This structure eventually would take the form of a site map and user flow.
            We would regularly iterate and update these throughout our week to week calls with their team. During these calls we would learn more about the individual customers experience and the
            unique aspects of their product.
          </BodyPara>
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
          <BodyPara>
            Having a site map and a user flow may seemed kind of odd at first, but in our context it was the right decision. It was important we had an objective outlook of the entire applications
            structure for the developers to follow.
          </BodyPara>
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

export default GoodeHealth;
