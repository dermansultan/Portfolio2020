import styled from "styled-components";
import { motion } from "framer-motion";

export const CaseContainer = styled(motion.div)`
  margin-top: 5vh;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const Banner = styled.div`
  background-image: url(${(props) => props.backImg});
  display: flex;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  width: 100%;
  background-size: cover;
  border-radius: 10px;
  height: 70vh;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const BodyPara = styled.p`
  margin: ${(props) => props.margin};
  font-weight: 400;
  padding-top: 12px;
  line-height: 150%;
  font-size: clamp(14px, 1.5vw, 18px);
  color: var(--second-txt-color);
`;

export const SpanPara = styled.span`
  margin: ${(props) => props.margin};
  font-weight: 600;
  font-size: clamp(14px, 1.5vw, 18px);
  color: var(--second-txt-color);
`;

export const Header = styled.h1`
  margin: ${(props) => props.margin};
  font-size: clamp(30px, 1.5vw, 75px);
  color: var(--main-txt-colour);
`;

export const SubHeader = styled.h2`
  margin: ${(props) => props.margin};
  color: ${(props) =>
    props.blue ? "var(--main-blue)" : "var(--main-txt-colour)"};
  margin: ${(props) => props.margin};
  font-size: ${(props) =>
    props.listSub ? "clamp(1em, 1.5vw, 1.25em)" : "clamp(18px, 1.5vw, 22px)"};
`;

export const WrapperCol = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justCont};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-self: ${(props) => props.alignSelf};
  align-items: ${(props) => (props.itemCenter ? "center" : "flex-start")};
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding: ${(props) => props.padding};
  display: flex;
  margin: ${(props) => props.margin};
  flex-direction: column;
`;

export const List = styled.ul`
  list-style-position: inside;
  margin: ${(props) => props.margin};
`;

export const ListItem = styled.li`
  margin: ${(props) => props.margin};
  font-size: clamp(14px, 1.5vw, 18px);
  color: var(--second-txt-color);
  font-weight: ${(props) => props.weight};
`;

export const ProjectImg = styled.img`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: auto;
  border: ${(props) => (props.noBorder ? "none" : "1px solid #252a41")};
  align-self: ${(props) => (props.single ? "center" : "")};
  box-shadow: ${(props) =>
    props.shadow ? "0px 4px 4px rgba(180, 180, 180, 0.7)" : ""};
  border-radius: ${(props) => props.borderRad};
  @media only screen and (max-width: 700px) {
    width: ${(props) => props.MobWidth};
  }
`;
