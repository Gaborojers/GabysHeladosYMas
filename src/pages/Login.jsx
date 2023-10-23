import React from 'react';
import '../css/login.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Perfil from '../assets/img/rectangle_7.png';

function App() {

  return (
      <div className="pagina">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="containers">
          <img src={Perfil} alt="Perfil" className="perfiles" />
          
          <input type="email" placeholder="Email" className="emails" />

          <br />
          <br />

          <input type="password" placeholder="Contraseña" className="passwords" />

          <div className="moverBoton">
            <button className="botones">
            Start
          </button>
          </div>

        </div>
      </div>
  );
}

export default App;