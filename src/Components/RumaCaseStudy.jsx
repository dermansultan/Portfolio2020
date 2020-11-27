import React from "react";
import ProjectDetails from "./CaseStudy/ProjectDetails";
import ProjectBanner from "./CaseStudy/ProjectBanner";
import rumaBanner from "../Img/Ruma4k.png";
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
      </div>
    </div>
  );
};

export default Ruma;
