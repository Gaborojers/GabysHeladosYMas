import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../css/login.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Perfil from '../assets/img/rectangle_7.png';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const obtenerFechaHoraActual = () => {
    const fechaHora = new Date();
    const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString();
    return `${fecha} ${hora}`;
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api-multi-gabys.onrender.com/empleados/login', {
        correo: email,
        contraseña: password
      });

      const { empleado } = response.data;
      const empleadoId = empleado._id;
      const nombreEmpleado = empleado.nombre;
      const fechaHoraActual = obtenerFechaHoraActual();

      const historial = {
        empleadoId: empleadoId,
        nombre: nombreEmpleado,
        fecha: fechaHoraActual
      };
      await axios.post('https://api-multi-gabys.onrender.com/historial/agregarHistorial', historial)
      setInterval(() => {
        navigate('/Home')
      }, 8000);
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales incorrectas. Inténtalo de nuevo.'
        });
      } else if (error.request) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al conectar con el servidor. Por favor, inténtalo más tarde.'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error desconocido. Por favor, inténtalo de nuevo.'
        });
      }
    }
  };

  return (
    <div className="pagina">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="containers">
        <img src={Perfil} alt="Perfil" className="perfiles" />

        <input
          type="email"
          placeholder="Email"
          className="emails"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Contraseña"
          className="passwords"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="moverBoton">
          <Button
            className="botonInicio"
            style={{ backgroundColor: 'lightpink' }}
            onClick={handleLogin}
          >
            <span className="palabras">Inicio de sesion</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;