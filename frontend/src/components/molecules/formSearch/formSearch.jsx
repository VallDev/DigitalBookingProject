import React from "react";
import FormCalendar from "./formCalendar/formCalendar";
import FormList from "./formList/formList";
import "../../../css/formSearch.css"
import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";
import Logo from "../../atoms/logos/logo"
import trash from "../../../resources/icons/trash-solid.svg";

const FormSearch = (prop) =>{

    const {setFilterBy,setCityFilter,setDateIn,setDateOut,dateOut,dateIn} = prop

    const [ place, setPlace] = React.useState(null);
    const [ from , setFrom ] = React.useState(null);
    const [ to, setTo] = React.useState(null);


    const [ciudades,setCiudades] = React.useState(null)

    const handlerSubmit = (e)=>{
        e.preventDefault()
        if(place && !(to && from)) {
            setCityFilter(place)
            setFilterBy("city"+place.id)
        } else if(to && from && !place) {
            setDateIn(from)
            setDateOut(to)
            setFilterBy("date"+from+to)
        }else if (to && from && place){
            setDateIn(from)
            setDateOut(to)
            setCityFilter(place)
            setFilterBy("city-date"+from+to+place.id)
        }

    }

    const handleClick = () => {
        console.log("HOLA");
        setFilterBy("random")
        setCityFilter(null);
        setDateIn(null);
        setDateOut(null);
    }

    React.useEffect(()=> {
        CallApi(`${URL}/cities/list`,{method: "GET"})
        .then((res)=>{
            setCiudades(res)
        })
    },[])    

    return(
        <div className="divSearch" >
            <h1 className="h1Search" >Busca Ofertas en hoteles, casas y mucho más</h1>
            <form  className="formSearch">
                {ciudades &&<FormList ciudades={ciudades} setPlace={setPlace}/>}
                <FormCalendar setDateIn={setFrom} setDateOut={setTo} dateOut={from} dateIn={to}/>
                <button  type="submit" className="buttonSearch" onClick={(e)=>{handlerSubmit(e)}} >Buscar</button>
                <div className="bin" onClick={()=> {handleClick()}}>
                    <Logo svg={trash}/>
                </div>
            </form>      
        </div>
    )
} 

export default FormSearch;