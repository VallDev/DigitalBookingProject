import React from "react";
import BookingButton from "../../molecules/bookingButton/bookingButton";
import H2 from "../../atoms/h2/h2"
import "../../../css/booking.css"
import DoubleCalendarB from "../../molecules/doubleCalendarB/doubleCalendarB";

const Booking = (props) => {
    const {setDateIn, setDateOut,arrayFechas, logged, setNeedLogg } = props;

    const [monthAmount, setMonthAmount] = React.useState(2);
    const [width, setWidth] = React.useState()

    const [read,setRead]= React.useState(true)
    const [range,setRange]= React.useState(false)

    React.useEffect(()=> {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        if (window.matchMedia("(max-width: 700px)").matches) {
            setMonthAmount(1);
        }else (
            setMonthAmount(2)
        )
    },[width])



    return(
        <div className="divBooking">
            <H2>Fechas disponibles</H2>
            <section className="sectionBooking">
                <div className="divDoubleCalendar">
                    {/* <BookingCalendar setDateIn={setDateIn} setDateOut={setDateOut}range={range} read={read} arrayFechas={arrayFechas} monthAmount={monthAmount}/> */}
                    <DoubleCalendarB range={range} read={read} arrayFechas={arrayFechas}monthAmount={monthAmount}/>
                </div>
                <div className="divButton">
                    <BookingButton logged={logged} setNeedLogg={setNeedLogg}/>
                </div>
            </section>
        </div>
    )
}

export default Booking; 