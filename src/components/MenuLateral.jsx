import React, {useState} from 'react';
import '../css/home.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Imagen2 from "../assets/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png";
import Imagen from "../assets/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png"
import Imagen4 from '../assets/img/1250689.png';
import Imagen3 from '../assets/img/2984971.png';
import Imagen5 from '../assets/img/5070792.png';
import Imagen6 from '../assets/img/32223.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function App() {

    return (
        <div>
          <div className="menu">
          <img src={Logo} alt="Logo" className="logo" />
  
            <Link to="/Home">
            <Button className="boton"> 
              <img src={Imagen2} className="home" />
              <p className="palabras">Home</p>
            </Button>
            </Link>
            <br />
            <Link to="/Perfiles">
            <Button className="boton1">
              <img src={Imagen4} className="home" />
              <p className="palabras">Perfiles</p>
            </Button>
            </Link>
            <br />
            <Link to="/Informe">
            <Button className="boton2">
              <img src={Imagen5} className="home" />
              <p className="palabras">Informes</p>
            </Button>
            </Link>
            <br />
            <Link to="/Historial">
            <Button className="boton3">
              <img src={Imagen6} className="home" />
              <p className="palabras">Historial</p>
            </Button>
            </Link>
            <br />
            <Link to="/Ayuda">
            <Button className="boton4">
              <img src={Imagen3} className="home" alt="Ayuda Icon" />
              <p className="palabras">Ayuda</p>
            </Button>
            </Link>
  
            <br />
  
            <div className="detras">

            <Link to="/" className="boton5">
              <img src={Imagen} className="home" />
              <p className="palabras2">Login Out</p>
            </Link>
            </div>
        </div>
      </div>
  
    );
  }
  
  export default App;