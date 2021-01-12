const ProjectTile = (props) => {
  return (
    <div className="projectTilesWrapper">
      <div className={`projectTile ${props.csTitle}1`}></div>
      <div className={`projectTile ${props.csTitle}2`}></div>
      <div className={`projectTile ${props.csTitle}3`}></div>
      <div className={`projectTile ${props.csTitle}4`}></div>
    </div>
  );
};

export default ProjectTile;
