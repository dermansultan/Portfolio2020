import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="headerMain">
        <Link to="/" className="headerLogo">
          derman sultan
        </Link>
        <nav>
          <Link to="/About">About</Link>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
          <a href="https://drive.google.com/file/d/1lecwuIV7KS5TpqWKUv4kHMeXbNNZwD-M/view?usp=sharing" target="_blank">Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
