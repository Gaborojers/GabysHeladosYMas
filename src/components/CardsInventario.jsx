import React, { useState, useEffect } from 'react';
import '../css/inventario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

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

  const handleEliminarProducto = (productoId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(productoId);
      }
    });
  };
  const actualizarProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };
  const eliminarProducto = async (productoId) => {
    try {
      await axios.delete(`http://localhost:3000/productos/${productoId}`);
      Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
      actualizarProductos();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
    }
  };

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
        <div className="productos-container">
        {productos.map((producto) => (
          <Button className="produc" key={producto._id} onClick={() => handleEliminarProducto(producto._id)}>
            <img src={Helado} className="productos" style={{ width: '110px' }} />
            <p>{producto.nombre}</p>
            <p>${producto.precioVenta}</p>
          </Button>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;