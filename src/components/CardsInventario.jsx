import React, { useState, useEffect } from 'react';
import '../css/inventario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/productos');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div>
      <div>
        <NavDropdown className="navdropdown" title={<span style={{ fontSize: '35px' }}>Ordenar Por</span>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Helados</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Paletas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Otros Productos</NavDropdown.Item>
        </NavDropdown>
      </div>

      <div className="botoness" style={{ top: '105px', position: 'relative', left: '120px' }}>
        {productos.map((producto) => (
          <Button className="produc" key={producto._id}>
            <img src={Helado} className="productos" style={{ width: '110px' }} />
            <p>{producto.nombre}</p>
            <p>${producto.precioVenta}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;