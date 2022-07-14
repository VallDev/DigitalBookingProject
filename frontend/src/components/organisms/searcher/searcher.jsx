import React from "react";
import { useForm } from "react-hook-form";
import SelectField from "../../molecules/selectField/selectField";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    Location: yup.string()
}).required();

const Searcher = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data)
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <SelectField register={register("Location")}>Lugar</SelectField>
            <input type="submit" value={"send"}/>
        </form>
    )
}

export default Searcher;