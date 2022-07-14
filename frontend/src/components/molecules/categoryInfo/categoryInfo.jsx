import React from "react";
import H2 from "../../atoms/h2/h2";
import H3 from "../../atoms/H3/h3";


const CategoryInfo = (props) => {
    const {type, amount} = props;
    return(
        <div className="categoryInfo">
            <H2>{type}</H2>
            <H3>{amount}</H3>
        </div>
    )
}

export default CategoryInfo;
