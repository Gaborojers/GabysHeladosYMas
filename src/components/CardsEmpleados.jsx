import React, { useState, useEffect } from 'react';
import '../css/perfiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Perfil from '../assets/img/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion-removebg-preview.png';
import { FaArrowDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function App() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await fetch('http://localhost:3000/empleados/obtener');
      const data = await response.json();
      setEmpleados(data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  const eliminarEmpleado = async (empleado) => {
    try {
      await axios.delete(`http://localhost:3000/empleados/eliminar/${empleado._id}`);
      Swal.fire('Empleado eliminado', 'El empleado ha sido eliminado exitosamente', 'success');
      obtenerEmpleados();
    } catch (error) {
      console.error('Error al eliminar el empleado:', error);
      Swal.fire('Error', 'Ocurrió un error al eliminar el empleado', 'error');
    }
  };

  const mostrarInfoEmpleado = (empleado) => {
    Swal.fire({
      title: `${empleado.nombre} ${empleado.apellidoPaterno} ${empleado.apellidoMaterno}`,
      html: `
        <p>Edad: ${empleado.edad}</p>
        <p>Teléfono: ${empleado.numTel}</p>
        <p>Correo: ${empleado.correo}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return eliminarEmpleado(empleado);
      },
    });
  };

  return (
    <div>
      <Link to="/Perfil">
        <Button variant="primary" className="agregar">
          <FontAwesomeIcon style={{ width: '35px', height: 'auto' }} icon={faUserPlus} />
        </Button>
      </Link>

      <div className="search_container">
        <input type="text" placeholder="Buscar Producto" className="mySearchBar" id="searchMobile" />
        <i className="search_icon"></i>
      </div>

      <div className="cards">
        {empleados.map((empleado, index) => (
          <div key={empleado._id} style={{  }}>
            <Card
              style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }}
              className={`card${index + 1}`}
            >
              <Card.Img variant="top" src={Perfil} className="perfil" />
              <Card.Body>
                <Card.Title className="titulo">{empleado.nombre}</Card.Title>
                <Card.Text></Card.Text>
                <Button
                  variant="primary"
                  className="icono"
                  style={{ left: '180px', top: '-50px' }}
                  onClick={() => mostrarInfoEmpleado(empleado)}
                >
                  <FaArrowDown></FaArrowDown>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}

        <br />
        <br />
      </div>
    </div>
  );
}

export default App;