import React from "react";
import MenuTop from "../../molecules/menu/menuTop/menuTop";
import MenuBottom from "../../molecules/menu/menuBottom/menuBottom";

const Menu = (props) => {
    const {role, isOpen, setIsOpen, isLogged, setIsLogged, name, lastname, isLoggin, isRegistering} = props;
    return(
        <>
            {isOpen && <div className="Menu">
                <MenuTop isLogged={isLogged} setIsOpen={setIsOpen} name={name} lastname={lastname}></MenuTop>
                <MenuBottom role={role} isLogged={isLogged} setIsLogged={setIsLogged} isLoggin={isLoggin} isRegistering={isRegistering}></MenuBottom>
            </div>}
        </>
        
    )
}

export default Menu;