import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-white text-center mb-5 rounded-lg p-2 font-bold uppercase">
        {children}
    </div>
  )
}
export default Error
