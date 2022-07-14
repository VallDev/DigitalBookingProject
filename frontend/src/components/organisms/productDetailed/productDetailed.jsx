import React from "react";
import "../../../css/productDetailed.css"
import { useParams } from "react-router-dom";                       
import ProductHeader from "../productHeader/productHeader";
import LocationHeader from "../locationHeader/locationHeader";
import DetailedDescription from "../detailedDescription/detailedDescription";
import FeaturesList from "../featuresList/featuresList";
import ProductPolicies from "../productPolicies/productPolicies";
import ProductGalery from "../productGalery/productGallery";
import Booking from "../booking/booking"

import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";

const ProductDetailed = (props) => {
    const params = useParams();
    const [product,setProduct] = React.useState(null);
    const [images, setImages] = React.useState(null);
    const [features, setFeatures] = React.useState(null);
    const { logged, setNeedLogg } = props;
    const [dateOut, setDateOut] = React.useState([])
    const [dateIn, setDateIn] = React.useState([])

    React.useEffect(()=> {
        let imgs = [];
        let feat = [];
        CallApi(`${URL}/products/get/${params.id}`,{method: "GET"})
        .then((res)=>{
            setProduct(res);
            res.images.map((elem)=>{
                imgs.push({original:elem.urlimg})
            })
            setImages(imgs)
            res.features.map((elem)=>{
                feat.push(elem.name_icon)
            })
            setFeatures(feat)
            setImages(imgs)
        })
    },[])

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
        <body className="productDetailed">
            {product && <ProductHeader name={product.name} type={product.id_category.title}/>}
            {product &&<LocationHeader adress={product.adress} location={product.id_city.name+" "+product.id_city.id_country.name} rating={product.stars} points={product.rating}/>}
            {product && images && <ProductGalery images={images}/>}
            {product &&<DetailedDescription title={product.title_description}>{product.description}</DetailedDescription>}
            {product && features &&<FeaturesList features={features}/>}
            <Booking setDateIn={setDateIn} setDateOut={setDateOut} arrayFechas={arrayFechas} logged={logged} setNeedLogg={setNeedLogg}/>
            {product && <ProductPolicies rules={product.rules}/>}
        </body>
    )
}

export default ProductDetailed;
