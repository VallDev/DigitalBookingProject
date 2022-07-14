import React from "react";
import HrLine from "../../../atoms/hrLine/hrLine";
import Networks from "../../networks/networks";
import Button from "../../../atoms/button/button";

import ToLogIn from "../../Buttons/logIn/toLogIn";
import ToRegister from "../../Buttons/register/toRegister";
import Administrator from "../../Buttons/administrator/administrator";

const MenuBottom = (props) => {
    const {isLogged, setIsLogged, isLoggin, isRegistering, role} = props;

    return(
        <div className="MenuBottom">
            {!isLogged && <div className="MenuBottomUnlogged">
                <ToLogIn isActive={isLoggin}>Iniciar sesion</ToLogIn>
                {!isLoggin && !isRegistering && <HrLine/>}
                <ToRegister isActive={isRegistering}>Crear cuenta</ToRegister>
            </div>}
            {isLogged && <div className="MenuBottomLogged">
                {role === "ROLE_ADMIN" && <Administrator/>}
                <Button handleClick={setIsLogged} value={false}>Cerrar sesion</Button>
            </div>}
            <HrLine/>
            <Networks/>
        </div>
    )
}   

export default MenuBottom;