import React from "react";
import { Link } from "react-router-dom";



function Header(){
    return(
        <header>
        <div className='headerMain'>
        <Link to="/" className='headerLogo'>derman sultan</Link>
        <nav>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Resume">Resume</Link>
        </nav>
        </div>
        </header>

    )
}

export default Header;