import React from "react";
import Image from "../../atoms/image/image";
import "../../../css/galleryPreview.css"


const GaleryPreview = (props) => {
    const { images } = props;

    return(
        <div className="galeryPreview">
            <Image url={images[0].original}/>
            <div className="rightBlock">
                <div className="top">
                    <Image url={images[1].original}/>
                    <Image url={images[2].original}/>
                </div>
                <div className="bot">
                    <Image url={images[3].original}/>
                    <Image url={images[4].original}/>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default GaleryPreview;