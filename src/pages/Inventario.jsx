  import React, {useState} from 'react';
  import '../css/inventario.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Helado from '../assets/img/4534108-removebg-preview.png';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import MenuLateral from '../components/MenuLateral';
  import Imagenes from '../components/Imagenes';
  import Button from 'react-bootstrap/Button';
  import CardsInventario from '../components/CardsInventario';

  function App() {

    return (
        <div>
          <MenuLateral />

        <div className="principal">
        <Imagenes />
              <p className="menus"><strong>Menú</strong> De Inventario</p>

              <div className="search_container">
              <input type="text" placeholder="Buscar Producto" className="mySearchBar" id="searchMobile" />
              <i className="search_icon"></i>
            </div>

            <br />

            <CardsInventario /> 
        </div>
      </div>

    );
  }

  export default App;