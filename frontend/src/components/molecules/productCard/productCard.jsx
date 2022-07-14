import React from "react";
import Image from "../../atoms/image/image";
import { Link } from "react-router-dom";
import Description from "../description/description";
import SummaryCard from "../summaryCard/summaryCard";
import "../../../css/productCard.css"


const ProductCard = (props) => {
    const {obj} = props
    const [areDetails, setAreDetails] = React.useState(false);

    return(
        <div className="productCard">
            <div className="image">
                <Image url={obj.images[0].urlimg} alt={obj.id_category.title+" image"}></Image>
            </div>
            <div className="information">
                {areDetails ? <Description setAreDetails={setAreDetails}>{obj.description}</Description> 
                : <SummaryCard location={obj.id_city} type={obj.id_category.title} rating={obj.stars} points={obj.rating} name={obj.name} features={obj.features} description={obj.description} setAreDetails={setAreDetails}/>}
                <div className="Link">
                    <Link to={"/product/"+obj.id}>VER MAS</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;