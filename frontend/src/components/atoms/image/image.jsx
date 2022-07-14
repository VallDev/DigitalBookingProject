import React from "react";

const Image = (props) => {
    const {url, alt} = props
    return(
        <img className="Image" src={url} alt={alt}/>
    )
}

export default Image;