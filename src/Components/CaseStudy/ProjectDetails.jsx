import React from "react";
import styled from "styled-components";
import { WrapperCol } from "./CaseStudy-styling";
import ReactGa from "react-ga";

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
  background-color: ${(props) => props.btnCol};
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

const DetailsTitle = styled.h1`
  color: var(--main-txt-colour);
  white-space: nowrap;
  font-weight: 500;
  font-size: clamp(10px, 1.5vw, 22px);
`;

const DetailsPara = styled.p`
  color: var(--second-txt-color);
  white-space: nowrap;
  font-size: clamp(8px, 1.5vw, 18px);
  word-break: break-all;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`;

// Recreate with styled-component

function ProjectDetails(props) {
  const gaClickHandler = (name) => {
    ReactGa.event({
      category: "Button",
      action: `${name} was project prototype was clicked`,
    });
    // console.log(`${name} was clicked!`);
  };

  if (props.codeProject) {
    return (
      <DetailsWrapper>
        <a href={props.demoLink} target="_blank">
          <ProtoBtn
            btnCol={props.btnCol}
            onClick={() => gaClickHandler(props.name)}
          >
            Demo + Live Code
          </ProtoBtn>
        </a>
        <ContentWrapper>
          <WrapperCol>
            <DetailsTitle>My Role</DetailsTitle>
            <DetailsPara>{props.role}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Tools</DetailsTitle>
            <DetailsPara>{props.tools}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Team</DetailsTitle>
            <DetailsPara>{props.team}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Duration</DetailsTitle>
            <DetailsPara>{props.duration}</DetailsPara>
          </WrapperCol>
        </ContentWrapper>
      </DetailsWrapper>
    );
  } else {
    return (
      <DetailsWrapper>
        <a href={props.demoLink} target="_blank">
          <ProtoBtn
            btnCol={props.btnCol}
            onClick={() => gaClickHandler(props.name)}
          >
            Live Prototype
          </ProtoBtn>
        </a>
        <ContentWrapper>
          <WrapperCol>
            <DetailsTitle>My Role</DetailsTitle>
            <DetailsPara>{props.role}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Tools</DetailsTitle>
            <DetailsPara>{props.tools}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Team</DetailsTitle>
            <DetailsPara>{props.team}</DetailsPara>
          </WrapperCol>
          <WrapperCol>
            <DetailsTitle>Duration</DetailsTitle>
            <DetailsPara>{props.duration}</DetailsPara>
          </WrapperCol>
        </ContentWrapper>
      </DetailsWrapper>
    );
  }
}

export default ProjectDetails;
