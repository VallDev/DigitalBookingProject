import React from "react";



const DataInput = (props) => {
    const {placeHolder, register, type } = props;
    return(
        <input type={type} {...register} placeholder={placeHolder}></input>
    )
}

export default DataInput;