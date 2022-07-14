import React from "react";
import P from "../../atoms/p/p";
import Logo from "../../atoms/logos/logo";
import ld from "../../../resources/icons/location-dot-solid.svg"

const LocationDetailed = (props) => {
    const {location} = props;
    return(
        <div className="locationDetailed">
            <div>
                <Logo svg={ld} alt={"gps"}/>
                <P>{location}</P>
            </div>
            <P>{props.children}</P>
        </div>
    )
}

export default LocationDetailed;