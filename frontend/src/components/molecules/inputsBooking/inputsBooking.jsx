import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../molecules/inputField/inputField";
import H1 from "../../atoms/h1/h1";
import "../../../css/inputsBooking.css"
import { URL } from "../../../resources/const/url";
import { CallApi } from "../../../util/apiCall";


const InputsBooking = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    
    React.useEffect(()=>{
        let user_id = window.sessionStorage.getItem("user")
        CallApi(URL+"/users/get/"+user_id)
        .then((data) => {
            setUser(data);
        })
    },[])


    const handleSubmit = (data) => {
        console.log(data);
        navigate("/login")
    };
        return(
        <div className="inputsForm">
            <H1>Completá tus datos</H1>
            <form onSubmit={()=>{handleSubmit()}}>
                {user && <div className="username">
                    <InputField type={"text"} placeHolder={user.name} value={"Nombre"}/>                                        
                    <InputField type={"text"} placeHolder={user.surname} value={"Apellido"}/>
                </div>}
                {user && <div className="dataInputs">
                    <InputField type={"email"} placeHolder={user.email} value={"E-mail"}/>
                    <InputField type={"text"} placeHolder={user.city} value={"Ciudad"}/>
                </div>}
            </form>
        </div>
    )
}

export default InputsBooking;