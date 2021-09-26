import react, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const hover = keyframes`
  0% {
    transform: translateX(0px)
  }
  50% {
    transform: translateX(4px)
  }
  100% {
    transform: translateX(0px)

  }
`;
const hoverEffects = {
  rotate: "rotate(7deg)",
  scale: "scale(1.05)",
};

const Header = styled.h2`
  white-space: nowrap;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  font-size: 64px;
  line-height: 137%;
  color: ${(props) => props.titleCol};
  margin: 0 0 30px 0;
  @media only screen and (max-width: 769px) {
    align-self: center;
    margin: 0 0 0 0;
    width: 90%;
  }
`;

const Role = styled.p`
  border: 2px solid;
  padding: 2px 43px;
  border-radius: 26px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 137%;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  color: ${(props) => props.roleCol};
  margin: 0 0 0 0;
  @media only screen and (max-width: 769px) {
    align-self: center;
    margin: 12px 0 0 0;
    width: 90%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 200px 0 0 0;
  padding: ${(props) => (props.reverse ? "0 104px 0 26px" : "0 125px 0 103px")};
  width: 100%;
  max-width: 1420px;
  height: 600px;
  box-shadow: 4px 24px 60px rgba(109, 141, 173, 0.25);
  border-radius: 58px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  background-color: ${(props) => props.mainBackCol};
  :hover rect {
    transform: ${(props) => (props.hover ? hoverEffects[props.hover] : "none")};
  }
  @media only screen and (max-width: 769px) {
    width: 90%;
    height: 450px;
    flex-direction: column-reverse;
    margin: 55px 0 0 0;
    border-radius: 20px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  margin: 0 0 0 0;
  @media only screen and (max-width: 769px) {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    width: 100%;
  }
`;

const Btn = styled.button`
  --color: ${(props) => props.btnColor};
  --bg: ${(props) => props.btnBackCol};
  position: relative;
  overflow: hidden;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  align-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  justify-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  background-color: var(--bg);
  color: var(--color);
  border-radius: 26px;
  border: none;
  padding: 18px 0;
  width: 439px;
  margin: 30px 0 0 0;
  cursor: pointer;
  display: ${(props) => (props.construct ? "none" : "")};

  @media only screen and (max-width: 769px) {
    margin: 12px 0 0 0;
    width: 100%;
    height: 65px;
    border-radius: 15px;
  }

  transition: transform 0.2s; /* Animation */

  &:hover {
    svg {
      animation: ${hover} 1s ease infinite;
    }
  }
`;

const Desc = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  width: ${(props) => props.width};
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  font-size: 24px;
  line-height: 137%;
  color: ${(props) => props.descCol};
  margin: 30px 0 0 0;
  @media only screen and (max-width: 769px) {
    align-self: center;
    margin: 12px 0 0 0;
    width: 90%;
  }
`;

const CaseImg = styled.div`
  display: flex;
  align-items: center;
  rect {
    transform-origin: center;
    transition: 0.25s ease;
  }
`;

function CaseCard({
  title,
  titleCol,
  roles,
  roleCol,
  desc,
  descCol,
  btnColor,
  btnBackCol,
  mainBackCol,
  reverse,
  projLink,
  construct,
  vector,
  hover,
}) {
  const [transformEffect, setTransformEffect] = useState("none");
  return (
    <>
      <CardContainer hover={hover} reverse={reverse} mainBackCol={mainBackCol}>
        <Col width="50%" reverse={reverse}>
          <Header titleCol={titleCol} reverse={reverse}>
            {title}
          </Header>
          <div style={{ display: "flex", gap: "0 15px" }}>
            {roles.map((role) => (
              <Role roleCol={roleCol} reverse={reverse}>
                {role}
              </Role>
            ))}
          </div>
          <Desc descCol={descCol} reverse={reverse} width={"100%"}>
            {desc}
          </Desc>
          <Link to={projLink}>
            <Btn
              btnColor={btnColor}
              btnBackCol={btnBackCol}
              reverse={reverse}
              construct={construct}
            >
              View Case Study{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                style={{ marginLeft: "10px" }}
              />
            </Btn>
          </Link>
        </Col>
        <CaseImg>{vector}</CaseImg>
      </CardContainer>
    </>
  );
}

export default CaseCard;
