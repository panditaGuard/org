import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo/Equipo.js';
import Footer from './componentes/Footer/Footer.jsx';


function App() {
  const [mostrarFormulario,ActualizarMostrar]=useState(false);
  const [colaboradores,actualizarColaboradores]=useState([
    {
      id: uuidv4(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ]);

  const [equipos, actualizarEquipos]=useState([
      {
        id: uuidv4(),
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuidv4(),
        titulo: "Front-End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
  ]);


  const cambiarMostrar=()=>{
    ActualizarMostrar(!mostrarFormulario);
  };
  //Registrar colaboradores
  const registrarColaborador=(Colaborador)=>{
    console.log("Nuevo Colaborador",Colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores,Colaborador]);
  };

  //Actualizar color de equipo
  const actualizarColor=(color, id)=>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados= equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color;
        
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //Crear Equipo
  const crearEquipo=(nuevoEquipo)=>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4()}])
  };
  //like
  const like = (id)=>{
    console.log("like", id);
    const colaboradoresActualizados=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav= !colaborador.fav;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  };

  //Eliminar colaborador
  const eliminarColaborador =(id)=>{
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores=colaboradores.filter((colaborador)=> colaborador.id!==id);
    actualizarColaboradores(nuevosColaboradores);
  };


  //Lista de equipos

  //Ternario - Condicion ? Se muestra : no se muestra
  //condicion && se muestra
  return ( 
    <div >
      <Header/>
      {mostrarFormulario===true
        ?<Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
        :<></>
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=>{
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
