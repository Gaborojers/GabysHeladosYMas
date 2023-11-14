import React, {useState} from 'react';
import '../css/perfil.css';
import Logo from '../assets/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png';
import Imagen2 from "../assets/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png";
import Imagen from "../assets/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Fresa from '../assets/img/choco37_1.png';
import Chocolate from '../assets/img/image_2.png';
import { FaUser } from 'react-icons/fa';
import MenuLateral from '../components/MenuLateral';
import Imagenes from '../components/Imagenes';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayIcon, setDisplayIcon] = useState(true);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      setDisplayIcon(false);
    };

    const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value); 
  };

  return (
      <div>
        <MenuLateral />

      <div className="principal">
      <Imagenes />

      <div className="primerosDatos">
      <form className="guardarPerfil">
        <label htmlFor="profile-picture" className="profile-upload">
          <div className="profile-icon-container">
            {displayIcon ? (
              <FaUser className="profile-icon" /> /* Muestra el ícono si displayIcon es true */
            ) : null}
          </div>
          <input
            type="file"
            id="profile-picture"
            name="profile-picture"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </form>

      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Foto de perfil"
          style={{ maxWidth: '200px' }} /* Ajusta el tamaño de la vista previa */
          className="imagenPerfil"
        />
      )}

      <div className="datosP">
      <p className="nombre"><strong>Nombre(s):</strong></p>
      <input className="nombreInput" />
      <p className="apellidoP"><strong>Apellido Paterno:</strong></p>
      <input className="apellidoPInput" />
      <p className="apellidoM"><strong>Apellido Materno:</strong></p>
      <input className="apellidoMInput" />
      </div>
      </div>

      <div className="segundosDatos">
      <p className="edad"><strong>Edad:</strong></p>
      <input className="edadInput" />

      <div className="fnacimiento">
      <p className="fecha"><strong>F.Nacimiento:</strong></p>
      <input type="text" className="fechaInput" pattern="\d{2}/\d{2}/\d{4}" placeholder="DD/MM/AAAA" />
      </div>

      <div className="genero">
      <p className="genero"><strong>Género:</strong></p>
          <div className="hombre">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          <label htmlFor="male">Masculino</label>
          </div>

          <div className="mujer">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Femenino</label>
          </div>

          <div className="correos">
          <p className="correo"><strong>Correo electrónico:</strong></p>
          <input type="email" className="emailInput" />
          </div>

          <div className="numero">
          <p className="telefono"><strong>N. Teléfono:</strong></p>
          <input type="email" className="telefonoInput" />
          </div>
          
      </div>

          <div className='moverBoton'>
          <Button className="botones" style={{ backgroundColor: '#41E0E0' }}>
            <span className="palabras">Agregar</span>
          </Button>
          </div>

      </div>
      </div>
    </div>
  );
}

export default App;