import React from 'react';
import '../css/historial.css'

const HistorialTabla = ({ historial }) => {
  return (
    <div>
      <h2>Historial de Cambios</h2>
      <table className="github-commits-table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Cambio</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((item, index) => (
            <tr key={index}>
              <td>{item.usuario}</td>
              <td>{item.cambio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialTabla;
