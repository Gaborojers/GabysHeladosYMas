import React, {useState} from 'react';
import '../css/perfiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fresa from '../assets/img/choco37_1.png';
import Chocolate from '../assets/img/image_2.png';
import MenuLateral from '../components/MenuLateral';
import CardsEmpleados from '../components/CardsEmpleados';
import Imagenes from '../components/Imagenes';

function App() {

  return (
      <div>
        <MenuLateral />

      <div className="principal">
      <Imagenes />
      <p className="menus"><strong>Perfiles</strong> De Empleados</p>

            <div className="search_container">
            <input type="text" placeholder="Buscar Producto" className="mySearchBar" id="searchMobile" />
            <i className="search_icon"></i>
            </div>

            <CardsEmpleados /> 
      </div>
    </div>

  );
}

export default App;