import React from "react";
import ProductHeader from "../productHeader/productHeader";
import BookingDetailed from "../../molecules/bookingDetails/bookingDetails";
import ProductPolicies from "../productPolicies/productPolicies";
import FormBooking from "../formBooking/formBooking"
import NeedLogg from "../../molecules/needLogg/needLogg";

import "../../../css/bookingTemplate.css"

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { URL } from "../../../resources/const/url";
import { CallApi } from "../../../util/apiCall";

const BookingTemplate = (props) => {
    const { logged } = props;
    const params = useParams();
    const [product, setProduct] = React.useState(null);
    const [dateOut, setDateOut] = React.useState([])
    const [dateIn, setDateIn] = React.useState([])
    const [monthAmount, setMonthAmount] = React.useState(2);
    const [width, setWidth] = React.useState()

    const [time, setTime] = React.useState(null);

    const [isOk, setIsOk] = React.useState(true);

    const navigate = useNavigate();

    let user_id = window.sessionStorage.getItem("user")


    React.useEffect(()=> {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        if (window.matchMedia("(max-width: 700px)").matches) {
            setMonthAmount(1);
        }else (
            setMonthAmount(2)
        )
    },[width])

    const [arrayFechas, setArrayFechas] = React.useState({
        "2022":{
            "1":[],
            "2":[],
            "3":[],
            "4":[],
            "5":[],
            "6":[],
            "7":[],
            "8":[],
            "9":[],
            "10":[],
            "11":[],
            "12":[]
    },
        "2023":{
            "1":[],
            "2":[],
            "3":[],
            "4":[],
            "5":[],
            "6":[],
            "7":[],
            "8":[],
            "9":[],
            "10":[],
            "11":[],
            "12":[]
    },
});

                let añoFrom
                let añoTo 
                let mesFrom 
                let mesTo 
    
                let diaFrom 
                let diaTo

    React.useEffect(()=>{
        const token = window.sessionStorage.getItem('jwt');
        CallApi(URL+"/products/get/"+params.id,
        {
            method: "GET",
            headers: 
                { 
                    "Authorization" : `Bearer ${token}`
                },
        })
        .then((res)=> {
            setProduct(res);
        })
    },[])

    React.useEffect(()=>{
        if(!logged){
            navigate("/")
        }
    },[logged])

    React.useEffect(()=>{
        CallApi(`${URL}/bookings/get-by-product/${params.id}`)
        .then((res)=>{
            res.forEach((elem)=> {
                
                añoFrom = elem.date_from.slice(0,4);
                añoTo = elem.date_to.slice(0,4);

                mesFrom = elem.date_from.slice(5,7);
                mesTo = elem.date_to.slice(5,7);

                diaFrom = elem.date_from.slice(8,10);
                diaFrom = parseInt(diaFrom)
                diaTo= elem.date_to.slice(8,10);

                if (añoFrom === añoTo) {
                    if (mesFrom === mesTo) {
                        if(mesFrom == 11||mesFrom == 12||mesFrom == 10 ){
                            for (let i = diaFrom; i <= diaTo; i++) {
                                arrayFechas[añoFrom][mesFrom].push(i)
                            }
                        }
                        else{
                            for (let i = diaFrom; i <= diaTo; i++) {
                            arrayFechas[añoFrom][mesFrom.slice(1,2)].push(i)
                            }
                        }
                    }
                    else{
                        if(mesFrom == 11||mesFrom == 12||mesFrom == 10 ){
                            for (let i = diaFrom; i <= 31; i++) {
                                arrayFechas[añoFrom][mesFrom].push(i)
                            }
                            if (mesTo == 11 || mesTo == 12 || mesTo == 10) {
                                for (let i = 1; i <= diaTo; i++) {
                                    arrayFechas[añoFrom][mesTo].push(i)
                                }
                            }
                            else{
                                for (let i = 1; i <= diaTo; i++) {
                                    arrayFechas[añoFrom][mesTo.slice(1,2)].push(i)
                                }
                            }
                        }
                        else{
                            for (let i = diaFrom; i <= 31; i++) {
                                arrayFechas[añoFrom][mesFrom.slice(1,2)].push(i)
                            }
                            if (mesTo == 11 || mesTo ==12 || mesTo ==10) {
                                for (let i = 1; i <= diaTo; i++) {
                                    arrayFechas[añoFrom][mesTo].push(i)
                                }
                            }
                            else{
                                for (let i = 1; i <= diaTo; i++) {
                                    arrayFechas[añoFrom][mesTo.slice(1,2)].push(i)
                                }
                            }
                        }
                    }
                }
        }) 
    })
    },[])

    return(
        <div>
            {product && <ProductHeader name={product.name} type={product.id_category.title}/>}
            <div className="divBookingContainer">
                {!isOk && <NeedLogg>Para poder realizar una reserva completa los campos correctamente</NeedLogg>}
                <div className="divBookingDetailed">
                {product && <FormBooking arrayFechas={arrayFechas} isOk={isOk} setDateIn={setDateIn} setDateOut={setDateOut} monthAmount={monthAmount} setTime={setTime}/>}
                {product && <BookingDetailed isOk={isOk} setIsOk={setIsOk} product={product} dateIn={dateIn} dateOut={dateOut} time={time}/>}              
                </div>
            </div>
            {product && <ProductPolicies rules={product.rules}/>}
        </div>
    )
}

export default BookingTemplate;