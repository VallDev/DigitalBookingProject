import React from "react";
import starIcon from "../../../resources/icons/star-solid.svg"
import Logo from "../../atoms/logos/logo";


const MAX = [1,2,3,4,5]; 

const Stars = (props) => {
    const {rating} = props;
    return(
        <div className="stars">
            {MAX.map((elem,index)=>{
                return (elem > rating  ? <div key={index} className="notHave"><Logo svg={starIcon}/></div> :  <div key={index} className="have"><Logo className="notHave" svg={starIcon}/></div>)
            })}
        </div>
    )
}

export default Stars;