import '../css/login.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Perfil from '../assets/img/rectangle_7.png';
import Button from 'react-bootstrap/esm/Button';
import { Container, Row, Col, Stack, } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <Container fluid className="pagina">
      <Row>
        <Col>
          <Stack gap={3}>
            <div className="p-2">
              <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                  <div className="logo"></div>
                </div>
                <div className="p-2 ms-auto"></div>
                <div className="p-2"></div>
              </Stack>
            </div>
            <div className="p-2 center-cart">
              <LoginForm />
            </div>
            <div className="p-2">Third item</div>
          </Stack>
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