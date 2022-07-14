import React from "react";
import H1 from "../../atoms/h1/h1";
import P from "../../atoms/p/p";
import InputField from "../inputField/inputField";
import Icon from "../../../resources/icons/circle-check.svg"
import Image from "../../atoms/image/image";
import "../../../css/timeArrive.css"
import Label from "../../atoms/label/label";

const TimeArrive = (props) => {
    const { setTime } = props;

    const onDropdownChange = (target) => {
        setTime(target.value)
    }

    return(
        <div className="divTimeArrive">
            <H1>Tu horario de llegada</H1>
            <div className="divInput">
                <div className="divTopBlock">
                    <Image url={Icon}></Image>
                    <P>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</P>
                </div>
                <div className="divSelect">
                    <Label>Indicá tu horario estimado de llegada</Label>
                    <div className="divSelectShadow">
                        <select onChange={event => onDropdownChange(event.target)}>
                            <option selected disabled>Seleccionar hora de llegada</option>
                            <option>01:00AM</option>
                            <option>02:00AM</option>
                            <option>03:00AM</option>
                            <option>04:00AM</option>
                            <option>05:00AM</option>
                            <option>06:00AM</option>
                            <option>07:00AM</option>
                            <option>08:00AM</option>
                            <option>09:00AM</option>
                            <option>10:00AM</option>
                            <option>11:00AM</option>
                            <option>12:00AM</option>
                            <option>01:00PM</option>
                            <option>02:00PM</option>
                            <option>03:00PM</option>
                            <option>04:00PM</option>
                            <option>05:00PM</option>
                            <option>06:00PM</option>
                            <option>07:00PM</option>
                            <option>08:00PM</option>
                            <option>09:00PM</option>
                            <option>10:00PM</option>
                            <option>11:00PM</option>
                            <option>12:00PM</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeArrive;