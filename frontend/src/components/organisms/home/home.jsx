import React from "react";
import CategoryList from "../categoryList/categoryList";
import ProductList from "../productList/productList";
import "../../../css/home.css"
import Browser from "../browser/browser";
import { CallApi } from "../../../util/apiCall";
import { URL } from "../../../resources/const/url";
import H2 from "../../atoms/h2/h2";


import { useState } from "react";


const Home = () => {
    

    const [filterBy, setFilterBy] = useState("random")
    const [list,setList] = React.useState(null);

    const [categoryFilter, setCategoryFilter] = useState();

    const [cityFilter,setCityFilter] = React.useState(null);

    const [dateIn, setDateIn] = useState();
    const [dateOut, setDateOut] = useState(); 

    
    React.useEffect(()=>{      
        if (filterBy === "random") {
            CallApi(URL+"/products/list",{method: "GET"})
            .then((res)=>{
                let start = Math.floor(Math.random() * ((res.length-4) - 0) + 0);
                setList(res.slice(start,start+4));
            })
        }else if (filterBy.includes("category")) {
            CallApi(URL+"/products/get-by-category/"+categoryFilter.id,{method: "GET"})
            .then((res) => {
            setList(res)
            })
        }else if (filterBy.includes("city-date")) {
            CallApi(`${URL}/products/get-by-city-and-date/${dateIn}/${dateOut}/${cityFilter.id}`,{method: "GET"})   // dateFrom/dateTo/city
            .then((res) => {
            setList(res)
            })
        }else if (filterBy.includes("city")) {
            CallApi(`${URL}/products/get-by-city/${cityFilter.id}`,{method: "GET"})
            .then((res)=>{
                setList(res);
            })
        }else if (filterBy.includes("date")){
            CallApi(`${URL}/products/get-by-dates/${dateIn}/${dateOut}`,{method: "GET"})
            .then((res)=>{
                setList(res);
            })
        }
},[filterBy])


    return(
        <body className="Home">
            <Browser setCityFilter={setCityFilter} setDateIn={setDateIn} setDateOut={setDateOut} dateIn={dateIn} dateOut={dateOut} setFilterBy={setFilterBy}/>
            <CategoryList setCategoryFilter={setCategoryFilter} setFilterBy={setFilterBy}/>
            {list && list.length > 0 && <ProductList categoryFilter={categoryFilter} cityFilter={cityFilter} dateIn={dateIn} dateOut={dateOut} filterBy={filterBy} list={list}/>}
            <div className="notFound">
                {list && list.length < 1 && <H2>No se encontraron resultados</H2>}
            </div>
        </body>
    ) 
}

export default Home;