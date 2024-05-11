import React from 'react'
import '../hojas-de-estilo/BotonCleaner.css'
const BotonCleaner = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
  )
}

export default BotonCleaner