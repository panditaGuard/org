import { useState } from "react";
import "./MiOrg.css"
const MiOrg=(props)=>{
    //Estados - hooks useState
    /* const [mostrar,actualizaMostrar]=useState(true);

    const manejarClick=()=>{
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizaMostrar(!mostrar);
    }; */
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/boton.png" alt="boton" onClick={props.cambiarMostrar}></img>
    </section>
};
export default MiOrg;