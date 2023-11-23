import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/login.css';
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import FooderLogin from "../components/FooderLogin";
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import '../css/login.css';

/*
import Perfil from '../assets/img/rectangle_7.png';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3000/empleados/login', { correo: email, contraseña: password })
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
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error desconocido. Por favor, inténtalo de nuevo.',
          });
        }
      });
  };

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