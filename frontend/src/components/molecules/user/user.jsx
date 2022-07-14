import React from "react";
import H2 from "../../atoms/h2/h2";
import Avatar from "../avatar/avatar";


const User = (props) => {
    const {name, lastname} = props;
    return(
        <div className="User">
            <Avatar>{name.charAt(0)+lastname.charAt(0)}</Avatar>
            <div className="UserInfo">
                <H2><span className="firsValue">Hola, </span></H2>
                <H2><span className="secondValue">{name+ " " +lastname}</span></H2>
            </div>
        </div>
    )
}

export default User;