import React, {useState} from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Helado from '../assets/img/4534108-removebg-preview.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  return (
      <div>
      <div className="heladoss">
          <Button className="boton6">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </Button>

            <Button className="boton7">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </Button>

            <Button className="boton8">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </Button>
            
            <Button className="boton8" style={{ left: '155px' }}>
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </Button>

            <Button className="boton8" style={{ left: '185px' }}>
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </Button>
          </div>

          <br />
            <p className="menuss"><strong>Elegir</strong> Orden</p>

            <div>
            <NavDropdown className="navdropdowns" title={<span style={{ fontSize: '35px' }}>Ordenar Por</span>}  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crema
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Agua</NavDropdown.Item>
            </NavDropdown>
            </div>

            <div className="botone" style={{ top: '-105px', position: 'relative', left: '120px' }}>
            <Button className="produc">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc2">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc3">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <br />
            <br />

            <Button className="produc">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc2">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc3">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>
            </div>
    </div>

  );
}

export default App;