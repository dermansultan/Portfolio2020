import React from 'react'
import dp from '../Img/dp.jpg'

const About = () => {
    return (
        <div className='mainContainer About'>
            <div className='aboutContainer'>
                <img className='dp' src={dp}/>
                <div className='aboutBio'>
                    <h1 className='aboutGreeting'>👋 Hello there.</h1>
                    <p className='aboutPara'><span>An affinity for design and technology</span> - I love going out my way to find new ways to solve complex problems. I'm always challenging myself to learn the latest trends and technologies. I want to combine my passion for problem solving and design to craft meaningful user experiences.</p>
                    <p className='aboutPara'>I'm currently all about <span>Front End Development</span>. My journey started early in 2020. With no prior coding experience I became obsessed with JavaScript through expirementing with <span>FreeCodeCamp</span> and <span>TheOdinProject</span>.  As of right now, I am messing around about with the <span>React</span> framework, learning more CSS techniques and about Accesibility on the Web.</p>
                    <p className='aboutPara'>I'm constantly looking for new oppurtunities to learn more and expand my abilities. </p>
                </div>
            </div>
        </div>
    )
}


export default About