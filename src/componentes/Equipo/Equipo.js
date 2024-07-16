import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js";
import hexToRgba from "hex-to-rgba";

const Equipo = (props)=>{
    const {colorPrimario,colorSecundario, titulo, id}=props.datos;
    const colorFondo=hexToRgba(colorPrimario,0.5);
    //Destructuracion 
    
    const obj={
        backgroundColor: colorFondo
    };
    const {colaboradores,eliminarColaborador,actualizarColor,like}=props;


    return <>
    { colaboradores.length>0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value, id);
                }}
            />
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=> <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
    } 
    </>
    
};
export default Equipo;