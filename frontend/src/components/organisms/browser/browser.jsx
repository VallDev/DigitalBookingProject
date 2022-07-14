import React from "react";
import FormSearch from "../../molecules/formSearch/formSearch";

const Browser = (props) => {

    const {setFilterBy,setCityFilter,setDateIn,setDateOut,dateOut,dateIn} = props

    return(
        <div>
            <section>
                <FormSearch setFilterBy={setFilterBy} setCityFilter={setCityFilter} setDateIn={setDateIn} setDateOut={setDateOut} 
                dateOut={dateOut} dateIn={dateIn}/>
            </section>
        </div>
    )
}

export default Browser;