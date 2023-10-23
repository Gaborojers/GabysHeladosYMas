import React, {useState} from 'react';
import '../css/perfiles.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Imagen2 from "../assets/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png";
import Imagen from "../assets/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fresa from '../assets/img/choco37_1.png';
import Chocolate from '../assets/img/image_2.png';
import Perfil from '../assets/img/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion-removebg-preview.png'
import { FaArrowDown } from 'react-icons/fa';

function App() {

  return (
      <div>
        <div className="menu">
        <img src={Logo} alt="Logo" className="logo" />

        <button className="boton">
            <img src={Imagen2} className="home" />
            <p className="palabras">Home</p>
          </button>
          <br />
          <button className="boton1">
            <img src={Imagen} className="home" />
            <p className="palabras">Home</p>
          </button>
          <br />
          <button className="boton2">
            <img src={Imagen} className="home" />
            <p className="palabras">Home</p>
          </button>
          <br />
          <button className="boton3">
            <img src={Imagen} className="home" />
            <p className="palabras">Home</p>
          </button>
          <br />
          <button className="boton4">
            <img src={Imagen} className="home" />
            <p className="palabras">Home</p>
          </button>

          <br />

          <div className="detras">
          
          <button className="boton5">
            <img src={Imagen} className="home" />
            <p className="palabras2">Login Out</p>
          </button>
          </div>
      </div>

      <div className="principal">
      <img src={Fresa} className="choco"/>
      <p className="menus"><strong>Perfiles</strong> De Empleados</p>

            <div className="search_container">
            <input type="text" placeholder="Buscar Producto" className="mySearchBar" id="searchMobile" />
            <i className="search_icon"></i>
            </div>

            <div className="cards">
            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card2">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card3">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card4">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <br />
            <br />

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card5">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card6">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card7">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card8">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <br />
            <br />

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card9">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card10">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card11">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: '#35DBFF', height: '150px' }} className="card12">
                <Card.Img variant="top" src={Perfil} className="perfil" />
                    <Card.Body>
                    <Card.Title className="titulo">Nombre del Empleado</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" className="icono">
                            <FaArrowDown></FaArrowDown>
                        </Button>
                    </Card.Body>
            </Card>
            </div>

          <img src={Chocolate} className="chocofresa"/>    
      </div>
    </div>

  );
}

export default App;