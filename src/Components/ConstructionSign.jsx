
function ConstructionSign(){
    return(
<div className='construction' style={{overflow:'hidden', backgroundColor: '#DC143C', position: 'fixed', top:'0', width: '100%', color: 'white', textAlign: 'center', height: '30px', fontSize: 'clamp(14px, 1.5vw, 18px)', zIndex: '5'}}>
    <p>🚧 This website is under construction! If you're viewing this thank you for you patience. 🚧</p>
</div>
    )
}

export default ConstructionSign;