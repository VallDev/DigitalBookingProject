import React from "react";
import Button from "../../../atoms/button/button";
import H2 from "../../../atoms/h2/h2";
import User from "../../user/user";
import Logo from "../../../atoms/logos/logo";
import xmark from "../../../../resources/icons/xmark-solid.svg"

const MenuTop = (props) => {
    const {isLogged, setIsOpen, name, lastname} = props;

    return(
        <div className="MenuTop">
            <div className="xButton" onClick={()=> {setIsOpen(false)}}>
                <Logo svg={xmark}/>
            </div>
            {!isLogged && <div className="MenuTopUnlogged">
                <H2>Menu</H2>
            </div>}
            {isLogged && <div className="MenuTopLogged">
                <User name={name} lastname={lastname}></User>
            </div>} 
        </div>
    )
}

export default MenuTop;