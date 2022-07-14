import React from "react";
import Button from "../../../atoms/button/button";

const Register = (props) => {
    const {handleClick, isActive} = props 
    return(
        <div className="Register">
            {!isActive && <Button handleClick={handleClick} value={"Register"}>Crear cuenta</Button>}
        </div>
        
    )
}
export default Register;