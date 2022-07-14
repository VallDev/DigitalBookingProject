import React from "react";
import { ALL_FEATURES } from "../../../resources/const/ALL_FEATURES";
import Logo from "../../atoms/logos/logo";
import Button from "../../atoms/button/button";
import plus from "../../../resources/icons/plus-solid.svg"
import P from "../../atoms/p/p";

const FeatureProductForm = (props) => {
    const {createNew, register, index} = props;
    const [icon, setIcon] = React.useState(null);
    const [isLast, setIsLast] = React.useState(true);
    const handleChange = (value) => {
        setIcon(ALL_FEATURES[value].icon)
        console.log(ALL_FEATURES[value].icon);
    }
    const handleClick = () => {
        setIsLast(false);
        createNew();
    }

    return(
        <div className="featureProductForm">
            <label className="featureLabel">Nombre</label>
            <div className="featureLine">
                <div className="feature-field">
                    <select className="featuresSelect" {...register("features."+index+".name_icon")} onChange={(e) => {handleChange(e.target.value)}}>
                    <option value="" selected disabled hidden>Atributo</option>
                        {
                            Object.keys(ALL_FEATURES).map((key, index) => {
                                return(<option key={index} value={key}><div>{ALL_FEATURES[key].text}</div></option>)
                            })
                        }
                    </select>
                </div>
                <div className="feature-icon">
                    {icon && <Logo svg={icon}/>}
                </div>
                <div className="buttonContainer">
                    {isLast && <Button handleClick={handleClick}><Logo svg={plus}/></Button>}
                </div>
            </div>
        </div>
    )
}

export default FeatureProductForm;