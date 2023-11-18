import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayIcon, setDisplayIcon] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setDisplayIcon(false);
  };

  const handleAgregar = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/empleados/agregar', { data });
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Empleado agregado',
          text: 'El empleado se ha agregado correctamente.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al agregar el empleado. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error al conectar con el servidor. Por favor, verifica tu conexión e inténtalo de nuevo.',
      });
    }
  };

  return (
    <div>
      <MenuLateral />

      <div className="principal">
        <Imagenes />

        <div className="primerosDatos">
          <form className="guardarPerfil" onSubmit={handleSubmit(handleAgregar)}>
            <label htmlFor="profile-picture" className="profile-upload">
              <div className="profile-icon-container">
                {displayIcon ? (
                  <FaUser className="profile-icon" />
                ) : null}
              </div>
              <input
                type="file"
                id="profile-picture"
                name="profile-picture"
                accept="image/*"
                onChange={handleFileChange}
                ref={register({ required: true })}
                style={{ display: 'none' }}
              />
            </label>
            {errors.profilePicture && <span className="error">Campo requerido</span>}
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
            <p className="nombre"><strong>Nombre(s):</strong></p>
            <input type='text' className="nombreInput" value={nombre} onChange={handleNombreChange} ref={register({ required: true })} />
            {errors.nombre && <span className="error">Campo requerido</span>}

            <p className="apellidoP"><strong>Apellido Paterno:</strong></p>
            <input type='text' className="apellidoPInput" value={apellidoPaterno} onChange={handleApellidoPaternoChange} ref={register({ required: true })} />
            {errors.apellidoPaterno && <span className="error">Campo requerido</span>}

            <p className="apellidoM"><strong>Apellido Materno:</strong></p>
            <input type='text' className="apellidoMInput" value={apellidoMaterno} onChange={handleApellidoMaternoChange} ref={register({ required: true })} />
            {errors.apellidoMaterno && <span className="error">Campo requerido</span>}

            <p className="edad"><strong>Edad:</strong></p>
            <input type='text' className="edadInput" value={edad} onChange={handleEdadChange} ref={register({ required: true })} />
            {errors.edad && <span className="error">Campo requerido</span>}

            <div className="fnacimiento">
              <p className="fecha"><strong>F.Nacimiento:</strong></p>
              <input type="text" className="fechaInput" pattern="\d{2}/\d{2}/\d{4}" placeholder="DD/MM/AAAA" value={fecha} onChange={handleFechaChange} ref={register({ required: true })} />
              {errors.fecha && <span className="error">Formato incorrecto</span>}
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
                  ref={register({ required: true })}
                />
                <label htmlFor="male">Masculino</label>
              </div>

              <div className="mujer">
                <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} ref={register({ required: true })} />
                <label htmlFor="female">Femenino</label>
              </div>
              {errors.gender && <span className="error">Campo requerido</span>}
            </div>

            <p className="correo"><strong>Correo electrónico:</strong></p>
            <input type="text" className="emailInput" value={email} onChange={handleEmailChange} ref={register({ required: true, email: true })} />
            {errors.email && <span className="error">Formato incorrecto</span>}

            <p className="telefono"><strong>N. Teléfono:</strong></p>
            <input type="text" className="telefonoInput" value={telefono} onChange={handleTelefonoChange} ref={register({ required: true, minLength: 10, maxLength: 10 })} />
            {errors.telefono && <span className="error">Formato incorrecto</span>}

            <div className='moverBoton'>
              <Button className="botones" style={{ backgroundColor: '#41E0E0' }} onClick={handleSubmit(handleAgregar)}>
                <span className="palabras">Agregar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;