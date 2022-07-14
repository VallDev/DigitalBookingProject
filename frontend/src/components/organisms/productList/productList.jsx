import React from "react";
import "../../../css/productList.css"
import ProductCard from "../../molecules/productCard/productCard";
import H1 from "../../atoms/h1/h1";

const ProductList = (props) => {
    const {list, dateIn, dateOut, cityFilter, categoryFilter, filterBy} = props;
    const [filterMessagge, setFilterMessagge] = React.useState(null); 
    

    React.useEffect(()=>{ 
        if(filterBy.includes("city-date")){
            setFilterMessagge(cityFilter.name+" entre "+dateIn+" y "+dateOut)
        }else if(filterBy.includes("date")){
            setFilterMessagge("Entre "+dateIn+" y "+dateOut)
        }else if(filterBy.includes("city")){
            setFilterMessagge(cityFilter.name)
        }else if(filterBy.includes("category")){
            setFilterMessagge(categoryFilter.title)
        }else (
            setFilterMessagge("Recomendaciones")
        )
    },[filterBy])
    return(
        <div className="productList">
            {filterMessagge && <H1>{filterMessagge}</H1>}
            {list && <div className="productCards">
                {list.map((elem, index)=>{
                    return(<ProductCard key={elem.id} obj={elem}/>)
                })}
            </div>}
        </div>
    )
}
export default ProductList;