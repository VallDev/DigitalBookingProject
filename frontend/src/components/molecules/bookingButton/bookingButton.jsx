import React from "react";
import H3 from "../../atoms/H3/h3"
import "../../../css/bookingButton.css"
import { Link } from "react-router-dom";

const BookingButton = (props) => {
    const { logged,setNeedLogg } = props;
    const [to, setTo] = React.useState(null);

    React.useEffect(()=> {
        if (logged) {
            setTo("booking");
            setNeedLogg(false);
        }else {
            setTo("/login");
            setNeedLogg(true);
        }
    },[logged])

    return(
        <div className="divBookingButton">
            <H3>Agregá tus fechas de viaje para obtener precios exclusivos</H3>
            {to && <Link to={to} className="backButton">Iniciar Reserva</Link>}
        </div>
    )
}

export default BookingButton;