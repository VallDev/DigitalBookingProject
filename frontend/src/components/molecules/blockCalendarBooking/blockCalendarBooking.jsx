import React from "react";
import H1 from "../../atoms/h1/h1";
import { Calendar } from "react-multi-date-picker"
import ES from "../../../resources/const/ES";
import "../../../css/blockCalendarBooking.css"
import VerticalLine from "../../atoms/verticalLine/verticalLine";

const BlockCalendarBooking = (props) => {
    const [dates, setDates] = React.useState([new Date(), new Date()])
    const {arrayFechas,setDateIn, setDateOut, monthAmount} = props
    const diasPasados = [];
    let siguiente = null;

    React.useEffect(()=>{
        setDateIn(`${dates[0].toString()}`)
        setDateOut(`${dates[dates.length-1].toString()}`)
    },[dates])

    React.useEffect(()=>{
        setDateIn("-")
        setDateOut("-")
    },[])

    

    return(
        <div className="divBlockCalendarBooking">
            <H1>Seleccioná tu fecha de reserva</H1>
            <div className="divCalendarBooking">
                <Calendar weekDays={ES.days} months={ES.months}
                    mapDays={({ date, today, selectedDate, currentMonth, isSameDate}) => {
                        if(arrayFechas){
                            let isUnaccesible = arrayFechas[date.year][date.month.number].includes(date.day)
                            if (isUnaccesible ) return {
                                disabled: true,
                                style: { color: "#ccc" },
                            }
                        }
                        for (let i = 1; i < 1095; i++) {
                            diasPasados[i] = today.dayOfBeginning - i
                        }
                        let isTooLate = diasPasados.includes(date.dayOfBeginning)
                        if (isTooLate ) return {
                            disabled: true,
                            style: { color: "#ccc" },
                        } 
                        /* let selectedDate1 = [0]
                        
                        if(selectedDate1[0] === selectedDate){
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
                        if(siguiente === null){
                            siguiente=selectedDate[0].dayOfYear
                        } */
                        /* if(selectedDate[selectedDate.length-1]!== undefined){
                            if (date.dayOfYear >= selectedDate[0].dayOfYear && date.dayOfYear <= selectedDate[selectedDate.length-1].dayOfYear){
                                if (siguiente === date.dayOfYear) {
                                    siguiente += 1
                                    datos=date; 
                                }
                                else if(selectedDate.length>1){
                                    selectedDate[selectedDate.length-1]=datos;
                                }
                            }
                        } */
                    }}                
                    value={dates} 
                    onChange={setDates}
                    range
                    numberOfMonths={monthAmount}
                />
                <VerticalLine/>
            </div>
            
        </div>
    )
}

export default BlockCalendarBooking;