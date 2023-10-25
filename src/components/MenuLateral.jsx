import React, {useState} from 'react';
import '../css/home.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Imagen2 from "../assets/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png";
import Imagen from "../assets/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

    return (
        <div>
          <div className="menu">
          <img src={Logo} alt="Logo" className="logo" />
  
          <Button className="boton"> 
              <img src={Imagen2} className="home" />
              <p className="palabras">Home</p>
            </Button>
            <br />
            <Button className="boton1">
              <img src={Imagen} className="home" />
              <p className="palabras">Home</p>
            </Button>
            <br />
            <Button className="boton2">
              <img src={Imagen} className="home" />
              <p className="palabras">Home</p>
            </Button>
            <br />
            <Button className="boton3">
              <img src={Imagen} className="home" />
              <p className="palabras">Home</p>
            </Button>
            <br />
            <Button className="boton4">
              <img src={Imagen} className="home" />
              <p className="palabras">Home</p>
            </Button>
  
            <br />
  
            <div className="detras">
            
            <Button className="boton5">
              <img src={Imagen} className="home" />
              <p className="palabras2">Login Out</p>
            </Button>
            </div>
        </div>
      </div>
  
    );
  }
  
  export default App;