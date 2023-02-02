import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  // todos los useState
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(()=>{
    //si llenamos el objeto enviamos los valores a los useState
    if(Object.keys(paciente).length > 0){
      //console.log("paciente nuevo")
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  //Generar Id para key
  const generarId = ()=>{
    const fecha = Date.now().toString(32)
    const randon = Math.random().toString(32).substring(2)
    return fecha+randon
  }

  // boton submit de formulario
  const handleSubmit = (e)=>{
    e.preventDefault()
    //si uno de los campos esta vacio enviar verdadero a setError
    if ([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return
    }
    setError(false)

    //objeto de pacientes
    const objetoPacientes={
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
    
    if(paciente.id){
      //Actualizar registro de paciente
      objetoPacientes.id = paciente.id
      //console.log(objetoPacientes)
      const pacientesActualizados = pacientes.map((pacienteState)=>
      pacienteState.id === paciente.id ? objetoPacientes : pacienteState)      
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //nuevo registro
      objetoPacientes.id = generarId()
      //se crea una copia del arreglo pacientes y luego se agrega el objetopacientes
      setPacientes([...pacientes, objetoPacientes])
    }
    
    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-5 mx-5">
      <div>
        <h1 className="font-bold text-3xl uppercase text-center">
          Seguimiento pacientes
        </h1>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md py-10 px-5 rounded-md">
          
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label htmlFor="mascota" 
              className="block text-gray-700 uppercase font-bold">
              Nombre Mascota:
            </label>

            <input 
              id="mascota"
              type="text" 
              placeholder='Nombre de la mascota' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" 
              className="block text-gray-700 uppercase font-bold">
              Nombre Propietario:
            </label>

            <input 
              id="propietario"
              type="text" 
              placeholder='Nombre del propietario' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" 
              className="block text-gray-700 uppercase font-bold">
              Email:
            </label>

            <input 
              id="email"
              type="email" 
              placeholder='Email Contacto Propietario' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" 
              className="block text-gray-700 uppercase font-bold">
              Alta:
            </label>

            <input 
              id="alta"
              type="date" 
              placeholder='Fecha de Alta' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e)=>setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" 
              className="block text-gray-700 uppercase font-bold">
              Sintomas:
            </label>
            <textarea
              id='sintomas'
              className="boder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder='Describe los sintomas'
              value={sintomas}
              onChange={(e)=>setSintomas(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full text-white uppercase font-bold p-4 rounded-md cursor-pointer transition-colors mb-5"
            value={paciente.id ? "Editar paciente" : "Agregar paciente" }
          />
        </form>
      </div>
    </div>
  )
}

export default Formulario
