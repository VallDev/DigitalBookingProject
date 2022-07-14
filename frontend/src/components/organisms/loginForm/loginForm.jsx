import React from "react";
import "../../../css/login.css"
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import InputField from "../../molecules/inputField/inputField";
import P from "../../atoms/p/p";
import ToRegister from "../../molecules/Buttons/register/toRegister";
import H1 from "../../atoms/h1/h1";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { URL } from "../../../resources/const/url";
import { CallApi } from "../../../util/apiCall";
import NeedLogg from "../../molecules/needLogg/needLogg";



const schema = yup.object({
    email: yup.string().email("Debe ser un email valido").required("Se requiere un correo elecotronico"),
    password: yup.string().min(6,"La contraseña debe tener al menos 6 caracteres").required("Se requiere una contraseña"),
}).required();


const LoginForm = (props) => {
    const { setIsLogged, logged, needLogg, setNeedLogg } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({ 
        resolver: yupResolver(schema)
    });
    const [failLogged, setFailLogged] = React.useState(false);

    const navigate = useNavigate();
    const onSubmit = (data) =>{
        CallApi(URL+"/authenticate",
        {
            method: "POST",
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    "username": data.email,
                    "password": data.password
                })
        })
        .then((data) => {
            if (data != undefined) {
                setIsLogged(true);
                setNeedLogg(false);
                navigate("/")
                window.sessionStorage.setItem("jwt", data.jwt);
                window.sessionStorage.setItem("user", data.id_user)
            }
        })
        const checkLogg = () => {
            if (!logged) {
                setFailLogged(true);
            }
        }
        setTimeout(checkLogg,800)
        
    };
    return(
        <div className="loginForm">
            {needLogg && <NeedLogg>Para realizar una reserva necesitas iniciar sesion</NeedLogg>}
            <H1>Iniciar sesión</H1>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <InputField  value={"Correo electronico"} register={register("email")}/>
                    {<P>{errors.email?.message}</P>}
                    
                    <InputField type={"password"}  value={"Contraseña"} register={register("password")}/>
                    {<P>{errors.password?.message}</P>}

                    <input type="submit" value="Ingresar"></input> 
                </form>
                <ToRegister>¿Aun no tienes cuenta?<span>Registrarse</span></ToRegister>
                {failLogged && <span className="errorLogin">Error al iniciar sesion por favor intente mas tarde</span>}
            </div>
            
        </div>
        
    )
}

export default LoginForm;