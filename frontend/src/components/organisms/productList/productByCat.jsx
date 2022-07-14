import React from "react";
import ProductCard from "../../molecules/productCard/productCard";
import H1 from "../../atoms/h1/h1";

const ProductByCat = (props) => {
    const {list} = props;
    return(
        <div className="productList">
            <H1>{list[0].id_category.title}</H1>
            {list && <div className="productCards">
                {list.map((elem, index)=>{
                    return(<ProductCard key={elem.id} obj={elem}/>)
                })}
            </div>}
        </div>
    )
}

export default ProductByCat;