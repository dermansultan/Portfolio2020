import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <p className="footerLeft">
        Made with{" "}
        <span>
          <FontAwesomeIcon icon={faReact} />
        </span>{" "}
        and 🦾{" "}
      </p>
      <p className="footerLeft">
        <span>
          <a href="https://www.instagram.com/ixderman/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="icon footer" />
          </a>
          <a href="https://www.linkedin.com/in/derman-sultan/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon footer" />
          </a>
          <a href="https://github.com/dermansultan" target="_blank">
            <FontAwesomeIcon className="icon footer" icon={faGithub} />
          </a>
          <a href="mailto:abdurrehmansultan4@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="icon footer" />
          </a>
        </span>{" "}
      </p>
      <p className="footerRight">© abdurrehman sultan 2021</p>
    </footer>
  );
}

export default Footer;
