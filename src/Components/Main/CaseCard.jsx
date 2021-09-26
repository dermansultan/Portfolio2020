import react, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { device } from "../../theme";

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
  font-size: clamp(24px, 4vw, 64px);
  line-height: 137%;
  color: ${(props) => props.titleCol};
  margin: 0 0 30px 0;
  @media screen and ${device.mobile} {
    margin-bottom: 20px;
  }
`;

const Role = styled.p`
  border: 2px solid;
  padding: 2px clamp(10px, 2.5vw, 43px);
  border-radius: 26px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(16px, 1.5vw, 24px);
  line-height: 137%;
  margin: ${(props) => (props.reverse ? "0 0 0 auto" : "0 auto 0 0")};
  color: ${(props) => props.roleCol};
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
  @media screen and ${device.tablet} {
    padding: ${(props) => (props.reverse ? "0 50px 0 16px" : "0 50px 0 50px")};
    gap: 20px;
    height: 500px;
  }

  @media screen and ${device.mobileTablet} {
    flex-direction: column-reverse;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 50px 50px;
    margin: 100px 0 0 0;
    :first-of-type {
      margin: 30px 0 0 0;
    }
  }
  @media screen and ${device.mobile} {
    padding: 30px;
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
  @media screen and ${device.mobileTablet} {
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
  font-size: clamp(18px, 1.7vw, 24px);
  align-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  justify-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  background-color: var(--bg);
  color: var(--color);
  border-radius: 26px;
  border: none;
  padding: 18px 0;
  width: 22vw;
  min-width: 230px;
  max-width: 439px;
  margin: 30px 0 0 0;
  cursor: pointer;
  display: ${(props) => (props.construct ? "none" : "")};

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
  font-size: clamp(16px, 1.5vw, 24px);
  line-height: 137%;
  color: ${(props) => props.descCol};
  margin: 30px 0 0 0;
  @media screen and ${device.mobileTablet} {
    max-width: 600px;
  }
  @media screen and ${device.mobile} {
    margin-top: 10px;
  }
`;

const CaseImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (!props.reverse ? "flex-end" : "flex-start")};
  width: 50%;
  rect {
    transform-origin: center;
    transition: 0.25s ease;
  }
  svg {
    height: auto;
    max-height: 100%;
  }
  @media screen and ${device.mobileTablet} {
    width: 100%;
    svg {
      margin: 0 auto !important;
      max-height: 385px;
    }
  }

  @media screen and ${device.mobileTablet} {
    svg {
      max-height: 240px;
    }
  }
`;

const RolesContainer = styled.div`
  display: flex;
  gap: 10px 15px;
  flex-wrap: wrap;
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
          <RolesContainer>
            {roles.map((role) => (
              <Role roleCol={roleCol} reverse={reverse}>
                {role}
              </Role>
            ))}
          </RolesContainer>
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
        <CaseImg reverse={reverse}>{vector}</CaseImg>
      </CardContainer>
    </>
  );
}

export default CaseCard;
