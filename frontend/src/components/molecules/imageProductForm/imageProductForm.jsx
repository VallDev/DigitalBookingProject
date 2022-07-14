import React from "react";
import Button from "../../atoms/button/button";
import Logo from "../../atoms/logos/logo";
import plus from "../../../resources/icons/plus-solid.svg"
import P from "../../atoms/p/p";

const ImageProductForm = (props) => {
    const {register, index, createNewImage} = props;
    const [isLast, setIsLast] = React.useState(true);

    const handleClick = () => {
        setIsLast(false);
        createNewImage();
    }

    return(
        <div className="imageProductForm">
            <input className="imageInput" placeholder="Insertar http://" type="text" {...register("images."+index+".urlimg")}/>
            <input hidden value={"image"} {...register("images."+index+".title")}/>
            <div className="buttonContainer">
                {isLast && <Button handleClick={handleClick}><Logo svg={plus}/></Button>}
            </div>
        </div>
    )
}

export default ImageProductForm;