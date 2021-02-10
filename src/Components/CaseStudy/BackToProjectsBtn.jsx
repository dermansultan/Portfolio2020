import styled from "styled-components";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Btn = styled.button`
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 700;
  background-color: ${(props) => props.btnCol};
  min-height: 50px;
  color: white;
  border-radius: 30px;
  width: 220px;
  cursor: pointer;
  margin:  ${(props) => props.margin};
  border: 0;

  @media only screen and (max-width: 600px) {
    min-height: 30px;
    width: 135px;
  }
`;

function BackBtn(props) {
  return (
    <HashLink smooth to="/#projects">
      <Btn margin={props.margin} btnCol={props.btnCol}>Back to My Projects</Btn>
    </HashLink>
  );
}

export default BackBtn;
