import React from "react";
import Button from "../../atoms/button/button";
import Logo from "../../atoms/logos/logo";
import User from "../user/user";
import ToLogIn from "../Buttons/logIn/toLogIn";
import ToRegister from "../Buttons/register/toRegister";
import Administrator from "../Buttons/administrator/administrator";
import { useNavigate } from "react-router-dom";


import bs from "../../../resources/icons/bars-solid.svg"



const HeaderRight = (props) => {
    const {isLogged, setIsLogged, name, lastname, isLoggin, isRegistering, setIsOpen, role} = props;
    const navigate = useNavigate();

    const unLogUser = () => {
        setIsLogged(false);
        window.sessionStorage.clear()
        navigate("/")
    }

    return(
        <div className="Right">
            {!isLogged && <div className="RightUnlogged">
                <ToLogIn isActive={isLoggin}>Iniciar sesion</ToLogIn>
                <ToRegister isActive={isRegistering}>Crear cuenta</ToRegister>
            </div>}
            {isLogged && <div className="RightLogged">
                {role === "ROLE_ADMIN" && <Administrator/>}
                <User name={name} lastname={lastname}></User>
                <Button handleClick={unLogUser} value={false}>X</Button>
            </div>}
            <Button handleClick={setIsOpen} value={true}><Logo svg={bs}/></Button>
        </div>
    )
}

export default HeaderRight;