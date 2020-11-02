import landingGraphic from '../Img/CodePenSquares.png'

const Home = () => {
    return(
        <div className='heroContainer'>
            <div className='greetingBio'>
            
                <h1>Derman.greet();</h1>
                <p>I'm a <span>UX/UI Designer</span> with a passion for creating elegeant and intiuitive experiences through <span>Design</span> and <span>Code</span>.</p>
            </div>
            <img className='landingGraphic' src={landingGraphic}/>
        </div>
    )
}

export default Home