
function ConstructionSign(){
    return(
<div className='construction' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow:'hidden', borderRadius: '40px',backgroundColor: '#DC143C', top:'50px',position: 'fixed', width: '43%', color: 'white', textAlign: 'center', height: '35px', fontSize: 'clamp(14px, 1.5vw, 18px)', zIndex: '5', opacity: '50%'}}>
    <p>🚧 This website is under construction! If you're viewing this thank you for you patience. 🚧</p>
</div>
    )
}

export default ConstructionSign;