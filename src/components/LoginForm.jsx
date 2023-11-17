import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Stack, Button } from "react-bootstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
/*import { useNavigate } from "react-router-dom";*/

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/empleados/login", {
        correo: email,
        contraseña: password,
      })
      .then((response) => {
        navigate("/Home");
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales incorrectas. Inténtalo de nuevo.",
          });
        } else if (error.request) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al conectar con el servidor. Por favor, inténtalo más tarde.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error desconocido. Por favor, inténtalo de nuevo.",
          });
        }
      });
  };

  return (
    <Form className="formu-login" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Stack direction="horizontal" gap={3}>
          <Link className="p-2">First item</Link>
          <Link className="p-2">Third item</Link>
        </Stack>
      </Form.Group>
      <div className="center-cart">
        <Button variant="primary" type="submit" className="boton-log">
          Submit
        </Button>
      </div>
    </Form>
  );
  /*return (
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
  );*/
}

export default LoginForm;
