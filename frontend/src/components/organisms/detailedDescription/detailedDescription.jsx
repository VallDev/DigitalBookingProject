import React from "react";
import H1 from "../../atoms/h1/h1";
import P from "../../atoms/p/p";
import "../../../css/detailedDescription.css"

const DetailedDescription = (props) => {
    const {title} = props;
    return(
        <div className="detailedDescription">
            <H1>{title}</H1>
            <P>{props.children}</P>
        </div>
    )
}

export default DetailedDescription;