import React from "react";

const Button = (props) => {
    const {handleClick, value} = props

    return(
        <button className="Button" onClick={()=> {handleClick(value)}}>{props.children}</button>
    )   
}

export default Button;