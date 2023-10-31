import React, {useState} from 'react';
import '../css/inventario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function App() {

  return (
      <div>

            <div>
            <NavDropdown className="navdropdown" title={<span style={{ fontSize: '35px' }}>Ordenar Por</span>}  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Helados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Paletas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Otros Productos</NavDropdown.Item>
            </NavDropdown>
            </div>
          
            <div className="botoness" style={{ top: '105px', position: 'relative', left: '120px' }}>
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

            <Button className="produc4">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc5">
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

            <Button className="produc4">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>

            <Button className="produc5">
            <img src={Helado} className="productos" style={{ width: '110px' }}/>
            <p>Home</p>
            <p>$00.00</p>
            </Button>
            </div>
    </div>

  );
}

export default App;