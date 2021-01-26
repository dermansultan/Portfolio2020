// recreate with styled component
import styled from "styled-components";

const ImgWrapper = styled.div`
  display: flex;
  padding-bottom: 29px;
  align-items: center;
  flex-direction: column;
`;

const SourceImg = styled.img`
  width: 50%;
  height: auto;
  border: 1px solid #252a41;
  align-self: ${(props) => (props.single ? "center" : "")};
`;

const ImgCap = styled.p`
  font-size: clamp(14px, 1.5vw, 18px);
  margin-top: 20px;
`;

function ProjectImgCap(props) {
  return (
    <ImgWrapper onClick={props.onClick}>
      <SourceImg src={props.image} alt={props.alt}></SourceImg>
      <ImgCap>{props.caption}</ImgCap>
    </ImgWrapper>
    // <div className="projectImgWrapper" onClick={props.onClick}>
    //   <img className="projectImg" src={props.image} alt={props.alt}></img>
    //   <p className="projectImgCap">{props.caption}</p>
    // </div>
  );
}

export default ProjectImgCap;
