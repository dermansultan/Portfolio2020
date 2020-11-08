import React from 'react'
import landingGraphic from '../Img/CodePenSquares.png'

const Home = () => {
    return(
        <div className='mainContainer'>
        <div className='homeContainer'>
        <div className='heroContainer'>
            <div className='greetingBio'>
                <h1 className='greetingMsg'>Derman.greeting();</h1>
                <p className='greetingPara'>I'm a <span style={{color:"#1D66B9", fontWeight: 500}}>UX/UI Designer</span> with a passion for creating elegant and intuitive experiences through <span style={{color:"#1DB954", fontWeight: 500}}>Design</span> and <span style={{color:"#1D66B9", fontWeight: 500}}>Code</span>.</p>
            </div>
            <img draggable='false' className='landingGraphic' src={landingGraphic}/>
        </div>
        <div className='projectsContainer' id='projects'>
        <h1 className='projectsHeader'>Projects</h1>
        <div className='tilesContainer'>
        <div className='tileWrap'>
        <p className='tileDesc'>Ruma - Streaming App</p>
        <p className='tileDesc2'>UX/UI | Design Challenge</p>
        </div>
        <div className='tileWrap'>
        <p className='tileDesc'>App Design</p>
        </div>
        <div className='tileWrap'>
        <p className='tileDesc'>App Design - UX/UI Design</p>
        </div>
        <div className='tileWrap'>
        <p className='tileDesc'>App Design - UX/UI Design</p>
        </div>
        {/* <div className='tileWrap'>
        <img alt='RumaLogoBanner' draggable='false' className='tile' src={rumaBanner}/>
        <p className='tileDesc'>This is a great test.</p>
        </div> */}
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Home