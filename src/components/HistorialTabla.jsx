import React from 'react';
import '../css/historial.css';

const HistorialTabla = ({ historial }) => {
  return (
    <div>
      <h2>Historial de ingresos</h2>
      <table className="github-commits-table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialTabla;