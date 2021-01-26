import React from "react";
import styled from "styled-components";

// recreate with styled-components
const QuoteWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  min-height: 170px;
  max-height: 200px;
  width: 100%;
  justify-content: center;
  text-align: center;
  background-color: var(--second-blue);
`;

const QuotePara = styled.p`
  font-size: clamp(14px, 1.5vw, 19px);
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
