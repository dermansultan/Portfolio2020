import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer>
            <p className='footerLeft'>Get in touch with me! 👉</p>
            <div className="socialBtnWrapper">
            <FontAwesomeIcon icon={faEnvelope} className='icon footer' />
            <FontAwesomeIcon icon={faInstagram} className='icon footer' />
            <FontAwesomeIcon icon={faLinkedin} className='icon footer' />
          </div>
            <p className='footerRight'>© abdurrehman sultan 2020</p>
        </footer>
    )
}

export default Footer;