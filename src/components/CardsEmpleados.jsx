import React, {useState} from 'react';
import '../css/perfiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Perfil from '../assets/img/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion-removebg-preview.png'
import { FaArrowDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function App() {

    return ( 
        <div>

            <Link to="/Perfil">
            <Button variant="primary" className='agregar'>
                <FontAwesomeIcon style={{width: '35px', height: 'auto'}} icon={faUserPlus} />
            </Button>
            </Link>

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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
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
                          <Button variant="primary" className="icono" style={{ left: '180px', top: '-50px' }}>
                              <FaArrowDown></FaArrowDown>
                          </Button>
                      </Card.Body>
              </Card>
              </div>
        </div>
  
    );
  }
  
  export default App;