const ProjectTile = (props) => {
  const images = props.images;
  const imagesList = images.map((image) => <img key={image.toString()} src={image}></img>);
  return <div className="projectTilesWrapper">{imagesList}</div>;
};

export default ProjectTile;
