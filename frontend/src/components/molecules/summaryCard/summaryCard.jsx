import React from "react";
import Review from "../review/review";
import Stars from "../stars/stars";
import Features from "../features/features";
import H3 from "../../atoms/H3/h3";
import H2 from "../../atoms/h2/h2";
import Button from "../../atoms/button/button";
import Location from "../location/location";
import P from "../../atoms/p/p";

import "../../../css/summaryCard.css"


const SummaryCard = (props) => {
    const {type, rating, points, name, features, description, setAreDetails, location} = props;
    return(
        <div className="summaryCard">
            <div className="top">
                <div className="left">
                    <div className="rating">
                        <H3>{type.toUpperCase()}</H3>
                        <Stars rating={rating}/>
                    </div>
                    <H2>{name}</H2>
                </div>
                <Review points={points}/>
            </div>

            <div className="middle">
                <Location>{location.name}</Location>
                <Features features={features}/>
            </div>
            
            <div className="bot">
                <P>{description.substr(0,150)}<Button handleClick={setAreDetails} value={true}>más...</Button></P>
            </div>
        </div>
    )
}

export default SummaryCard;