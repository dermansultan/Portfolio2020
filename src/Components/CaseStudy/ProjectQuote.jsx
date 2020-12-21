import React from "react";

function ProjectQuote(props) {
  return (
    <div className='quoteWrapper'>
      <p className='paraProjects quote'>{props.text}</p>
    </div>
  );
}

export default ProjectQuote
