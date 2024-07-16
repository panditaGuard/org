import { useState } from "react";
import "./Campo.css";
const Campo =(props)=>{
    //Destructuracion
    const {type="text"}=props;
    console.log(props.type);
    const recibirValor=(e)=>{
        console.log("cambio",e.target.value);
        props.actualizarValor(e.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={recibirValor} type={type}/>
    </div>
};

export default Campo;

