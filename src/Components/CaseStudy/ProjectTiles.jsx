// styled components

const ProjectTile = (props) => {
  const images = props.images;
  const imagesList = images.map((image) => (
    <img
      key={image.id}
      src={image.src}
      onClick={() => {
        props.lightBox(image.src, image.description);
      }}
    ></img>
  ));
  return <div className="projectTilesWrapper">{imagesList}</div>;
};

export default ProjectTile; 
