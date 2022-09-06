import React, {useState} from "react";
import { collection, getDocs } from "firebase/firestore";

const Formulario = ()=> {

const [nombre, setNombre] =useState('')
const [email, setEmail] =useState('')
const [telefono, setTelefono] = useState('')
const [mensaje, setMensaje] = useState ('')

const Validar = (event) => {
    event.preventDefault()
    console.log ('Botón Pulsado')
    if (!nombre.trim()){
    console.log ('El nombre esta vacio')
    return
    }
    if (!email.trim()){
        console.log ('Campo edad esta vacio')
        return
        }
    if (!telefono.trim()){
        console.log ('Campo teléfono esta vacio')
        return
        }
    if (!mensaje.trim()){
        console.log ('Campo mensaje esta vacio')
        return
        }

}

    return (
        <div className="contenedor-formulario">
            
            <form onSubmit={Validar} className="formulario-reserva">

            <div className="py-5">
            <div className="container">
            <div className="row">
                <input  
                placeholder="Tu nombre" 
                className="form-control mb-3" 
                type='text'
                onChange={(e) => {setNombre (e.target.value)}}
                 />
                <input  
                placeholder="Email" 
                className="form-control mb-3" 
                type='text'
                onChange={(e) => {setEmail (e.target.value)}} />
                
                <input  
                placeholder="Teléfono" 
                className="form-control mb-3" 
                type='text'
                onChange={(e) => {setTelefono (e.target.value)}} />
                
                <input  
                placeholder="Mensaje y comentarios" 
                className="form-control mb-3" 
                type='text'
                onChange={(e) => {setMensaje (e.target.value)}} />
                
                <input 
                className="btn btn-info btn-block mb-3" 
                type='submit'  />

                </div>
                </div>
            </div>

            </form>
        </div>
    )

}

export default Formulario