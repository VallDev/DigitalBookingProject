import React from "react";
import H2 from "../../atoms/h2/h2";
import H3 from "../../atoms/H3/h3";
import Image from "../../atoms/image/image";
import LocationDetailed from "../location/locationDetailed";
import Stars from "../../molecules/stars/stars";
import HrLine from "../../atoms/hrLine/hrLine"
import Button from "../../atoms/button/button"
import P from "../../atoms/p/p";
import "../../../css/bookingDetailed.css"
import { Link } from "react-router-dom";
import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";



const BookingDetailed = (props) => {
    let user_id = window.sessionStorage.getItem("user")
    const {isOk, setIsOk, product, dateIn, dateOut, time } = props;
    const [urlTo, setUrlTo] = React.useState("");
    
    React.useEffect(() =>{
        if(time&&dateIn&&dateOut) {
            setUrlTo("/successful")
        }
        else{
            setUrlTo("")
        }
    },[time,dateIn,dateOut])

    const token = window.sessionStorage.getItem('jwt');
    
    const handleClick=()=>{
        if(time&&dateIn&&dateOut){
            setIsOk(true)
            CallApi(URL+`/bookings/new`,
        {
            method: "POST",
            headers: { 
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://54.190.35.122:8080'
        },
            body: JSON.stringify(
                {
                    "date_from": dateIn.replaceAll("/","-"),
                    "date_to": dateOut.replaceAll("/","-"),
                    "start_time": time,
                    "id_user":user_id,
                    "id_product":product.id
                })
        })
        }
        else {
            setIsOk(false)
        }
    }

    return(
        <div className="bookingDetailed">
            <H2>Detalles de la reserva</H2>
            <div className="divContenedorTablet">
                <Image url={product.images[0].urlimg} alt={product.id_category.title+" image"}/>
                <div className="bottom">
                    <div className="title">
                        <H3>{product.id_category.title}</H3>
                        <H2>{product.name}</H2>
                        <Stars rating={product.stars}/>
                        <LocationDetailed location={product.id_city.name+" "+product.id_city.id_country.name}>{product.adress}</LocationDetailed>
                    </div>
                    <div className="checks">
                        <HrLine/>
                        <div className="check">
                            <P>Check in</P>
                            <P>{dateIn}</P>
                        </div>
                        <HrLine/>
                        <div className="check">
                            <P>Check out</P>
                            <P>{dateOut}</P>
                        </div>
                        <HrLine/>
                    </div>
                    <div className="divButton">
                        <Link to={urlTo}><Button handleClick={handleClick}>Confirmar reserva</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetailed;