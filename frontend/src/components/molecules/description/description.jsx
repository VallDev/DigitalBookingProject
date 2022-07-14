import React from "react";
import P from "../../atoms/p/p";
import Button from "../../atoms/button/button";

const Description = (props) => {
    const {setAreDetails} = props;
    return(
        <div className="description">
            <P>{props.children.substr(0,500)}<Button handleClick={setAreDetails} value={false}>...mostrar menos</Button></P>
        </div>
    )
}

export default Description;