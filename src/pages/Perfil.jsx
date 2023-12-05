import React, { useState } from 'react';
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
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayIcon, setDisplayIcon] = useState(true);
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: '',
    edad: 0,
    fechaNacimiento: '',
    numTel: '',
    correo: '',
    contraseña: '',
    salario: 0,
    tipoEmpleado: 'Empleado'
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado((prevEmpleado) => ({
      ...prevEmpleado,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api-multi-gabys.onrender.com/empleados/agregar', empleado)
      .then((response) => {
        Swal.fire({
          title: 'Empleado agregado exitosamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        navigate('/Perfiles')
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error al agregar empleado',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setDisplayIcon(false);
  };

  return (
    <div>
      <MenuLateral />

      <form className="principal" onSubmit={handleSubmit}>
        <Imagenes />

        <div className="primerosDatos">
          <form className="guardarPerfil">
            <label htmlFor="profile-picture" className="profile-upload">
              <div className="profile-icon-container">
                {displayIcon ? (
                  <FaUser className="profile-icon" />
                ) : null}
              </div>
              <input type="file" id="profile-picture" name="profile-picture" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
            </label>
          </form>

          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Foto de perfil"
              style={{ maxWidth: '200px' }}
              className="imagenPerfil"
            />
          )}

          <div className="datosP">
            <p className="nombre"><strong>Nombres:</strong></p>
            <input type="text" name="nombre" value={empleado.nombre} onChange={handleChange} />
            <p className="apellidoP"><strong>Apellido Paterno:</strong></p>
            <input type="text" name="apellidoPaterno" value={empleado.apellidoPaterno} onChange={handleChange} />
            <p className="apellidoM"><strong>Apellido Materno:</strong></p>
            <input type="text" name="apellidoMaterno" value={empleado.apellidoMaterno} onChange={handleChange} />
          </div>
        </div>

        <div className="segundosDatos">
          <p className="edad"><strong>Edad:</strong></p>
          <input type="number" name="edad" value={empleado.edad} onChange={handleChange} />
          <p className="telefono"><strong>Ocupación:</strong></p>
          <select name="tipoEmpleado" value={empleado.tipoEmpleado} onChange={handleChange}>
            <option value="Empleado">Empleado</option>
            <option value="Gerente">Gerente</option>
          </select>

          <div className="fnacimiento">
            <p className="fecha"><strong>F.Nacimiento:</strong></p>
            <input type="text" name="fechaNacimiento" pattern="\d{2}/\d{2}/\d{4}" placeholder="DD/MM/AAAA" value={empleado.fechaNacimiento} onChange={handleChange} />
            <p className="telefono"><strong>N. Teléfono:</strong></p>
            <input type="text" name="numTel" value={empleado.numTel} onChange={handleChange} />

          </div>

          <div className="genero">
            <p className="genero"><strong>Género:</strong></p>
            <div className="hombre">
              <input type="radio" name="genero" value="Masculino" checked={empleado.genero === "Masculino"} onChange={handleChange} />
              <label htmlFor="male">Masculino</label>
            </div>
            <div className="mujer">
              <input type="radio" name="genero" value="Femenino" checked={empleado.genero === "Femenino"} onChange={handleChange} />
              <label htmlFor="female">Femenino</label>
            </div>


            <div className="correos">
              <p className="correo"><strong>Correo electrónico:</strong></p>
              <input type="text" name="correo" value={empleado.correo} onChange={handleChange} />
              <p className="correo"><strong>Salario:</strong></p>
              <input type="number" name="salario" value={empleado.salario} onChange={handleChange} />
            </div>

            <div className="numero">
              <p className="telefono"><strong>Contraseña:</strong></p>
              <input type="password" name="contraseña" value={empleado.contraseña} onChange={handleChange} />
            </div>

          </div>

          <div className='moverBoton'>
            <Button className="botones" style={{ backgroundColor: '#41E0E0' }} type='submit'>
              <span className="palabras">Agregar</span>
            </Button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default App;