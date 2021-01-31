import styled from "styled-components";
import { motion } from "framer-motion";

export const CaseContainer = styled(motion.div)`
  margin-top: 5vh;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
`;

export const BodyPara = styled.p`
  font-weight: 400;
  padding-top: 12px;
  line-height: 150%;
  font-size: clamp(14px, 1.5vw, 18px);
  color: var(--second-txt-color);
`;

export const Header = styled.h1`
  font-size: clamp(30px, 1.5vw, 55px);
  color: var(--main-txt-colour);
`;

export const SubHeader = styled.h2`
  color: var(--main-txt-colour);
  padding-top: 12px;
  font-size: clamp(18px, 1.5vw, 22px);
`;

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
