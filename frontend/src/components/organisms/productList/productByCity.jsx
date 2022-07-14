import React from "react";
import ProductCard from "../../molecules/productCard/productCard";
import H1 from "../../atoms/h1/h1";

const ProductByCat = (props) => {
    const {cities} = props;
    return(
        <div className="productList">
            <H1>{cities[0].id_city.name}</H1>
            {cities && <div className="productCards">
                {cities.map((elem, index)=>{
                    return(<ProductCard key={elem.id} obj={elem}/>)
                })}
            </div>}
        </div>
    )
}

export default ProductByCat;