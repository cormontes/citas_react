import React from 'react'
import { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarId}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" text-black text-center uppercase text-3xl font-bold">Listado Pacientes</h2>

          <p className="mt-5 mb-10 text-center text-xl font-bold">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
    
          {pacientes.map((paciente)=>(
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarId={eliminarId}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" text-black text-center uppercase text-3xl font-bold">No hay pacientes</h2>

            <p className="mt-5 mb-10 text-center text-xl font-bold">
              Comienza agregando pacientes {' '}
              <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes
