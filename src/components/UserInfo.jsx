import React from 'react';

const UserInfo = ({ usuario }) => {
  return (
    <div>
      <h2>Información del Usuario</h2>
      <div>
        <p>Nombre: {usuario.nombre}</p>
        <p>Correo Electrónico: {usuario.correo}</p>
        <p>Edad: {usuario.edad}</p>
        {/* Agrega más campos según tu modelo de datos */}
      </div>
    </div>
  );
};

export default UserInfo;
