import React from "react";
import Image from "../../atoms/image/image";
import CategoryInfo from "../categoryInfo/categoryInfo";
import "../../../css/categoryCard.css"

const CategoryCard = (props) => {
    const {url, alt, type, amount, value, setCategoryFilter, setFilterBy} = props;


    const handleClick = () => {
        setCategoryFilter(value)
        setFilterBy("category"+value.id)
    }

    return(
        <div className="CategoryCard" onClick={()=>{handleClick()}}>
            <Image url={url} alt={alt}/>
            <CategoryInfo type={type} amount={amount}/>
        </div>
        
    )
}

export default CategoryCard;