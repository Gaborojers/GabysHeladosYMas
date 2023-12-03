import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BiBook, BiPlayCircle } from 'react-icons/bi';
import MenuLateral from '../components/MenuLateral';
import Imagenes from '../components/Imagenes';
import '../css/ayuda.css';

function App() {
    return (
        <div>
            <MenuLateral />

            <div className='principal'>
                <Imagenes />

                <h2 className='ayuda'>Recursos de Ayuda</h2>
                <div className='divTexto'>
                    <span className='texto'>
                        Bienvenido a nuestra página de Recursos de Ayuda. Aquí encontrarás dos opciones para aprender a utilizar la página de Gaby´s Helados y Más: un detallado Manual de Usuario para lectura y Videos Tutoriales para una experiencia visual. Explora ambas opciones para maximizar tu comprensión y aprovechar al máximo nuestro producto.

                        <br />
                        <br />

                        Ya sea que prefieras aprender a tu propio ritmo con nuestro detallado Manual de Usuario o sumergirte rápidamente en la acción con nuestros Videos Tutoriales, tenemos recursos para cada estilo de aprendizaje.
                    </span>
                </div>

                <div className='buttons' style={{ top: '-65px', position: 'relative' }}>
                    <Button variant="primary" className='manual'>
                        <BiBook className='book' />
                        <p style={{ fontSize: '20px' }}>Manual de Usuario</p>
                    </Button>

                    <br />

                    <Button variant="danger" className='video'>
                        <BiPlayCircle className='play' />
                        <p style={{ fontSize: '21px' }}>Videos Tutoriales</p>
                    </Button>
                </div>
            </div>
        </div>  
    );
}

export default App;
