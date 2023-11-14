import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/login.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Perfil from '../assets/img/rectangle_7.png';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://127.0.0.1:27017/empleado/login', { correo: email, contraseña: password })
      .then((response) => {
        navigate('/Home');
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas. Inténtalo de nuevo.',
          });
        } else if (error.request) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al conectar con el servidor. Por favor, inténtalo más tarde.',
          });
        } else {x
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error desconocido. Por favor, inténtalo de nuevo.',
          });
        }
      });
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
            className="botones"
            style={{ backgroundColor: 'lightpink' }}
            onClick={handleLogin}
          >
            <span className="palabras">Start</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;