import React from "react";
import DataInput from "../../atoms/input/dataInput";
import Label from "../../atoms/label/label";


const InputField = (props) => {
    const {placeHolder,register, value, type} = props;
    return(
        <div className="inputField">
            <Label>{value}</Label>
            <DataInput type={type} register={register} placeHolder={placeHolder}/>
        </div>
    )
}

export default InputField;