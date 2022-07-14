import React from "react";
import { Link } from "react-router-dom";
import HrLine from "../../../atoms/hrLine/hrLine";

const Administrator = () => {
    return(
        <div className="adminButton">
            <Link to={"/create/product"}>Administración</Link>
            <HrLine/>
        </div>
    )
}

export default Administrator;