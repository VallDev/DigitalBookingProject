import React from "react";
import { Calendar } from "react-multi-date-picker"
import ES from "../../../resources/const/ES";
import "../../../css/bookingCalendar.css"
import VerticalLine from "../../atoms/verticalLine/verticalLine";

const BookingCalendar = (props) => {
    const [dates, setDates] = React.useState(new Date())
    const {arrayFechas,setDateIn, setDateOut, monthAmount,readOrRange,rangeOrRead} = props
    const diasPasados = []
    console.log(readOrRange);
    let siguiente = null
    let datos
    return(
        <div className="divBookingCalendar">
            <Calendar weekDays={ES.days} months={ES.months}
                mapDays={({ date, today, selectedDate, currentMonth, isSameDate}) => {
                    let isUnaccesible = arrayFechas[date.year][date.month.number].includes(date.day)
                    if (isUnaccesible ) return {
                        disabled: true,
                        style: { color: "#ccc" },
                    }
                    for (let i = 1; i < 1095; i++) {
                                diasPasados[i] = today.dayOfBeginning - i
                    }
                    let isTooLate = diasPasados.includes(date.dayOfBeginning)
                    if (isTooLate ) return {
                        disabled: true,
                        style: { color: "#ccc" },
                    } 
                    let selectedDate1 =[0]
                    
                    if(selectedDate1[0]=== selectedDate){
                        selectedDate1 = selectedDate
                    }
                    let props = {}
                    props.style = {
                        borderRadius: "3px",
                        backgroundColor: date.month.index === currentMonth.index ? "#ccc" : ""
                    }
                    if (isSameDate(date, selectedDate)) props.style = {
                        ...props.style,
                        color: "#0078d9",
                        backgroundColor: "#a5a5a5",
                        fontWeight: "bold",
                        border: "1px solid #777"
                    }
                    if (rangeOrRead) {
                        if(siguiente === null){
                            siguiente=selectedDate[0].dayOfYear
                        }
                        
                        if (date.dayOfYear >= selectedDate.dayOfYear && date.dayOfYear <= selectedDate[selectedDate.length-1].dayOfYear){
                            if (siguiente === date.dayOfYear) {
                                siguiente += 1
                                datos=date; 
                            }
                            else if(selectedDate.length>1){
                                selectedDate[selectedDate.length-1]=datos;
                            }
                        }
                        
                        setDateIn(selectedDate[0])
                        setDateOut(selectedDate[selectedDate.length-1])
                    }
                }}                
                value={dates} 
                onChange={setDates}
                range={rangeOrRead}
                read={readOrRange}
                numberOfMonths={monthAmount}
            />
            <VerticalLine/>
        </div>
    )
}

export default BookingCalendar;