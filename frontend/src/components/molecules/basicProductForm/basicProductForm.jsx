import React from "react";
import P from "../../atoms/p/p";

const BasicProductForm = (props) => {
    const {register, cityList, categoryList, errors} = props;
    return(
        <div className="basicProductForm">
            <div className="topForm">
                    <div className="input-field">
                        <label className="productLabel">Nombre de la propiedad</label>
                        <input className="productInput" type="text" {...register("basic.name")}/>
                        {errors.basic && <P>{errors.basic.name?.message}</P>}
                    </div>
                    <div className="input-field">
                        <label className="productLabel">Categoria</label>
                        <select className="productSelect" {...register("basic.id_category")}>
                            <option value="" selected disabled hidden>Categoria</option>
                            {categoryList && categoryList.map((elem) => {
                                return (<option key={elem.id} value={elem.id}>{elem.title}</option>)
                            })}
                        </select>
                        {errors.basic && <P>{errors.basic.id_category?.message}</P>}
                    </div>
                </div>
                <div className="botForm">
                    <div className="input-field">
                        <label className="productLabel">Direccion</label>
                        <input className="productInput"  type="text" {...register("basic.adress")}/>
                        {errors.basic && <P>{errors.basic.adress?.message}</P>}
                    </div>
                    <div className="input-field">
                        <label className="productLabel">Ciudad</label>
                        <select className="productSelect" {...register("basic.id_city")}>
                            <option value="" selected disabled hidden>Ciudad</option>
                            {cityList && cityList.map((elem) => {
                                return (<option key={elem.id} value={elem.id}>{elem.name}</option>)
                            })}
                        </select>
                        {errors.basic && <P>{errors.basic.id_city?.message}</P>}
                    </div>
                </div>
                <div className="input-field titleDescriptionBasic">
                    <label className="productLabel">Título</label>
                    <input placeholder="Hotel Mirador" className="productInput titleDescriptionBasic" {...register("basic.title_description")}></input>
                    {errors.basic && <P>{errors.basic.title_description?.message}</P>}
                </div>
                <div className="input-field description">
                    <label className="productLabel">Descripcion</label>
                    <textarea placeholder="Escribir aquí" className="productInput DescriptionBasic" {...register("basic.description")}></textarea>
                    {errors.basic && <P>{errors.basic.description?.message}</P>}
                </div>
        </div>
    )
} 

export default BasicProductForm;