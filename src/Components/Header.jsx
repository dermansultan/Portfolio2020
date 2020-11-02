import React from "react";

function Header(){
    return(
        <header>
        <div className='headerMain'>
        <h1 className='headerLogo'>derman sultan</h1>
        <nav>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Resume</a>
        </nav>
        </div>
        </header>
    )
}

export default Header;