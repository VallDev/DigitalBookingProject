import React from "react";
import Button from "../../../atoms/button/button";

const LogIn = (props) => {
    const {handleClick} = props 
    return(
        <div className="LogIn">
            <Button handleClick={handleClick} value={true}>Iniciar sesion</Button>
        </div>
        
    )
}
export default LogIn;