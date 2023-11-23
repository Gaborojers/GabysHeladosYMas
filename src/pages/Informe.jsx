import '../css/informe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Imagenes from '../components/Imagenes';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

function App() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    obtenerVentas();
  }, []);

  const obtenerVentas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ventas/'); 
      setVentas(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const generarPDF = () => {
    const doc = new jsPDF();
    const columns = ['Fecha de Venta', 'Total de Venta','Productos Vendidos'];
    const data = [];

    ventas.forEach((venta) => {
      data.push([venta.fechaVenta, venta.totalVenta,venta.nombres]);
    });

    doc.autoTable({ columns, body: data });
    doc.save('ventas.pdf');
  };
  return (
    <div>
      <MenuLateral />

      <div className='principal'>
        <Imagenes />

        <h2 className='informe'>Informe de gastos</h2>

        {/* <div className='botoness'>
              <DropdownButton id="dropdown-basic-button" title={<span style={{ fontSize: '25px' }}>Tipos de datos</span>} className='botn'>
                <Dropdown.Item as={Link} to="/Informe" className='opciones'>Informe</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Gastos" className='opciones'>Gastos</Dropdown.Item>
              </DropdownButton>
          </div>*/}

        {/*<div className='orientacionBtn'>
          <p className="orientacion">Orientación:</p>
          <DropdownButton id="dropdown-basic-button2" title={<span style={{ fontSize: '25px', color: 'black' }}>Orientación</span>} className='botn'>
            <Dropdown.Item className='opciones' href="#/action-1">Vertical</Dropdown.Item>
            <Dropdown.Item className='opciones' href="#/action-2">Horizontal</Dropdown.Item>
          </DropdownButton>
        </div>*/}
        <br />
        <div className='documento'>
          <iframe
            title="Documento"
            width="80%"
            height="500px"
            src="/PEDIDO GABY´S HELADOS Y MÁS_16.07.23.pdf"
          ></iframe>
        </div>
        <div className='botoness'>
        <button  onClick={generarPDF}>Generar PDF de ventas</button></div>
      </div>
    </div>

  );
}

export default App;