import React from "react";
import H1 from "../../atoms/h1/h1";
import Logo from "../../atoms/logos/logo";
import { Link } from "react-router-dom";

import mainLogo from "../../../resources/icons/logo4.svg"

const HeaderLeft = () => {
    return(
        <Link to="/">
            <div className="Left">
                <Logo svg={mainLogo}></Logo>
                <H1>Sentite como en casa</H1>
            </div>
        </Link>

    )
}

export default HeaderLeft;