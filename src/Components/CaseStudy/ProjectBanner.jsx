import React from "react";

function ProjectBanner(props) {
  return (
    <div
      className="caseStudyBanner"
      style={{ backgroundImage: `url(${props.banner})` }}
    ></div>
  );
}

export default ProjectBanner;
