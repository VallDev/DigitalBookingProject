import React, { useEffect } from "react";
import "../../../css/categoryList.css"
import H1 from "../../atoms/h1/h1";
import CategoryCard from "../../molecules/categoryCard/categoryCard";
import categoriesJson from "../../../resources/json/categories.json" 
import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";

const TOTAL_CATEGORIES = [1,2,3,4];




const CategoryList = (props) => {
    const {setCategoryFilter, setFilterBy} = props;
    const [categories, setCategories] = React.useState(null);
    
    React.useEffect(()=> {
        CallApi(URL+"/categories/list",{method: "GET"})
        .then((response)=>{
            setCategories(response)   
        })
    },[])

    return(
        <div className="categoryList">
            <H1>Buscar por tipo de alojamiento</H1>
            {categories &&<div className="categoryCards">
                {
                    TOTAL_CATEGORIES.map((elem, index)=>{
                        let data = categories[index];
                        return(
                            <CategoryCard setFilterBy={setFilterBy} setCategoryFilter={setCategoryFilter} value={data} key={data.id} type={data.title} amount={data.quantity+" "+data.title} url={data.urlimg} alt={data.title+" image"}/>
                        )
                    })
                }
            </div>}
        </div>
    )
    
}

export default CategoryList;