import react from "react";
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
  border: 2px solid #2f62ce;
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
  justify-content: space-evenly;
  margin: 55px 0 0 0;
  width: 100%;
  max-width: 1420px;
  height: 600px;
  box-shadow: 4px 24px 60px rgba(109, 141, 173, 0.25);
  border-radius: 58px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  background-color: ${(props) => props.mainBackCol};

  @media only screen and (max-width: 769px) {
    width: 90%;
    height: 450px;
    flex-direction: column-reverse;
    margin: 55px 0 0 0;
    border-radius: 20px;
  }
`;

const CaseImg = styled.img`
  width: 620px;
  height: auto;
  object-fit: contain;
  margin: ${(props) => (props.reverse ? "35px 50px 0 0px" : "35px 0 0 50px")};
  @media only screen and (max-width: 769px) {
    margin: ${(props) => (props.reverse ? "0 0 0 0" : "0 0 0 0")};
    padding-top: 25px;
    max-width: 75%;
    align-self: center;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  padding: ${(props) => (props.reverse ? "0 100px 0 0px" : "0 0 0 100px")};
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

function CaseCard({
  title,
  titleCol,
  roles,
  roleCol,
  desc,
  descCol,
  img,
  imgAlt,
  btnColor,
  btnBackCol,
  mainBackCol,
  reverse,
  projLink,
  construct,
}) {
  return (
    <>
      <CardContainer reverse={reverse} mainBackCol={mainBackCol}>
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
        <CaseImg src={img} alt={imgAlt} reverse={reverse} />
      </CardContainer>
    </>
  );
}

export default CaseCard;
