import { useEffect } from "react";
import { docTitleUpdate } from "./docTitleUpdate";
import {
  MainContainer,
  CaseContainer,
  Section,
  Header,
  BodyPara,
} from "./CaseStudy/CaseStudy-styling";

const outro = { duration: 1.25, ease: [0.6, 0.01, -0.05, 0.9] };

const Extra = ({ lightBoxHandler }) => {
  useEffect(() => {
    docTitleUpdate("| Extras");
  });

  return (
    <MainContainer>
      <CaseContainer>POOP</CaseContainer>
    </MainContainer>
  );
};

export default Extra;
