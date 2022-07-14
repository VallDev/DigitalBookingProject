import React from "react";
import Logo from "../../atoms/logos/logo";
import { ALL_FEATURES } from "../../../resources/const/ALL_FEATURES";

const Features = (props) => {
    const  {features} = props;
    return(
        <div className="features">
            {features.slice(0,4).map((elem,index) => {
                return(<Logo key={index} svg={ALL_FEATURES[elem.name_icon].icon} alt={ALL_FEATURES[elem.name_icon].text}/>)
            })}
        </div>
    )
}

export default Features;