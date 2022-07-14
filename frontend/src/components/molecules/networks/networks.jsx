import React from "react";
import fb from "../../../resources/icons/networkIcons/facebook-brands.svg"
import ig from "../../../resources/icons/networkIcons/instagram-brands.svg"
import li from "../../../resources/icons/networkIcons/linkedin-brands.svg"
import tw from "../../../resources/icons/networkIcons/twitter-brands.svg"

import NetworkLogo from "../../atoms/logos/logo";

const Networks = () => {
    return(
        <div className="Networks">
            <NetworkLogo svg={fb}></NetworkLogo>
            <NetworkLogo svg={ig}></NetworkLogo>
            <NetworkLogo svg={li}></NetworkLogo>
            <NetworkLogo svg={tw}></NetworkLogo>
        </div>
    )
    
}

export default Networks;