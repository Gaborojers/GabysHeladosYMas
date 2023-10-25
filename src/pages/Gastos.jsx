import React, {useState} from 'react';
import '../css/gastos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Imagenes from '../components/Imagenes';
import { IconContext } from "react-icons";
import { FaLightbulb } from 'react-icons/fa';

function App() {

    return (
        <div>
        <MenuLateral />

        <div className='principal'>
          <Imagenes />

          <div className='botoness'>
          <DropdownButton id="dropdown-basic-button" title={<span style={{ fontSize: '25px', color: 'black' }}>Gastos</span>} className='botn'>
            <Dropdown.Item className='opciones' href="#/action-1">Luz</Dropdown.Item>
            <Dropdown.Item className='opciones' href="#/action-2">Agua</Dropdown.Item>
          </DropdownButton>
          </div>

          <div className='informacion'>
          <h2 className='gastos'>Gastos de Luz</h2>
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