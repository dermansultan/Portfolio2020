import styled from "styled-components";


export const Banner = styled.div`
  backgroundimage: url(${(props) => props.backImg});
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

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
