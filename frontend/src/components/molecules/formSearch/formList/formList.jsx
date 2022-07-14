import React from "react";
import "../../../../css/formList.css"

const FormList = (prop) =>{

    const {ciudades,setPlace} = prop

    const onDropdownChange = (target) => {
        setPlace(ciudades[target.value-1])
    }

    return(
        <div className="divList">
            <select className="selectList" onChange={event => onDropdownChange(event.target)} id="locate" name="locate">
                <option className="optionList" key="default" value="0" selected disabled hidden>¿A dónde vamos?</option>
                {ciudades.map(e =>(<option key={e.id} value={e.id}>{e.name}, {e.id_country.name}</option>))} 
            </select>
        </div>
    )
}

export default FormList;