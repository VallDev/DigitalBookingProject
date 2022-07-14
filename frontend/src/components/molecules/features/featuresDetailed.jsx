import React from "react";
import Logo from "../../atoms/logos/logo";
import { ALL_FEATURES } from "../../../resources/const/ALL_FEATURES";
import P from "../../atoms/p/p";


const FeaturesDetailed = (props) => {
    const  {features} = props;
    return(
        <div className="featuresDetailed">
            {features.map((elem,index) => {
                return(
                <div key={index}  className="feature">
                    <Logo svg={ALL_FEATURES[elem].icon} alt={ALL_FEATURES[elem].text}/>
                    <P >{ALL_FEATURES[elem].text}</P>
                </div>
                )
            })}
        </div>
    )
}

export default FeaturesDetailed;