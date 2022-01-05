import ProjectDetails from "./CaseStudy/ProjectDetails";
import { docTitleUpdate } from "./docTitleUpdate";
import React, { useEffect } from "react";
import ghBanner from "../Img/goodehealth.jpg";
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
import BackBtn from "./CaseStudy/BackToProjectsBtn";
import dashboard from "../Img/caseStudies/GoodeHealth/ghDashboard.jpg";
import timeline from "../Img/caseStudies/GoodeHealth/timeline.png";
import lumber from "../Img/caseStudies/GoodeHealth/lumber.png";
import gh from "../Img/caseStudies/GoodeHealth/gh.png";
import { ReactComponent as Search } from "../Img/caseStudies/GoodeHealth/search.svg";
import { ReactComponent as Members } from "../Img/caseStudies/GoodeHealth/members.svg";
import { ReactComponent as Analysis } from "../Img/caseStudies/GoodeHealth/analysis.svg";
import informationArchitecture from "../Img/caseStudies/GoodeHealth/information_architecture.jpg";
import informationArchitectureSVG from "../Img/caseStudies/GoodeHealth/information_architecture.svg";
import informationArchitecture2 from "../Img/caseStudies/GoodeHealth/information_architecture2.jpg";
import informationArchitectureSVG2 from "../Img/caseStudies/GoodeHealth/information_architecture2.svg";
import regFlow from "../Img/caseStudies/GoodeHealth/reg_flow.png";
import mainPages from "../Img/caseStudies/GoodeHealth/main_pages.png";
import features from "../Img/caseStudies/GoodeHealth/features.png";
import designSys from "../Img/caseStudies/GoodeHealth/designSys.jpg";
import subMang from "../Img/caseStudies/GoodeHealth/subMang.png";
import healthScore from "../Img/caseStudies/GoodeHealth/healthScore.png";
import bio from "../Img/caseStudies/GoodeHealth/bio.png";
import final from "../Img/caseStudies/GoodeHealth/final.jpg";

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const GoodeHealth = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| GoodeHealth Case Study");
  });

  return (
    <MainContainer>
      <CaseContainer
        exit={{ opacity: 0 }}
        transition={outro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Banner backImg={ghBanner} bgColor="#004061" mobSize="167%">
          <BackBtn
            margin={"25px 0 0 0"}
            btnCol={"#FFFFFF"}
            textColor="#505050"
            backArrow
          ></BackBtn>
        </Banner>
        <ProjectDetails
          name={"Trac"}
          role={"UX/UI Designer"}
          tools={"Figma"}
          team={"Lumber Team (+ Me) Goodehealth Team"}
          namelist={["Lumber Team (+ Me)", "Goodehealth Team"]}
          duration={"4 months (Ongoing)"}
          demoLink="https://app.goodehealth.com/"
          btnCol="#004061"
          codeProject
        ></ProjectDetails>
        <Section>
          <Header>Context</Header>
          <BodyPara margin={"20px 0 0 0"}>
            During Fall of 2021 I worked alongside the Lumber team to redevelop
            one of our client's (Goodehealth) applications.{" "}
            <strong>
              The agency would be responsible for porting over the existing
              product to a new tech stack, and an overhaul to the user
              experience.
            </strong>
          </BodyPara>
        </Section>
        <Section>
          <Header>Background</Header>
          <BodyPara margin={"20px 0 0 0"}>
            <strong>Goodehealth offers two main products.</strong> A blood test
            kit and a superfood blend to go with it. The blood test kit is sent
            off to a lab where through their application users can see in depth
            data about their health.
            <br /> <br />
            This data includes biomarkers and suggestions on how they can
            improve their health.{" "}
            <strong>
              These biomarkers offer a way for users to truly understand aspects
              of their health they need to focus on improving.
            </strong>{" "}
            <br /> <br />
            <strong>
              Goodehealth's main goal is to provide a personalized health
              experience that is approachable to a non health savvy audience.
            </strong>{" "}
            The application's broad scope ranges from educating the user how to
            improve their health, recommending them purchases from their product
            lines and finally a way to visualize the data the lab tests give to the
            users.
          </BodyPara>
        </Section>
        <Section>
          <Header margin={"0 0 20px 0"}>Challenge</Header>
          <ProjectQuote text="How might we redevelop Goodhealth's current product to better reflect what users expect from a modern health application, as well as address current issues with the product?"></ProjectQuote>
        </Section>
        <Section padding={"0 0 30px 0"}>
          <Header margin={"20px 0 0 0"}>Solution</Header>
          <BodyPara margin={"20px 0 0 0"}>
            <strong>
              An overhaul of the Goodehealth dashboard experience.
            </strong>{" "}
            Here they can view their test kit results, manage their account and
            be recommended further steps to improve their overall health.
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
              On this project I was tasked to help facilitate the design side of
              the redevelopment. I worked alongside both the Goodehealth, and
              Lumber team to communicate and collaborate on design.{" "}
              <strong>
                I led the project's initial user experience redesign push.
              </strong>
              <br /> <br />I was to communicate and receive feedback on design
              decisions with the Goodehealth team. This would include weekly
              chats with their team to gain insights on their product goals,
              it's customers and their key performance indicators.
            </BodyPara>
            <WrapperCol margin="77px 0" row gap="100px" MobMargin="20px 0">
              <img src={lumber} width="50%" />
              <img src={gh} width="50%" />
            </WrapperCol>
            <BodyPara>
              I would also collaborate with our own team's developers to ensure
              the design of the product was clearly understood. This was done
              through Design QA documents, and flow walkthrough calls. There
              were other stakeholders that were collaborated with throughout the
              process but these were the one’s I would deal with day to day.
              <br /> <br />
              <strong>
                Overall I would say my role was cross functional as I acted as
                the glue between the business side and engineering.
              </strong>
            </BodyPara>
          </Section>
        </Section>

        <Section>
          <Header>Research</Header>
          <BodyPara>
            Kicking off the redevelopment, the developers were to assigned
            recreate the backend with a new tech-stack. I won't go into the
            nitty gritty details of that because, after all this is a design
            case study.
            <br />
            <br />
            But during this phase, calls with the developers better helped me
            contextualize the limitations we could face with aspects of the
            application.{" "}
            <strong>
              This helped me rationalize design choices I was going to make.
            </strong>
            <br />
            <br />
            Although In the end the developers were able to plan out a more
            modern stack that would aid our design efforts.
            <br />
            <br />
            <SpanPara>
              During this time, my team simultaneously would start the process
              of the redesign. The research process was informed as follows:{" "}
            </SpanPara>
          </BodyPara>
          <WrapperCol row gap="105px" margin="70px 0 0 100px" MobMargin="0">
            <Search
              style={{ width: "143px", minWidth: "143px" }}
              class="mobileGraphic"
            />
            <WrapperCol>
              <Header margin={"20px 0 0 0"} textAlign="center">
                Heuristic and usability evaluation on the current application.
              </Header>
              <BodyPara>
                The goal here was to identify glaring issues with clarity as
                health products can be overwhelming or confuse their less
                informed users.{" "}
                <strong>
                  This would also gain us a few notes to keep in mind for when
                  the design system was to be created.
                </strong>
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px" MobMargin="30px 0 0 30px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <ul
              style={{
                color: "#004061",
                fontWeight: 500,
                fontSize: "clamp(14px,1.5vw,18px)",
                listStylePosition: "inside",
                lineHeight: "162%",
              }}
            >
              <li>System status was not clear in many cases</li>
              <li>
                Language and labels revolving around scientific terms were vague
                and confusing
              </li>
              <li>Important information was behind many clicks</li>
              <li>
                Recommendations and Made For You pages felt generic and
                impersonalized
              </li>
              <li>
                Health Score Breakdown Logic was rounding numbers displaying
                less accurate information to the user
              </li>
              <li>
                Certain components weren’t clear (hyper links without any
                styling)
              </li>
            </ul>
          </WrapperCol>
          <WrapperCol
            row
            gap="105px"
            margin="70px 0 0 100px"
            MobMargin="40px 0 0"
          >
            <Members
              style={{ width: "183px", minWidth: "183px" }}
              class="mobileGraphic"
            />
            <WrapperCol>
              <Header margin={"20px 0 0 0"} textAlign="center">
                Calls directly with the Goodehealth team members.
              </Header>
              <BodyPara>
                Particularly their customer-facing and analytics employees. They
                would help us gain insights on specific issues customers were
                facing with the current application. For example: parts of the
                application that had high drop off rates, or customers conveying
                frustrations with the current subscription model.{" "}
                <strong>
                  The goal here was to really understand user’s frustrations
                  with the current product.
                </strong>
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px" MobMargin="30px 0 0 30px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <ul
              style={{
                color: "#004061",
                fontWeight: 500,
                fontSize: "clamp(14px,1.5vw,18px)",
                listStylePosition: "inside",
                lineHeight: "162%",
              }}
            >
              <li>Users had troubles managing their subscriptions </li>
              <li>
                Confusion revolving around the steps required to register a
                customers blood test kit for the first time
              </li>
              <li>
                Returning kit users also faced frustrations when trying to
                register a new kit
              </li>
            </ul>
          </WrapperCol>
          <WrapperCol
            row
            gap="105px"
            margin="70px 0 0 100px"
            MobMargin="40px 0 0"
          >
            <Analysis
              style={{ width: "113px", minWidth: "113px" }}
              class="mobileGraphic"
            />
            <WrapperCol>
              <Header margin={"20px 0 0 0"} textAlign="center">
                Competitor analysis to see what others in our similar niche were
                doing.{" "}
              </Header>
              <BodyPara>
                Goodehealth's product provided biomarkers and an overall score
                to its users.{" "}
                <strong>
                  Getting a grasp of how this complicated data was visualized by
                  other products helped us with our final product.
                </strong>
              </BodyPara>
            </WrapperCol>
          </WrapperCol>
          <WrapperCol margin="70px 0 0 70px" MobMargin="30px 0 0 30px">
            <SubHeader color="#004061" margin="0 0 10px 0">
              Insights / Key takeaways:
            </SubHeader>
            <BodyPara margin="0 0 20px 0">
              While many aspects across competitors were repeated some unique
              features of note we considered were:{" "}
            </BodyPara>
            <ul
              style={{
                color: "#004061",
                fontWeight: 500,
                fontSize: "clamp(14px,1.5vw,18px)",
                listStylePosition: "inside",
                lineHeight: "162%",
              }}
            >
              <li>
                Important trends displayed to the user within the same view of
                the score
              </li>
              <li>
                Individual biomarkers displayed with a broad approach with
                insight available upon further click
              </li>
              <li>Trends of Data points in terms of data visualization</li>
              <li>Individual data points on graphs can be interacted with</li>
              <li>
                Direct comparison between the two data points for individual
                markers
              </li>
            </ul>
          </WrapperCol>
          <BodyPara style={{ textAlign: "center", marginTop: "80px" }}>
            <SpanPara color="#004061">
              These together would help us focus down on problems that needed to
              be addressed from a design perspective.
              <br /> Our goals from this research ended up being:
              <br />
              <br />
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
              padding: "100px 50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                color: "#004061",
                fontWeight: 700,
                fontSize: "clamp(14px,1.5vw,23px)",
                lineHeight: "107%",
                maxWidth: "1160px",
              }}
            >
              <li style={{ marginBottom: "30px" }}>
                Restructuring certain redundant information through the app and
                making pages accessible and explorable
              </li>
              <li style={{ marginBottom: "30px" }}>
                Educate, and empower users to explore the product
              </li>
              <li style={{ marginBottom: "30px" }}>
                Bridge the gap between the physical aspect of the product and
                the digital (user gets the kit, must register it)
              </li>
              <li>Address Customer service side confusions</li>
            </ul>
          </div>
        </Section>
        <Section>
          <Header>Design</Header>
          <SubHeader color="#595A4A" margin={"20px 0 0 0"}>
            Phase One
          </SubHeader>
          <BodyPara>
            With this phase the goal was to create a low fidelity prototype of
            the mobile version of the application. We would eventually present
            this to the Goodehealth team for feedback. There were a number of
            considerations to be made as the application was an in browser
            experience.
          </BodyPara>
        </Section>
        <Section>
          <SubHeader color="#595A4A">Information Architecture</SubHeader>
          <BodyPara margin="0 0 80px">
            Before considering wireframes, we focused on the structure of the
            app given it's current issues.{" "}
            <strong>
              Goodehealth's analytics team mentioned drop off of certain pages
              of the application was high. The old application was segmented
              into many different sections, and we wanted to recreate the
              experience to feel cohesive so that each section felt valuable to
              the end user.
            </strong>
          </BodyPara>
          <BodyPara margin="0 0 80px">
            We ended up using a combination of mind-mapping and card sorting
            with our internal teams to create a structure. This structure
            eventually would take the form of a site map and user flow. We would
            regularly iterate and update these throughout our week to week calls
            with their team. During these calls we would learn more about the
            individual customers experience and the unique aspects of their
            product.
          </BodyPara>
          <BodyPara>
            We took the raw aspects and data that were currently in the
            application. We then categorized them on their utility. Here we
            focused mainly on nouns and verbs represented by what the action or
            thing would fall under.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"150%"}
            MobWidth={"100%"}
            single
            data={informationArchitectureSVG}
            onClick={() => {
              lightBoxHandler(informationArchitectureSVG, "");
            }}
          ></ProjectImg>
          <BodyPara margin="150px 0 10px">
            Once we had a structure going of the data we then further organized
            it into the final structure that would be made into the site map.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"130%"}
            MobWidth={"100%"}
            single
            data={informationArchitectureSVG2}
            onClick={() => {
              lightBoxHandler(informationArchitectureSVG2, "");
            }}
          ></ProjectImg>
          <BodyPara margin="70px 0 30px">
            This structure would help inform the site map which would bridge the
            gap between visualizing the overall product and the application we
            were working on. Taking a bigger picture approach helped us really
            understand the client’s business and goals.{" "}
            <strong>
              It was important to understand that the E-commerce shopify site
              was also part of their ecosystem.
            </strong>
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"150%"}
            MobWidth={"100%"}
            single
            data={informationArchitecture}
            onClick={() => {
              lightBoxHandler(informationArchitecture, "");
            }}
          ></ProjectImg>
          <BodyPara margin="30px 0 0">
            Having a site map and a user flow may seemed kind of odd at first,
            but in our context it was the right decision.{" "}
            <strong>
              It was important we had an objective outlook of the entire
              applications structure for the developers to follow.
            </strong>
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 0 0"}
            width={"150%"}
            MobWidth={"100%"}
            single
            data={informationArchitecture2}
            onClick={() => {
              lightBoxHandler(informationArchitecture2, "");
            }}
          ></ProjectImg>
          <BodyPara margin="30px 0 0">
            Goodehealth's product has a physical part to it (the blood test kit,
            and the super food blend.) These in application translate to users
            having access to some features others may not.{" "}
            <strong>
              This specific quirk better visualizes itself in a user flow
              diagram.
            </strong>
          </BodyPara>
        </Section>
        <Section>
          <SubHeader color="#595A4A">Low Fidelity Wireframes</SubHeader>
          <BodyPara>
            After finalizing how the application would be structured with their
            team we moved onto creating the layout and features of the pages.
            Once again from the analytics team a key point was that majority of
            their traffic was on mobile. Something that the previous application
            neglected to take into consideration.
            <br /> <br />
            The low fidelity wireframes would receive a lot of feedback through
            our back and forth with their team. Through this we were eventually
            able to land on a low fidelity wireframe prototype that satisfied
            their needs.
          </BodyPara>
          <SubHeader color="#595A4A" listSub margin="30px 0 0">
            Registration Flow
          </SubHeader>
          <ProjectImg
            noBorder
            margin={"55px 0 30px 0"}
            width={"100%%"}
            MobWidth={"100%"}
            single
            data={regFlow}
            onClick={() => {
              lightBoxHandler(regFlow, "");
            }}
          ></ProjectImg>
          <SubHeader color="#595A4A" listSub margin="30px 0 0">
            Main Pages
          </SubHeader>
          <ProjectImg
            noBorder
            margin={"55px 0 30px 0"}
            width={"100%%"}
            MobWidth={"100%"}
            single
            data={mainPages}
            onClick={() => {
              lightBoxHandler(mainPages, "");
            }}
          ></ProjectImg>
          <SubHeader color="#595A4A" listSub margin="30px 0 0">
            User Subscription Management Flow
          </SubHeader>
          <BodyPara margin="0 0 123px" MobWidth="0 0 50px">
            Goodehealth's product mainly falls under a subscription model. Their
            subscription based products use Shopify's and its associated
            plug-ins. Knowing that there maybe limitations, I contacted the
            developers to get a specific view on what we could offer the user.
            <br /> <br />
            <strong>
              Goals with the design were that we would replicate the current
              features offered, while broadening the actions available to the
              user.
            </strong>
          </BodyPara>
          <WrapperCol row>
            <div>
              <SubHeader color="#595A4A">Features List</SubHeader>
              <BodyPara fontWeight="500" margin="0 15px 0 0">
                <strong>Subscription:</strong>
                <br />
                Cancel subscription
                <br />
                Activate subscription
                <br />
                Change subscription interval
                <br />
                Skip a subscription cycle
                <br />
                <br />
                <strong>Products</strong>
                <br />
                Swap product variant
                <br />
                Add onetime products to next charge
                <br />
                <br />
                <strong>Payment Details</strong>
                <br />
                Change address
                <br />
                Change next charge date
              </BodyPara>
            </div>
            <ProjectImg
              noBorder
              width={"79%"}
              MobWidth={"100%"}
              MobMargin="20px 0 0"
              single
              data={features}
              onClick={() => {
                lightBoxHandler(features, "");
              }}
            ></ProjectImg>
          </WrapperCol>
        </Section>
        <Section>
          <SubHeader color="#595A4A">Phase Two:</SubHeader>
          <SubHeader color="#595A4A" margin="40px 0 28px">
            Design System
          </SubHeader>
          <BodyPara>
            It was here where our team would set out to create a design system.
            This was mainly handled by my design team member YP with feedback
            based on various teams members such as developers, myself and some of
            the Goodehealth team. She created a sleek modern design system that
            matched modern day health applications while tying in aspects of
            their own branding.
            <br />
            <br />
            This system would help us easily iterate upon any pages or features
            that were missed in the original design planning phase. We also
            wanted to offer the developers a few pointers within the system. We
            included grid systems, components, modals, and much more with
            annotated captions.
            <br /> <br />
            During this phase we also were able to create concrete design
            components that were more ambiguous during the low fidelity
            wireframe stage. One thing we wanted to nail was navigation.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 28px"}
            width={"150%"}
            MobWidth={"100%"}
            single
            data={designSys}
            onClick={() => {
              lightBoxHandler(designSys, "");
            }}
          />
          <BodyPara>
            Navigation can be a bit challenging on a browser application as
            different mobile devices allow for different allowances to the top
            bar. We ended up with a bar that would follow the user and hide
            itself when not interacted with.
          </BodyPara>
          <SubHeader color="#595A4A" margin="40px 0 28px">
            Feedback
          </SubHeader>
          <BodyPara>
            It was here where we also got in touch with the developers to make
            sure our "score" design would translate well into how they were
            implementing the logic on the code side.
            <br /> <br />
            We consulted with the Goodehealth team, presenting a high fidelity
            prototype to them. From here we got some feedback that helped us
            align on the logic of the score. We had lengthy calls with them
            explaining the nuances of each individual biomarker and their
            sections. It was nice to get a health professionals feedback and
            input on this design, as it was something I wasn’t totally educated
            on. We implemented these changes easily thanks to the design system.
          </BodyPara>
          <SubHeader color="#595A4A" margin="40px 0">
            Original vs Redesigns
          </SubHeader>
          <SubHeader color="#595A4A" margin="0 0 30px">
            Subscription Management
          </SubHeader>
          <BodyPara>
            The subscription management flow was a part of the overall redesign
            that I had personal impact on.{" "}
            <strong>
              The original design had a lot of glaring issues from a usability
              stand point.
            </strong>
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 28px"}
            width={"100%"}
            MobWidth={"100%"}
            single
            data={subMang}
            onClick={() => {
              lightBoxHandler(subMang, "");
            }}
          />
          <SubHeader color="#595A4A" margin="0 0 30px">
            Health Score
          </SubHeader>
          <ProjectImg
            noBorder
            margin={"35px 0 60px"}
            width={"100%"}
            MobWidth={"100%"}
            single
            data={healthScore}
            onClick={() => {
              lightBoxHandler(healthScore, "");
            }}
          />
          <SubHeader color="#595A4A" margin="0 0 30px">
            Biomarker Trends Visualization
          </SubHeader>
          <ProjectImg
            noBorder
            margin={"35px 0 28px"}
            width={"90%"}
            MobWidth={"100%"}
            single
            data={bio}
            onClick={() => {
              lightBoxHandler(bio, "");
            }}
          />
        </Section>
        <Section>
          <Header margin="0 0 20px">Final Application Designs</Header>
          <BodyPara margin="0 0 30px">
            In the end there were many flows mapped out in our Figma document.
            The product is fully designed and ready to ship.
          </BodyPara>
          <ProjectImg
            noBorder
            margin={"55px 0 90px 0"}
            MobMargin="20px 0 0px 0"
            width={"168%"}
            MobWidth={"100%"}
            single
            data={final}
          />
        </Section>
        <Section padding={"0 0 90px 0"} margin={"40px 0 0 0"}>
          <Header margin={"0 0 20px 0"}>Takeaways</Header>
          <SubHeader margin={"20px 0 0 0"}>Constraints</SubHeader>
          <BodyPara margin={"20px 0 0 0"}>
            There were some limitations during this design process.{" "}
            <strong>
              One being that since this was a complete overhaul of their
              application the timeline was a bit tight in my opinion.
            </strong>{" "}
            Personally I would've liked a few extra weeks for the initial design
            phase to hammer out some issues that were eventually solved in phase
            2. This was totally expected as we're not a large team, and that we
            had a deadline to reach.
            <br />
            <br />
            Having a tight timeline was also the reason we weren't able to
            conduct usability testing in the wild. As we are still working with
            the Goodehealth team and the product is freshly launched.{" "}
            <strong>
              I hope to reaffirm the design decisions we made in the process in
              the future (with usability testing), as the next piece of the
              puzzle will be their ecommerce site.
            </strong>
            <br /> <br />
            That being said I personally learned I should voice my opinion more
            during design sprints. Especially if I feel as if we needed more
            time.
            <br />
            <br />
            Overall I was very satisfied with the final product we were able to
            deliver. I learned a lot in terms of what to take into consideration
            when designing for the web. Working with a solid team of developers
            that had great communication. I was able to bug them about specifics
            and always get a detailed and informative answer.
          </BodyPara>

          <BackBtn margin={"55px 0 0 0"} btnCol={"#004161"}></BackBtn>
        </Section>
      </CaseContainer>
    </MainContainer>
  );
};

export default GoodeHealth;
