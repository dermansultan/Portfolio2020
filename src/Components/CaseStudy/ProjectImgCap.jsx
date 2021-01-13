function ProjectImgCap(props) {
  return (
<div className='projectImgWrapper' onClick={props.onClick}>
  <img className='projectImg' src={props.image} alt={props.alt}></img>
  <p className='projectImgCap'>{props.caption}</p>
</div>
  );
}

export default ProjectImgCap