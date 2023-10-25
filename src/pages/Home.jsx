import React, {useState} from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import MenuLateral from '../components/MenuLateral';
import MenuCategorías from '../components/MenuCategorías';
import Imagenes from '../components/Imagenes';

function App() {

  return (
      <div>
        <MenuLateral />

      <div className="principal">
      <Imagenes />
            <p className="menuss"><strong>Menú</strong> Categorías</p>

            <div className="search_containers">
            <input type="text" placeholder="Buscar Producto" className="mySearchBars" id="searchMobile" />
            <i className="search_icons"></i>
          </div>

          <MenuCategorías />
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