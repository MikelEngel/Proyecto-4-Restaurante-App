import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonios'
import Formulario from './componentes/Formulario'
import Navbar from './componentes/Navbar';
import React, {useEffect} from 'react';
import db from './firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Footer from './componentes/Footer';
import Header from './componentes/Header';


function App() {

  useEffect (()=> {

    const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, 'usuarios'));
      datos.forEach((documento) =>{
        console.log(documento.data());
      });

    }

    obtenerDatos();
    
  }, []);   


  return (
    <div className='App'>
      <div className='contenedor-principal'>

      <div>
        <Navbar />
      </div>


      <div>
        <Header 
        texto="Te damos la bienvenida a nuesto Restaurante, en nuestro menú encontrarás platillos de toda la República Mexicana.
        Cada platillo lleva ingredientes de primera calidad y frescura real, no dejes de probar lo que más te agrada visitanos, felices te atenderemos" 
        platillo='platillo' />
        
      </div>

      <h1>Esto dicen nuestros comensales sobre nuestros platillos</h1>
      <Testimonio 
      imagen='joven'
      nombre='Jonh' 
      alimento='Cena'
      frase='Bonita Velada'
      testimonio='Escojas la cena que escojas siempre será un acierto, un trato muy servicial, amable y con rapidez' />

      <Testimonio 
      imagen='mujer'
      nombre='Rose' 
      alimento='Comida'
      frase='Riquisimo'
      testimonio='El menú es excelente y 100% recomendable, el servicio rápido la gente amable y la comida exquisita! está increíble' />

     <Testimonio 
      imagen='senor'
      nombre='Steve' 
      alimento='Desayuno'
      frase='Almuerzo de negocios'
      testimonio='Cada uno tenía un plato de especialidad que era excelente y el mesero fue muy atento con nostros, nos hizo sentir bienvenidos. ' />
      </div>

      <div>
        <h2>HAZ TU RESERVACIÓN</h2>
        <Formulario />
      </div>


      <div>
        <Footer
        />
      </div>

    </div>

  );
}

export default App;
