import React from "react";
import Label from "../../atoms/label/label";
import Option from "../../atoms/option/option";
import locations from "../../../resources/json/locations.json";


const SelectField = (props) => {
    const { register } = props;
    return(
        <div>
            <Label>{props.children}</Label>
            <select {...register}>
                <Option select="selected">Seleccione un lugar</Option>
            {locations.map((elem)=> {
                return(<Option key={elem.id} value={elem.location}>{elem.location}</Option>)
            })}
            </select>
        </div>

    )
}

export default SelectField;