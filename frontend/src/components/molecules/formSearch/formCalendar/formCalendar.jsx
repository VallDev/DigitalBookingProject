import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import calendar from '../../../../resources/icons/calendar.svg'
//import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-daterangepicker/daterangepicker.css";
import "../../../../css/calendar.css"

const FormCalendar = (prop) => {

    const {setDateIn,setDateOut,dateIn,dateOut} = prop;

    const handlerClick = (e)=>{
        e.preventDefault();
    }

    const handleCallback = (start, end, label) => {
        setDateIn(`${end._i[0]}-${end._d.getMonth()+1}-${end._d.getDate()}`) 
        setDateOut(`${start._i[0]}-${start._d.getMonth()+1}-${start._d.getDate()}`)
        
    }

    const[value1,setValue1] = React.useState(true);
    
    const changeState = () =>{
        setValue1(false)
    } 

    return(
        <div className="divCalendar" >
            <DateRangePicker onCallback={handleCallback} onApply={changeState} >
                <button className='buttonCalendar'  onClick={(e)=>{handlerClick(e)}} >
                    <img className='iconCalendar' src={calendar} alt='calendar-icon'/>
                    <p className='pCalendar'>{value1?"Check in - Check out":`${dateIn}, ${dateOut}`}</p>
                </button>
            </DateRangePicker>
        </div>
    )
}

export default FormCalendar;