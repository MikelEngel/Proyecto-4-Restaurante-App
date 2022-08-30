import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>

      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='foto' />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> - servicio - <strong>{props.alimento}</strong></p>
        <p className='frase-testimonio'><strong>{props.frase}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>

      </div>

    </div>
  )
}

export default Testimonio

