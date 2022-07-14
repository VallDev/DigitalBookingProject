import React from "react";

const Option = (props) => {
    const { value, selected } = props;
    return(
        <option selected={selected} value={value}>{props.children}</option>
    )
    
}

export default Option;