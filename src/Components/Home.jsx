import React, { useState } from 'react'
import landingGraphic from '../Img/CodePenSquares.png'

const Home = () => {
    return(
        <div className='homeContainer'>
        <div className='heroContainer'>
            <div className='greetingBio'>
                <h1 className='greetingMsg'>Derman.greeting();</h1>
                <p className='greetingPara'>I'm a <span style={{color:"#1D66B9", fontWeight: 500}}>UX/UI Designer</span> with a passion for creating elegant and intuiitive experiences through <span style={{color:"#1DB954", fontWeight: 500}}>Design</span> and <span style={{color:"#1D66B9", fontWeight: 500}}>Code</span>.</p>
            </div>
            <img draggable='false' className='landingGraphic' src={landingGraphic}/>
        </div>
        <div className='projectsContainer'>
        <h1 className='projectsHeader'>Projects</h1>
        <div className='tilesContainer'>
            <div className='tile'></div>
            <div className='tile'></div>
            <div className='tile'></div>
            <div className='tile'></div>
        </div>
        </div>
        </div>
        
    )
}

export default Home