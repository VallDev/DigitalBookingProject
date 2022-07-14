import React from "react";
import DetailedDescription from "../detailedDescription/detailedDescription";
import "../../../css/productPolicies.css"
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import P from "../../atoms/p/p";
const ProductPolicies = (props) =>{
    const { rules } = props;
    const validate = (type) => {
        return rules.map((elem) => {
            if (elem.type === type) {
                return <P key={elem.id}>{elem.description}</P>
            }
        })
    }

    return(
        <div className="productPolicies">
            <SectionHeader title={"Qué tenés que saber"}/>
            <div className="policies">
                <DetailedDescription title="Normas de la casa">
                    {
                        validate("rule")
                    }
                </DetailedDescription>
                <DetailedDescription title="Salud y seguridad">
                    {
                        validate("security")
                    }
                </DetailedDescription>
                <DetailedDescription title="Politica de cancelaión">
                    {
                        validate("policy")
                    }
                </DetailedDescription>
            </div>
        </div>
        
        
    )
}

export default ProductPolicies;