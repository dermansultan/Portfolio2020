// styled components
import styled from "styled-components";

const TileWrapper = styled.div`
  padding-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  justify-items: center;
  grid-gap: 1.5rem;
  width: 100%;
`;

const TileImage = styled.img`
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
