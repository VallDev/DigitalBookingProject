import React from "react";
import "../../../css/footer.css"
import H2 from "../../atoms/h2/h2";
import Networks from "../../molecules/networks/networks";



const Footer = () => {
    return(
        <footer>
            <H2>©2021 Digital Booking</H2>
            <Networks/>
        </footer>
    )
}

export default Footer;