import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``

// Recreate with styled-component

function ProjectDetails(props) {
  return (
    <div className="projectDetailsWrapper">
      <a href={props.demoLink}><button className="protoBtn">Live Prototype</button></a>
      <div className="projectDetails">
        <div className="details">
          <p className="deTitle">My Role</p>
          <p className="deSub">{props.role}</p>
        </div>
        <div className="details">
          <p className="deTitle">Tools</p>
          <p className="deSub">{props.tools}</p>
        </div>
        <div className="details">
          <p className="deTitle">Team</p>
          <p className="deSub">{props.team}</p>
        </div>
        <div className="details">
          <p className="deTitle">Duration</p>
          <p className="deSub">{props.duration}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails
