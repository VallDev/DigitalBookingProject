import React from "react";
import { useLocation } from "react-router-dom";
import "../../../css/header.css"
import HeaderLeft from "../../molecules/headerLeft/headerLeft";
import HeaderRight from "../../molecules/headerRight/headerRight";
import Menu from "../menu/menu";

import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";

const Header = (props) => {
    const {isLogged, setIsLogged, role} = props; 
    
    const [isOpen,setIsOpen] = React.useState(false)
    const [isLoggin, setIsLoggin] = React.useState(false)
    const [isRegistering, setIsRegistering] = React.useState(false)
    const [name, setName] = React.useState("Bruno")
    const [lastname, setLastname] = React.useState("Rodriguez")

    const location = useLocation()

    let user_id = window.sessionStorage.getItem("user")


    React.useEffect(()=> {
        if (isLogged) {
            CallApi(URL+"/users/get/"+user_id)
            .then((data) => {
                setName(data.name);
                setLastname(data.surname);
            })
        }
    },[isLogged])


    React.useEffect(() => {
        if(location.pathname=="/login"){
            setIsLoggin(true);
            setIsRegistering(false);
        }
        if(location.pathname=="/register"){
            setIsRegistering(true);
            setIsLoggin(false);
        }
        if(location.pathname=="/"){
            setIsLoggin(false);
            setIsRegistering(false);
        }
        setIsOpen(false)
    },[location])

    return(
        <header>
            <HeaderLeft/>
            <HeaderRight name={name} lastname={lastname}isLogged={isLogged} setIsLogged={setIsLogged} isLoggin={isLoggin} isRegistering={isRegistering} setIsOpen={setIsOpen} role={role}></HeaderRight>
            <Menu name={name} lastname={lastname} isOpen={isOpen} setIsOpen={setIsOpen} isLogged={isLogged} setIsLogged={setIsLogged} isLoggin={isLoggin} isRegistering={isRegistering} role={role}></Menu>
        </header>
    )
}

export default Header;