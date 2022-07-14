import React from "react";
import P from "../../atoms/p/p";
import Logo from "../../atoms/logos/logo";
import ld from "../../../resources/icons/location-dot-solid.svg"
import Button from "../../atoms/button/button";

const Location = (props) => {
    return(
        <div className="location">
            <Logo svg={ld} alt={"gps"}/>
            <P>{props.children}</P>
            <Button handleClick={()=>{console.log("Abre el mapa");}}>MOSTRAR EN EL MAPA</Button>
        </div>
    )
}

export default Location;