import '../css/login.css';
import { Container, Row, Col, } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import FooderLogin from "../components/FooderLogin";
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';

/*
import Perfil from '../assets/img/rectangle_7.png';
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

/*
function Login() {
  return (
    <div className="pagina">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="containers">
        <img src={Perfil} alt="Perfil" className="perfiles" />

        <input type="email" placeholder="Email" className="emails" />

        <br />
        <br />

        <input type="password" placeholder="Contraseña" className="passwords" />

        <div className="moverBoton">
          <Button className="botones" style={{ backgroundColor: "lightpink" }}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;*/