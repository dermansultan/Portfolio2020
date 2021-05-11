import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Logo from "../Img/Logo.svg";
import ReactGa from "react-ga";
import styled from "styled-components";

const Dlogo = styled.img`
  margin: 15px 0 0 0;
  height: auto;
  width: 75%;
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(
      1.20
    ); 
  }
`;

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
          <Dlogo src={Logo} alt={"Logo"} />
        </Link>
        <nav>
          <Link
            to="/About"
            onClick={() => gaClickHandler("About me was clicked")}
          >
            About Me
          </Link>
          <HashLink smooth to="/#projects">
            Work
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
