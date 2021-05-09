import react from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 137%;
  color: ${(props) => props.titleCol};
`;

const Role = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 137%;
  color: ${(props) => props.roleCol};
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  background-color: ${(props) => props.backCol};
  @media only screen and (max-width: 600px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "")};
  }
`;

const CaseImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  background-color: ${(props) => props.btnBackCol};
  color: ${(props) => props.btnColor};
  border-radius: 26px;
  width: 579px;
  height: 117px;
`;

const Desc = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  text-align: ${(props) => (props.reverse ? "right" : "left")};
  font-size: 36px;
  line-height: 137%;
  color: ${(props) => props.descCol};
`;

export default function CaseCard({
  title,
  titleCol,
  role,
  roleCol,
  desc,
  descCol,
  img,
  imgAlt,
  reverse,
}) {
  return (
    <>
      <CardContainer reverse={reverse}>
        <Col>
          <Header titleCol={titleCol}>{title}</Header>
          <Role roleCol={roleCol}>{role}</Role>
          <Desc descCol={descCol} reverse={reverse}>
            {desc}
          </Desc>
          <Btn btnColor={btnColor} btnBackCol={btnBackCol}>
            View Case Study
          </Btn>
        </Col>
        <CaseImg src={img} alt={imgAlt} />
      </CardContainer>
    </>
  );
}
