import React from "react";

function Header (props) {
    return (
        <header className="contenedor-imagen-alimento bg-success">
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-white align-self-center">
                    <img 
                        className='imagen-platillo'
                        src={require(`../imagenes/restaurante-${props.platillo}.png`)}
                        alt='foto' />


                    </div>
                        <div className="contenedor-encabezado col-md-6 mt-5 text-white">
                            <p className='texto-encabezado'><strong>{props.texto}</strong></p>
                        </div>
                    </div>

                </div>

            </div>


    </header>

    )
}

export default Header