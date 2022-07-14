import React from "react";
import H3 from "../../atoms/H3/h3";
import H2 from "../../atoms/h2/h2";
import P from "../../atoms/p/p";

const RulesProductFrom = (props) => {
    const {register, errors} = props;
    return(
        <div className="rulesProductForm">
            <div className="input-block">
                <H2>Normas de la casa</H2>
                <H3>Descripcion</H3>
                <textarea className="ruleTextArea" placeholder="Escribir aqui" type="text" {...register("rules.0.description")}/>
                <input hidden value={"rule"}{...register("rules.0.type")}/>
                {errors.rules && errors.rules[0] && <P>{errors.rules[0].description?.message}</P>}
            </div>
            <div className="input-block">
                <H2>Salud y seguridad</H2>
                <H3>Descripcion</H3>
                <textarea className="ruleTextArea" placeholder="Escribir aqui" type="text" {...register("rules.1.description")}/>
                <input hidden value={"security"}{...register("rules.1.type")}/>
                {errors.rules && errors.rules[1] && <P>{errors.rules[1].description?.message}</P>}
            </div>
            <div className="input-block">
                <H2>Politicas de cancelacion</H2>
                <H3>Descripcion</H3>
                <textarea className="ruleTextArea" placeholder="Escribir aqui" type="text" {...register("rules.2.description")}/>
                <input hidden value={"policy"}{...register("rules.2.type")}/>
                {errors.rules && errors.rules[2] && <P>{errors.rules[2].description?.message}</P>}
            </div>
        </div>
    )
}

export default RulesProductFrom;