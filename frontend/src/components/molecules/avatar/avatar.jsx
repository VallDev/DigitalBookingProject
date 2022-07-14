import React from "react";
import H2 from "../../atoms/h2/h2";
import "../../../css/avatar.css"

const Avatar = (props) => {
    return(
        <div className="Avatar">
            <H2>{props.children.toUpperCase()}</H2>
        </div>
    )
}

export default Avatar;