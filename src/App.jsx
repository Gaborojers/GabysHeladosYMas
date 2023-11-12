import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import Perfiles from './pages/Perfiles';
import Perfil from './pages/Perfil';
import Historial from './pages/Historial';
import Informe from './pages/Informe';
import Gastos from './pages/Gastos';
import Ayuda from './pages/Ayuda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Perfiles" element={<Perfiles />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Historial" element={<Historial />} />
        <Route path="/Informe" element={<Informe />}/>
        <Route path="/Gastos" element={<Gastos />}/>
        <Route path="/Ayuda" element={<Ayuda />}/>
      </Routes>
    </Router>
  );
}

export default App;



