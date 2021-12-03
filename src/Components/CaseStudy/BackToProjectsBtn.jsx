import styled from "styled-components";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Arrow } from "../../Img/back-arrow.svg";

const Btn = styled.button`
  font-size: ${(props) => (props.arrow ? "14px" : "clamp(14px, 1.5vw, 18px)")};
  font-weight: 700;
  background-color: ${(props) => props.btnCol};
  min-height: ${(props) => (props.arrow ? "39px" : "50px")};
  color: ${(props) => props.textColor || "white"};
  border-radius: ${(props) => (props.arrow ? "90px" : "30px")};
  width: auto;
  padding: ${(props) => (props.arrow ? "0 35px 0 20px" : "0 20px")};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => props.margin};
  border: 0;
  margin-left: ${(props) => (props.arrow ? "97px" : 0)};

  svg {
    margin-right: 17px;
    height: 10px;
    path {
      stroke-width: 6px;
    }
  }

  @media only screen and (max-width: 600px) {
    min-height: 50px;
    width: auto;
    margin: ${(props) => props.arrow && "26px 0 0 10px"};
    font-size: ${(props) => props.arrow && "18px"};
    min-height: ${(props) => props.arrow && "40px"};

    svg {
      height: 18px;
    }
  }
`;

function BackBtn(props) {
  return (
    <HashLink smooth to="/#projects" style={{ height: "max-content" }}>
      <Btn margin={props.margin} btnCol={props.btnCol} arrow={props.backArrow} textColor={props.textColor}>
        {props.backArrow && <Arrow />}Back to My Projects
      </Btn>
    </HashLink>
  );
}

export default BackBtn;
