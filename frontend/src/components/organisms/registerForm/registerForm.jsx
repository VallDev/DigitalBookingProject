import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ToLogIn from "../../molecules/Buttons/logIn/toLogIn";
import InputField from "../../molecules/inputField/inputField";
import H1 from "../../atoms/h1/h1";
import P from "../../atoms/p/p";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../../../css/register.css"

import { URL } from "../../../resources/const/url";
import { CallApi } from "../../../util/apiCall";



const schema = yup.object({
    name: yup.string().required("Se requiere un nombre"),
    lastname: yup.string().required("Se requiere un apellido"),
    email: yup.string().email("Debe ser un email valido").required("Se requiere un correo elecotronico"),
    password: yup.string().min(6,"La contraseña debe tener al menos 6 caracteres").required("Se requiere una contraseña"),
    passwordConfirm: yup.string().required("Se requiere una contraseña").oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
}).required();


const RegisterForm = (props) => {
    const { setIsLogged, isLogged, setNeedLogg } = props;
    const [invalidEmail, setInvalidEmail] = React.useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();

    const handleCatch = () => {
        setInvalidEmail(true)
    }

    const onSubmit = (data) => {
        CallApi(URL+"/users/new",
        {
            method: "POST",
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "name": data.name,
                    "surname": data.lastname,
                    "username": data.email,
                    "email": data.email,
                    "password": data.password,
                    "city": data.city,
                    "id_role": 2
                })
        },handleCatch()).then((res) => {
                if(res === undefined) {
                    setInvalidEmail(false)
                    CallApi(URL+"/authenticate",{
                        method: "POST",
                        headers: { 'Content-Type':'application/json'},
                        body: JSON.stringify(
                            {
                                "username": data.email,
                                "password": data.password
                            })
                    }).then((data) => {
                        if (data != undefined) {
                            setIsLogged(true);
                            setNeedLogg(false);
                            navigate("/")
                            window.sessionStorage.setItem("jwt", data.jwt);
                            window.sessionStorage.setItem("user", data.id_user)
                        }
                    })
                }
            }
        )
    };




    return(
        <div className="registerForm">
            <H1>Crear cuenta</H1>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="username">
                        <div className="name">
                            <InputField type={"text"} value={"Nombre"} register={register("name")}/>
                            {<P>{errors.name?.message}</P>}
                        </div>
                        <div className="lastname">
                            <InputField type={"text"} value={"Apellido"} register={register("lastname")}/>
                            {<P>{errors.lastname?.message}</P>}
                        </div>
                    </div>

                    <InputField type={"email"} value={"E-mail"} register={register("email")}/>
                    {<P>{errors.email?.message}</P>}
                    {invalidEmail && <P>Este email ya esta siendo utilizado</P>}

                    <InputField type={"password"} value={"Contraseña"} register={register("password")}/>
                    {<P>{errors.password?.message}</P>}

                    
                    <InputField type={"password"} value={"Confirmar contraseña"} register={register("passwordConfirm")}/>
                    {<P>{errors.passwordConfirm?.message}</P>}

                    <input type="submit" value="Crear cuenta" />
                </form>
                <ToLogIn>¿Ya tenes tu cuenta?<span>Ingresar</span></ToLogIn>
            </div>
        </div>
    )
}

export default RegisterForm;