import { useEffect, useState } from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import MenuLateral from '../components/MenuLateral';
import MenuCategorías from '../components/MenuCategorías';
import Imagenes from '../components/Imagenes';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Paleta from "../assets/img/3132683.png";
import Bebidas from "../assets/img/813e5fa18d1433b42458bb3c48537caa.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('helados');
  const [totalVenta, setTotalVenta] = useState(0);

  const handleIncrement = (producto) => {
    setProductosSeleccionados((prevProductosSeleccionados) => {
      return prevProductosSeleccionados.map((p) => {
        if (p._id === producto._id) {
          return { ...p, vendidos: p.vendidos + 1 };
        }
        return p;
      });
    });
  };

  const handleDecrement = (producto) => {
    setProductosSeleccionados((prevProductosSeleccionados) => {
      return prevProductosSeleccionados.map((p) => {
        if (p._id === producto._id && p.vendidos > 0) {
          return { ...p, vendidos: p.vendidos - 1 };
        }
        return p;
      });
    });
  };
  const handleAceptar = () => {
    let total = 0;
    productosSeleccionados.forEach((producto) => {
      const precioVenta = producto.precioVenta;
      const cantidadVendida = producto.vendidos;
      const subtotal = precioVenta * cantidadVendida;
      total += subtotal;
    });
    setTotalVenta(total);
    console.log(totalVenta)
    if (productosSeleccionados.length === 0) {
      Swal.fire('Error', 'Debe seleccionar al menos un producto', 'error');
      return;
    }
  
    const ventaData = {
      fechaVenta: obtenerFechaVenta(),
      totalVenta: totalVenta,
      nombres: productosSeleccionados.map((producto) => producto.sabor),
    };
  
    axios.post('http://localhost:3000/ventas/agregarVenta', ventaData)
      .then(() => {
        Swal.fire('Éxito', 'Venta realizada correctamente', 'success');
      })
      .catch(() => {
        Swal.fire('Error', 'Ocurrió un error al guardar la venta', 'error');
      });
  };

  const obtenerFechaVenta = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    return `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
  };

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

  const handleProductoSeleccionado = (producto) => {
    const productoExistente = productosSeleccionados.some((p) => p._id === producto._id);

    if (productoExistente) {
      Swal.fire({
        title: 'Producto duplicado',
        text: 'Este producto ya ha sido seleccionado',
        icon: 'warning',
        timer: 1000,
        showConfirmButton: false
      });
    } else {
      setProductosSeleccionados((prevProductosSeleccionados) => [
        ...prevProductosSeleccionados,
        { ...producto, vendidos: 0 }
      ]);
    }
  };
  const handleCancelar = () => {
    Swal.fire({
      title: '¿Estás seguro de cancelar el pedido?',
      text: 'Se eliminarán todos los productos seleccionados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener',
    }).then((result) => {
      if (result.isConfirmed) {
        setProductosSeleccionados([]);
        setPrecioTotal(0);
        Swal.fire('Pedido cancelado', 'Los productos seleccionados han sido eliminados', 'success');
      }
    });
  };
  return (
    <div>
      <MenuLateral />

      <div className="principal">
        <Imagenes />
        <p className="menuss"><strong>Menú</strong> Categorías</p>

        <br/>
        <br/>

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
            <div className="botone" style={{ top: '-105px', position: 'relative', left: '120px', marginTop: "8%", marginRight: "15%" }}>
              {productos.map((producto) => (
                <Button key={producto._id} className="produc" onClick={() => handleProductoSeleccionado(producto)}>
                  <img src={imagenesCategoria[categoriaSeleccionada]} className="productos" style={{ width: '110px' }} alt={categoriaSeleccionada} />
                  <p>{producto.sabor}</p>
                  <p>${producto.precioVenta}</p>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="orden">
        <p className="letras"><strong>Nueva</strong> Orden</p>
        {productosSeleccionados.map((producto) => (
          <div className="chispas" key={producto._id} style={{ marginBottom: '10px' }}>
            <p className="letra">{producto.sabor}</p>
            <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement(producto)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <span className='cifra'>{producto.vendidos}</span>
            <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement(producto)}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </div>
        ))}
        <br />
        <button className="cancelar" onClick={handleCancelar}><p className="letra">Cancelar</p></button>
        <button className="aceptar" onClick={handleAceptar}><p className="letra">Aceptar</p></button>
      </div>
    </div>

  );
}

export default App;