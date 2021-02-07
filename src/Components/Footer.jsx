import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer>
            <p className='footerLeft'>Made with <span><FontAwesomeIcon icon={faReact}/></span> and 🦾 </p>
            <p className='footerRight'>© abdurrehman sultan 2020</p>
        </footer>
    )
}

export default Footer;