import React from "react";
import Button from "../../atoms/button/button";
import Svg from "../../../resources/icons/customCheck.svg"

import "../../../css/bookingSuccessful.css"

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import H3 from "../../atoms/H3/h3";
import P from "../../atoms/p/p";
import Logo from "../../atoms/logos/logo";

const BookingTemplate = (props) => {
    const {text} = props;
    return(
        <body className="bodyBookingSuccessful">
            <div className="divContenedor">
            <Logo svg={Svg}></Logo>
                <H3>¡Muchas Gracias!</H3>
                <P>{props.children}</P>
                <Link to={"/"}><Button>{text}</Button></Link>
            </div>
        </body>
    )
}

export default BookingTemplate;