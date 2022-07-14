import React from "react";
import { Calendar } from "react-multi-date-picker"
import ES from "../../../resources/const/ES";
import "../../../css/doubleCalendarB.css"
import VerticalLine from "../../atoms/verticalLine/verticalLine";



const DoubleCalendarB = (props) => {
    const{arrayFechas,monthAmount} = props
    
    const [date, setDate] = React.useState(new Date())
    const diasPasados = []

    return(
        <div className="divDoubleCalendarB">
                <Calendar weekDays={ES.days} months={ES.months}
                mapDays={({ date,today }) => {
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
                }}               
                value={date} 
                onChange={setDate}
                numberOfMonths={monthAmount}
                readOnly
                />
                <VerticalLine/>
        </div>
)}

export default DoubleCalendarB;