import React from "react";
import H2 from "../../atoms/h2/h2";
import H3 from "../../atoms/H3/h3";


const Review = (props) => {
    const {points} = props;
    function calcPoints (){
        if (points == 10) {
            return("Excelente")
        }else if(points >= 8) {
            return("Muy Bueno")
        }else if (points >= 4){
            return("Regular")
        }else{return ("Malo")}
    }

    return(
        <div className="points">
            <H2>{points}</H2>
            <div>
                <H3>{calcPoints()}</H3>
                {props.children}
            </div>
        </div>
        
    )

}

export default Review;
