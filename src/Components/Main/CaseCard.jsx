import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.h2`
  white-space: nowrap;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  font-size: clamp(18px, 4vw, 96px);
  line-height: 137%;
  color: ${(props) => props.titleCol};
  margin: 0 0 0 0;
  @media only screen and (max-width: 769px) {
    align-self: center;
    margin: 0 0 0 0;
    width: 90%;
  }
`;

const Role = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(14px, 1.25vw, 36px);
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
  width: 95%;
  max-height: 540px;
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
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(1.04);
  }
`;

const CaseImg = styled.img`
  max-width: 55%;
  height: auto;
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  padding: ${(props) => (props.reverse ? "0 85px 0 0px" : "0 0 0 85px")};
  margin: 0 0 0 0;
  @media only screen and (max-width: 769px) {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    width: 100%;
  }
`;

const Btn = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(14px, 2.5vw, 28px);
  line-height: 137%;
  align-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  justify-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
  background-color: ${(props) => props.btnBackCol};
  color: ${(props) => props.btnColor};
  border-radius: 26px;
  border: none;
  width: 90%;
  height: 90px;
  margin: 25px 0 0 0;
  cursor: pointer;
  display: ${(props) => (props.construct ? "none" : "")};

  @media only screen and (max-width: 769px) {
    margin: 12px 0 0 0;
    width: 100%;
    height: 65px;
    border-radius: 15px;
  }
  ${'' /* @media only screen and (min-width: 769px) {
    margin: 12px 0 0 0;
    border-radius: 15px;
  }
  @media only screen and (min-width: 1024px) {
    margin: 12px 0 0 0;
    border-radius: 12px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 25px 0 0 0;
    border-radius: 12px;
  } */}
  transition: transform 0.2s; /* Animation */

  &:hover {
    background-color: ${(props) => props.btnColor};
    color: ${(props) => props.btnBackCol};
  }
`;

const Desc = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  width: ${(props) => props.width};
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  font-size: clamp(14px, 1.25vw, 36px);
  line-height: 137%;
  color: ${(props) => props.descCol};
  margin: 12px 0 0 0;
  @media only screen and (max-width: 769px) {
    align-self: center;
    margin: 12px 0 0 0;
    width: 90%;
  }
`;

function CaseCard({
  title,
  titleCol,
  role,
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
          <Role roleCol={roleCol} reverse={reverse}>
            {role}
          </Role>
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
              View Case Study
            </Btn>
          </Link>
        </Col>
        <CaseImg src={img} alt={imgAlt} reverse={reverse} />
      </CardContainer>
    </>
  );
}

export default CaseCard;
