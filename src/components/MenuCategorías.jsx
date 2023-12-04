import React, { useEffect, useState } from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('helados');

  const imagenesCategoria = {
    helados: Helado,
    paleta: Paleta,
    bebidas: Bebidas
  };
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${categoriaSeleccionada}`);
        const productosObtenidos = response.data;
        setProductos(productosObtenidos);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    obtenerProductos();
  }, [categoriaSeleccionada]);

  const obtenerProductosPorCategoria = async (categoria) => {
    try {
      const response = await axios.get(`http://localhost:3000/${categoria}`);
      const productosObtenidos = response.data;
      setProductos(productosObtenidos);
      setCategoriaSeleccionada(categoria);
    } catch (error) {
      console.error(`Error al obtener los productos de la categoría ${categoria}:`, error);
    }
  };

  return (
    <div>
      <div className="heladoss">
        <Button className={categoriaSeleccionada === 'paleta' ? 'boton7 active' : 'boton7'} onClick={() => obtenerProductosPorCategoria('paleta')}>
          <img src={Paleta} className="conos" alt="Paleta" />
          <p>Paletas</p>
        </Button>
        <Button className={categoriaSeleccionada === 'helados' ? 'boton8 active' : 'boton8'} onClick={() => obtenerProductosPorCategoria('helados')}>
          <img src={Helado} className="conos" alt="Helado" />
          <p>Helados</p>
        </Button>
        <Button className={categoriaSeleccionada === 'bebidas' ? 'boton8 active' : 'boton8'} style={{ left: '155px' }} onClick={() => obtenerProductosPorCategoria('bebidas')}>
          <img src={Bebidas} className="conos" alt="Bebidas" />
          <p>Bebidas</p>
        </Button>
      </div>
      <br />
      <p className="menuss">
        <strong>Elegir</strong> Orden
      </p>
      <div className="scrollable-container">
        <div className="botone" style={{ top: '-105px', position: 'relative', left: '120px', marginTop:"8%", marginRight:"15%"}}>
          {productos.map((producto) => (
            <Button key={producto._id} className="produc">
              <img src={imagenesCategoria[categoriaSeleccionada]} className="productos" style={{ width: '110px' }} alt={categoriaSeleccionada} />
              <p>{producto.sabor}</p>
              <p>${producto.precioVenta}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;