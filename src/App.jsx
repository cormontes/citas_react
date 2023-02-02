import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect } from "react";

function App() {
  //se obtiene lo que contiene el localStore y lo pasa a pacientes el objeto
  const [pacientes, setPacientes] =  useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  //cada vez que haya un cambio en pacientes se ejecutara
  //lo que esta adentro del useEffect
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes));
  },[pacientes])

  const eliminarId = (id)=>{
      const pacienteActualizado = pacientes.filter(paciente=>paciente.id!=id)
      //console.log(pacienteActualizado)
      setPacientes(pacienteActualizado)
  }

  return (
    <div className=" container mx-auto my-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarId={eliminarId}
        />
      </div>
    </div>
  )
}

export default App
