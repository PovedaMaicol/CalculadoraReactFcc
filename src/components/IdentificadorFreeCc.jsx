import React from 'react'
import freeCodeCampLogo  from '../images/fcc_primary_large.jpg';

const IdentificadorFreeCc = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>
    <img 
    src={freeCodeCampLogo}
    className='freecodecamp-logo'
    alt='logo de freeCodeCamp'
    />
  </div>
  )
}

export default IdentificadorFreeCc