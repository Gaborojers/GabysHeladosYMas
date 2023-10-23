import React, {useState} from 'react';
import '../css/home.css';
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
            <p className="menuss"><strong>Menú</strong> Categorías</p>

            <div className="search_containers">
            <input type="text" placeholder="Buscar Producto" className="mySearchBars" id="searchMobile" />
            <i className="search_icons"></i>
          </div>

          <div className="heladoss">
          <button className="boton6">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </button>

            <button className="boton7">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </button>

            <button className="boton8">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </button>
            
            <button className="boton9">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </button>

            <button className="boton10">
            <img src={Helado} className="conos"/>
            <p>Home</p>
            </button>
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

            <div className="botoness">
            <button className="produc">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc2">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc3">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <br />
            <br />

            <button className="produc">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc2">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className="produc3">
            <img src={Helado} className="productos"/>
            <p>Home</p>
            <p>$00.00</p>
            </button>
            </div>

          <img src={Chocolate} className="chocofresa"/>    
      </div>

      <div className="orden">
      <p className="letras"><strong>Nueva</strong> Orden</p>

      <div className="chispas">
                <p className="letra">Chispas</p>
            </div>

            <br />

            <div className="chispas">
                <p className="letra">Chispas</p>
            </div>

            <br />

            <div className="chispas">
                <p className="letra">Chispas</p>
            </div>

            <br />


            <button className="cancelar"><p className="letra">Cancelar</p></button>
            <button className="aceptar"><p className="letra">Aceptar</p></button>

            <div className="cono">
            <p className="letras2"><strong>Cono</strong></p>

            <div className="heladosBotones">
            <button className="boton6">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>

            <button className="boton7">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>

            <button className="boton8">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>
            </div>

             <br />
             <br />
            
            <p className="letras3"><strong>Cono</strong></p>

              <br />

              <div className="divsChispas">
              <div className="chispas">
              <p className="letra">Chispas</p>
            </div>

             <br />

            <div className="chispas">
              <p className="letra">Chispas</p>
            </div>
              </div>

            <div className="botonesAC">
            <button className="cancelar"><p className="letra">Cancelar</p></button>
            <button className="aceptar"><p className="letra">Aceptar</p></button>
            </div>

            </div>
      </div>
    </div>

  );
}

export default App;