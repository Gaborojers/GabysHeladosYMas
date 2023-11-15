/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';*/
import { Container, Row, Col, } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import FooderLogin from "../components/FooderLogin";
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import '../css/login.css';

/*
import Perfil from '../assets/img/rectangle_7.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const usuarios = [
    { email: 'gaborojers@gmail.com', password: '06042004' },
    { email: 'usuario2@example.com', password: 'contraseña2' },
    // Agrega más usuarios según sea necesario
  ];

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioEncontrado) {
      navigate('/Home');
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
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
import Button from 'react-bootstrap/esm/Button';
*/

function Login() {
  return (
    <Container fluid className="contenedor pagina">
      <Row className="fila">
        <Col className="header-log">
          <img src={Logo} alt="Logo" className="logo" />
        </Col>
      </Row>
      <Row className="fila center-cart">
        <Col className="center-cart">
          <LoginForm />
        </Col>
      </Row>
      <Row className="fila center-cart">
        <Col>
          <FooderLogin />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;