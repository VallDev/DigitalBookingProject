import React from "react";
import H1 from "../../atoms/h1/h1";
import HrLine from "../../atoms/hrLine/hrLine";
import "../../../css/sectionHeader.css"

const SectionHeader = (props) => {
    const {title} = props;
    return(
        <div className="sectionHeader">
            <H1>{title}</H1>
            <HrLine/>
        </div> 
    )
}

export default SectionHeader;