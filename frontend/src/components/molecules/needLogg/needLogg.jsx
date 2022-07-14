import React from "react";
import P from "../../atoms/p/p";
import Logo from "../../atoms/logos/logo";

import alert from "../../../resources/icons/circle-exclamation-solid.svg"
import "../../../css/needLogg.css"

const NeedLogg = (props) => {
    return(
        <div className="needLogg">
            <Logo svg={alert}/>
            <P>{props.children}</P>
        </div>
    )
}

export default NeedLogg;