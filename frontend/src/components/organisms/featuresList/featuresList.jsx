import React from "react";
import FeaturesDetailed from "../../molecules/features/featuresDetailed";
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import "../../../css/featuresList.css"

const FeaturesList = (props) => {
    const {features} = props;
    return(
        <div className="featuresList">
            <SectionHeader  title={"¿Qué ofrece este lugar?"}/>
            <FeaturesDetailed features={features}/>
        </div>
    )
}

export default FeaturesList; 