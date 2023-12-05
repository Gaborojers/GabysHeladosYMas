import React, {useState, useEffect} from 'react';
import '../css/historial.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Imagenes from '../components/Imagenes';
import HistorialTabla from '../components/HistorialTabla';
import UserInfo from '../components/UserInfo';
import axios from 'axios';

function App() {
  const [Historial, setHistorial] = useState([]);

  useEffect(() => {
    obtenerHistorial();
  }, []);

  const obtenerHistorial = async () => {
    try {
      const response = await axios.get('https://api-multi-gabys.onrender.com/historial/obtenerTodo');
      const data = response.data;
      setHistorial(data);
    } catch (error) {
      console.error('Error al obtener el historial:', error);
    }
  };

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
          <HistorialTabla historial={Historial} />
          </div>
        </div>
      </div>
  
    );
  }
  
  export default App;