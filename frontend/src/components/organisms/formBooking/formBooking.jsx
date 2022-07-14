import React from "react";
import InputsBooking from "../../molecules/inputsBooking/inputsBooking";
import BlockCalendarBooking from "../../molecules/blockCalendarBooking/blockCalendarBooking";
import TimeArrive from "../../molecules/timeArrive/timeArrive";
import "../../../css/formBooking.css"
import NeedLogg from "../../molecules/needLogg/needLogg";
import BookingCalendar from "../../molecules/bookingCalendar/bookingCalendar";


const FormBooking = (props) => {
    const {isOk,setDateIn, setDateOut, monthAmount, setTime, arrayFechas} = props
    const [rangeOrRead,setRange]= React.useState(true)
    const [readOrRange,setRead]= React.useState(false)


    return(
        <div className="divFormBooking">
            <InputsBooking isOk={isOk} />
            <BlockCalendarBooking arrayFechas={arrayFechas} setDateIn={setDateIn} setDateOut={setDateOut} monthAmount={monthAmount}/>
            {/* <BookingCalendar arrayFechas={arrayFechas} rangeOrRead={rangeOrRead} readOrRange={readOrRange} setDateIn={setDateIn} setDateOut={setDateOut} monthAmount={monthAmount}/> */}
            {!isOk && <p className="pError">Necesitas seleccionar una fecha</p>}
            <TimeArrive isOk={isOk} setTime={setTime}/>
            {!isOk && <p className="pError">Necesitas seleccionar un horario de llegada</p>}
        </div>
    )
}

export default FormBooking;