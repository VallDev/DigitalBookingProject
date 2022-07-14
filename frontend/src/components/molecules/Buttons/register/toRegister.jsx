import React from "react";
import { Link } from "react-router-dom";

const ToRegister = (props) => {
    const {isActive} = props 
    return(
        <>
            {!isActive && <Link to="/register">
                <p className="toRegister">{props.children}</p>
            </Link>}
        
        </>
        
        
    )
}
export default ToRegister;