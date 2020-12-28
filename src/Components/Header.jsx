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
          <Link to="/Resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
