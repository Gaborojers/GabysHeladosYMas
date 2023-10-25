import React, {useState} from 'react';
import '../css/historial.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Imagenes from '../components/Imagenes';
import HistorialTabla from '../components/HistorialTabla';
import UserInfo from '../components/UserInfo';

function App() {
  const historialDeCambios = [
    { usuario: 'Usuario 1', cambio: 'Cambio 1' },
    { usuario: 'Usuario 2', cambio: 'Cambio 2' },
    { usuario: 'Usuario 3', cambio: 'Cambio 3' },
    // Agrega más entradas de historial según tus necesidades
  ];

    return (
        <div>
        <MenuLateral />

        <div className='principal'>
          <Imagenes />

          <div className='botoness'>
          <DropdownButton id="dropdown-basic-button" title={<span style={{ fontSize: '25px' }}>Fecha</span>} className='botn'>
            <Dropdown.Item className='opciones' href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item className='opciones' href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item className='opciones' href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          </div>

          <div className='historial'>
          <HistorialTabla historial={historialDeCambios} />
          </div>
        </div>
      </div>
  
    );
  }
  
  export default App;