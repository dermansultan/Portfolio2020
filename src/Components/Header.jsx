import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ReactGa from "react-ga";

function Header() {
  const gaClickHandler = (name) => {
    ReactGa.event({
      category: "Button",
      action: `${name}`,
    });
    // console.log(`${name} was clicked!`);
  };

  return (
    <header>
      <div className="headerMain">
        <Link to="/" className="headerLogo">
          derman sultan
        </Link>
        <nav>
          <Link
            to="/About"
            onClick={() => gaClickHandler("About me was clicked")}
          >
            About
          </Link>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
          <a
            href="https://drive.google.com/file/d/1lecwuIV7KS5TpqWKUv4kHMeXbNNZwD-M/view?usp=sharing"
            target="_blank"
            onClick={() => gaClickHandler("Resume was clicked")}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
