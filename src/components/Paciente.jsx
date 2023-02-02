import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarId}) => {
    //Extraer a variables valores del objeto
    const {nombre, propietario, fecha, email, sintomas, id} = paciente

    const handleEliminar = ()=>{
        eliminarId(id)
    }

  return (
    <div className="bg-white m-3 py-10 px-5 rounded-md shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">email:{' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta:{' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        
        <div className="flex justify-between mt-10">
            <button 
                type='button'
                onClick={() => setPaciente(paciente)}
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase 
                rounded-md transition-all'>
                Editar
            </button>
            <button 
                type='button'
                onClick={handleEliminar}
                className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase 
                rounded-md transition-all'>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente
