import React from "react";
import ProductHeader from "../productHeader/productHeader";
import H1 from "../../atoms/h1/h1";
import H2 from "../../atoms/h2/h2";
import FeatureProductForm from "../../molecules/featureProductForm/featureProductForm"
import RulesProductFrom from "../../molecules/rulesProductForm/rulesProductForm";
import ImageProductForm from "../../molecules/imageProductForm/imageProductForm";
import P from "../../atoms/p/p";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";
import BasicProductForm from "../../molecules/basicProductForm/basicProductForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import NeedLogg from "../../molecules/needLogg/needLogg";

import "../../../css/createProductTemplate.css"


const CreateProductTemplate = () => {
    const [cityList, setCityList] = React.useState(null);
    const [categoryList, setCategoryList] = React.useState(null);
    const [feat, setFeat] = React.useState([]);
    const [img, setImg] = React.useState([]);
    const [invalidRequest, setInvalidRequest] = React.useState(false);
    const navigate = useNavigate();
    let featIndex = 0;
    let imgIndex = 0;

    const schema = yup.object().shape({
        basic: yup.object().shape({
            name: yup.string().required("El nombre es un campo requerido"),
            id_city: yup.string().required("La ciudad es un campo requerido"),
            adress: yup.string().required("La direccion es un campo requerido"),
            id_category: yup.string().required("La categoria es un campo requerido"),
            description: yup.string().required("La descripcion es un campo requerido"), 
            title_description: yup.string().required("El titulo de la descripcion es un campo requerido")
        }), 
        rules: yup.array().of(
            yup.object().shape({
                description: yup.string().required("Campo requerido")
            })
        ),
        images: yup.array().min(5, "Ingrese al menos 5 imagenes").of(
            yup.object().shape({
                urlimg: yup.string().url("Debe ser un url valido").required("Se requiere de un url")
            })
        )

    })

    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema)});

    React.useEffect(()=> {
        CallApi(`${URL}/cities/list`)
        .then(data => setCityList(data));

        CallApi(`${URL}/categories/list`)
        .then(data => setCategoryList(data));

        setFeat([<FeatureProductForm  index={featIndex} createNew={createNew} register={register}/>])
        setImg([<ImageProductForm index={imgIndex} createNewImage={createNewImage} register={register}/>])
    },[])

    const handleCatch = () => {
        console.log("FALLO");
    }

    const onSubmit = data => {
        const token = window.sessionStorage.getItem('jwt');
        CallApi(`${URL}/products/new`,
        {
            method: "POST",
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://54.190.35.122:8080'
            },
            body: JSON.stringify({
                name: data.basic.name,
                title_description: data.basic.title_description,
                description: data.basic.description,
                adress: data.basic.adress,
                id_category: data.basic.id_category,
                id_city: data.basic.id_city,
                rating: 0,
                stars: 0
            })
        }, handleCatch).then((response) => {
            if (response.id != null) {
                data.images.forEach((image) =>{
                    CallApi(`${URL}/images/new`,{
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': 'http://54.190.35.122:8080'
                        },
                        body: JSON.stringify({
                            urlimg: image.urlimg,
                            title: image.title,
                            id_product: response.id
                        }
                    )})
                })
                data.rules.forEach((rule) =>{
                    if (rule.description !== "") {
                        CallApi(`${URL}/rules/new`,{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': 'http://54.190.35.122:8080'
                            },
                            body: JSON.stringify({
                                type: rule.type,
                                description: rule.description,
                                id_product: response.id
                            }
                        )})
                    }
                })
                data.features.forEach((feature) =>{
                    if (feature.name_icon !== "") {
                        CallApi(`${URL}/features/new`,{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': 'http://54.190.35.122:8080'
                            },
                            body: JSON.stringify({
                                name_icon: feature.name_icon,
                                id_product: response.id
                            }
                        )})
                    }
                })
                navigate("/create/product/successful");
                setInvalidRequest(false)
            }else (setInvalidRequest(true))
        })
    }

    const createNew = () => {
        featIndex++;
        setFeat(oldFeat => [...oldFeat, <FeatureProductForm index={featIndex} register={register} createNew={createNew}/>])
    }

    const createNewImage = () => {
        imgIndex++;
        setImg(oldImg => [...oldImg, <ImageProductForm index={imgIndex} createNewImage={createNewImage} register={register}/>])
    }

    return(
        <body className="createProductTemplate">
            <ProductHeader name="Administración"/>
            <div className="formContainer">
                <H1>Crear propiedad</H1>
                <form onSubmit={handleSubmit(onSubmit)} className="productForm">
                    <BasicProductForm register={register} cityList={cityList} categoryList={categoryList} errors={errors}/>
                    <H2>Agregar atributos</H2>
                    <div className="allFeaturesProductForm">
                        {
                        feat.map((elem) => {
                            return(elem)
                        })
                        }
                    </div>
                    <H2>Políticas del producto</H2>
                    <RulesProductFrom register={register} errors={errors}/>
                    <H2>Cargar imágenes</H2>
                    <div className="allImageProductForm">
                        {
                            img.map((elem, index) => {
                                return(
                                    <>
                                    {errors.images&&errors.images[index]&&<P>{errors.images[index].urlimg?.message}</P>}
                                    {elem}
                                    </>
                                    )
                                
                            })
                        }
                    </div>
                    {<P>{errors.images?.message}</P>}
                    {invalidRequest&& <NeedLogg>¡Algo anda mal! Por favor intentelo mas tarde</NeedLogg>}
                    <input className="sendButton" type="submit" value="Crear"/>
                </form>
            </div>
            
        </body> 
    )
}


export default CreateProductTemplate;