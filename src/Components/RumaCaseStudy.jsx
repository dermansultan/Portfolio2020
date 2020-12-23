import React from "react";
import ProjectDetails from "./CaseStudy/ProjectDetails";
import ProjectBanner from "./CaseStudy/ProjectBanner";
import rumaBanner from "../Img/Ruma4k.png";
import ProjectHeader from "../Components/CaseStudy/ProjectHeader"
import ProjectQuote from "../Components/CaseStudy/ProjectQuote"
import ProjectParagraph from "../Components/CaseStudy/ProjectParagraph"
import ProjectTiles from "../Components/CaseStudy/ProjectTiles"
import timelineRuma from "../Img/caseStudies/Ruma/timelineRuma.png"

const Ruma = () => {
  return (
    <div className="mainContainer Ruma">
      <div className="rumaContainer">
        <ProjectBanner banner={rumaBanner}></ProjectBanner>
        <ProjectDetails
          role={"UX/UI Design, Branding"}
          tools={"Invision, Adobe XD"}
          team={"Rohail Khan"}
          duration={"48 hours"}
        ></ProjectDetails>
        <div className='projectSectionWrapper'>
          <ProjectHeader text='Background'></ProjectHeader>
          <ProjectParagraph text='I took part in the Adobe x Netflix Creative Jam, a 48 hour online design challenge. My partner and I came up with our project Ruma. Ruma is a desktop app that aims to give families and friends a way to enjoy content together remotely.'></ProjectParagraph>
        </div>
        <div className='projectSectionWrapper' style={{paddingTop:"12px"}}>
          <ProjectHeader text='Design Challenge'></ProjectHeader>
          <ProjectQuote text='"Design a third-party desktop web site or desktop app (not Netflix-branded) where the community can celebrate shared stories together through communal and authentic experiences."'></ProjectQuote>
        </div>
        <div className='projectSectionWrapper' style={{paddingTop:"12px"}}>
          <ProjectHeader text='Solution'></ProjectHeader>
          <ProjectParagraph text='A web app that encourages users to  explore other content based on their interests, and watch content amongst their loved ones. '></ProjectParagraph>
          <ProjectTiles csTitle='Ruma'></ProjectTiles>
        </div>
        <div className='projectSectionWrapper' style={{paddingTop:"12px", display:"flex"}}>
        <ProjectHeader text='Project Timeline'></ProjectHeader>
        <img classname='projectTimeline Ruma'alt='rumaTimeline' src={timelineRuma}></img>
        </div>
        <div className='projectSectionWrapper' style={{paddingTop:"12px"}}>
          <ProjectHeader text='User Thinking: Audience and the Brief'></ProjectHeader>
          <ProjectParagraph text='With the short amount of time to create a prototype my partner and I researched existing applications that allowed users to share the watching experience. We looked into websites such as Watch2gether and third party browser plugins such as Netflix Party. 

For inspiration on the layout we looked upon current streaming platforms such as Netflix, Disney+ and Apple TV, and Amazon Prime Video. We wanted to make sure the experience we created would be familiar to users who are accustomed to streaming platforms interfaces.

The brief given to us also included many different questions to consider, we did our best to address these within the ideation process of the application. These specifically were some questions from the brief that we had considered in our ideation process. 
'></ProjectParagraph>
        </div>
        <div className='deadspace' style={{height:'900px'}}></div>
      </div>
    </div>
  );
};

export default Ruma;
