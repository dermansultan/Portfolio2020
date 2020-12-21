import React from "react";
import ProjectDetails from "./CaseStudy/ProjectDetails";
import ProjectBanner from "./CaseStudy/ProjectBanner";
import rumaBanner from "../Img/Ruma4k.png";
import ProjectHeader from "../Components/CaseStudy/ProjectHeader"
import ProjectQuote from "../Components/CaseStudy/ProjectQuote"
import ProjectParagraph from "../Components/CaseStudy/ProjectParagraph"

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
        </div>
        <div className='deadspace' style={{height:'900px'}}></div>
      </div>
    </div>
  );
};

export default Ruma;
