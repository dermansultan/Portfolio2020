import React from "react";
import styled from "styled-components";

// recreate with styled-components
const QuoteWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  min-height: 200px;
  max-height: 250px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  justify-content: center;
  text-align: center;
  background-color: var(--second-blue);
`;

const QuotePara = styled.p`
  font-size: clamp(1em, 1.5vw, 1.5em);
  font-weight: 700;
  color: var(--main-blue);
  width: 75%;
`;

function ProjectQuote(props) {
  return (
    <QuoteWrapper>
      <QuotePara>{props.text}</QuotePara>
    </QuoteWrapper>
    // <div className="quoteWrapper">
    //   <p className="paraProjects quote">{props.text}</p>
    // </div>
  );
}

export default ProjectQuote;
