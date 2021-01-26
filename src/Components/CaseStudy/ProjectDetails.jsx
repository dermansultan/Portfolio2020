import React from "react";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    align-items: center;
    padding-bottom: 40px;
  }
`;

const ProtoBtn = styled.button`
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 700;
  background-color: #1d66b9;
  min-height: 50px;
  color: white;
  border-radius: 30px;
  width: 200px;
  border: 0;

  @media only screen and (max-width: 600px) {
    min-height: 30px;
    width: 135px;
  }
`;

// Recreate with styled-component

function ProjectDetails(props) {
  return (
    <div className="projectDetailsWrapper">
      <a href={props.demoLink}>
        <button className="protoBtn">Live Prototype</button>
      </a>
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

export default ProjectDetails;
