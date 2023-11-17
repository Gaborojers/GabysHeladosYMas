import React, {useState} from 'react';
import '../css/gastos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Imagenes from '../components/Imagenes';
import { IconContext } from "react-icons";
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {

    return (
        <div>
        <MenuLateral />

        <div className='principal'>
          <Imagenes />

          <div className='botoness'>
              <DropdownButton id="dropdown-basic-button" title={<span style={{ fontSize: '25px' }}>Tipos de datos</span>} className='botn'>
                <Dropdown.Item as={Link} to="/Informe" className='opciones'>Informe</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Gastos" className='opciones'>Gastos</Dropdown.Item>
              </DropdownButton>
          </div>

          <div className='informacion'>
          <h2 className='gastos'>Informe de Gastos</h2>
          <p>-------------------------------------------------------</p>
          <p>-------------------------------------------------------</p>
          <p>-------------------------------------------------------</p>
          <span>$ <p>-------</p> </span>
          </div>

          <IconContext.Provider value={{ color: "orange", size: "20em" }}>
            <div className='icono'>
                <FaLightbulb />
            </div>
          </IconContext.Provider>

        </div>
      </div>
  
    );
  }
  
  export default App;