// styled components
import styled from "styled-components";

const TileWrapper = styled.div`
  padding-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-items: center;
  grid-gap: 2rem;
  width: 100%;
`;

const TileImage = styled.img`
  cursor: ${(props) => (props.onClick ? "pointer" : "")};
  width: 100%;
  height: auto;
`;

const ProjectTile = (props) => {
  const images = props.images;
  const imagesList = images.map((image) => (
    <TileImage
      key={image.id}
      src={image.src}
      onClick={() => {
        props.lightBox(image.src, image.description);
      }}
    ></TileImage>
  ));
  return <TileWrapper>{imagesList}</TileWrapper>;
};

export default ProjectTile;
