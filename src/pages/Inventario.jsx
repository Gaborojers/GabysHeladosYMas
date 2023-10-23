import React, {useState} from 'react';
import '../css/inventario.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Imagen2 from "../assets/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png";
import Imagen from "../assets/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Helado from '../assets/img/4534108-removebg-preview.png';
import Fresa from '../assets/img/choco37_1.png';
import Chocolate from '../assets/img/image_2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <p className="menus"><strong>Menú</strong> De Inventario</p>

            <div className="search_container">
            <input type="text" placeholder="Buscar Producto" className="mySearchBar" id="searchMobile" />
            <i className="search_icon"></i>
          </div>

          <br />

            <div>
            <NavDropdown className="navdropdown" title={<span style={{ fontSize: '35px' }}>Ordenar Por</span>}  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crema
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Agua</NavDropdown.Item>
            </NavDropdown>
            </div>

            <div className="botones">
            <button className="produc">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc2">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc3">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc4">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc5">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <br />
            <br />

            <button className="produc">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc2">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc3">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc4">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc5">
            <img src={Helado} className="producto"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>
            </div>

          <img src={Chocolate} className="chocofresa"/>    
      </div>
    </div>

  );
}

export default App;