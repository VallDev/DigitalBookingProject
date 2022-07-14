import React from "react";
import LocationDetailed from "../../molecules/location/locationDetailed";
import Review from "../../molecules/review/review";
import Stars from "../../molecules/stars/stars";
import "../../../css/locationHeader.css"

const LocationHeader = (props) => {
    const {location, rating, points, adress} = props;
    return(
        <div className="locationHeader">
            <LocationDetailed location={location}>{adress}</LocationDetailed>
            <Review points={points}><Stars rating={rating}/></Review>
        </div>
    )
}

export default LocationHeader;