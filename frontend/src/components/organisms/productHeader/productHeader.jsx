import React from "react";
import H1 from "../../atoms/h1/h1";
import H2 from "../../atoms/h2/h2";
import Logo from "../../atoms/logos/logo";
import { Link } from "react-router-dom";
import arL from "../../../resources/icons/angle-left-solid.svg"
import "../../../css/productHeader.css"
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductHeader = (props) => {
    const {type, name} = props;
    const [rout, setRout] = React.useState(null);
    const location = useLocation(null)
    const params = useParams();

    React.useEffect(() => {
        if (location.pathname == "/product/"+params.id+"/booking") {
            setRout("/product/"+params.id)
        }else{
            setRout("/");
        }
    },[])

    return(
        <div className="productHeader">
            <div className="leftBlock">
                <H2>{type}</H2>
                <H1>{name}</H1>
            </div>
            {rout && <Link to={rout}>
                <Logo svg={arL}/>
            </Link>}
        </div>
    )
}

export default ProductHeader;