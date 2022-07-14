import React from "react";
import { Link } from "react-router-dom";


const ToLogIn = (props) => {
    const {isActive} = props 
    return(
            <>
            {!isActive && <Link to="/login">
                <p className="toLogIn">{props.children}</p>
            </Link>}
            </>
    )
}
export default ToLogIn;