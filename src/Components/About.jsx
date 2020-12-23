import React from "react";
import dp from "../Img/dp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="mainContainer About">
      <div className="aboutContainer">
        <img className="dp" src={dp} />
        <div className="aboutBio">
          <h1 className="aboutGreeting"> <span>👋</span>Hello there.</h1>
          <p className="aboutPara">
            <span>An affinity for design and technology</span> - I love going
            out my way to find new ways to solve complex problems. I'm always
            challenging myself to learn the latest trends and technologies. I
            want to combine my passion for problem solving and design to craft
            meaningful user experiences.
          </p>
          <p className="aboutPara">
            I'm currently all about <span>Front End Development</span>. My
            journey started early in 2020. With no prior coding experience I
            became obsessed with JavaScript through expirementing with{" "}
            <span>FreeCodeCamp</span> and <span>TheOdinProject</span>. As of
            right now, I am messing around about with the <span>React</span>{" "}
            framework, learning more CSS techniques and about Accesibility on
            the Web.
          </p>
          <p className="aboutPara">
            I'm constantly looking for new opportunities to learn more and
            expand my abilities. Have an opportunity for me? Get in touch with
            me below.
          </p>
          <div className="socialBtnWrapper">
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <FontAwesomeIcon icon={faInstagram} className='icon' />
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;