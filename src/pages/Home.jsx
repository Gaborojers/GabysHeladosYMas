import React, {useState} from 'react';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helado from '../assets/img/4534108-removebg-preview.png';
import MenuLateral from '../components/MenuLateral';
import MenuCategorías from '../components/MenuCategorías';
import Imagenes from '../components/Imagenes';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [chispasCounts, setChispasCounts] = useState({
    chispa1: 0,
    chispa2: 0,
    chispa3: 0,
    chispa4: 0,
    chispa5: 0,
  });

  const handleIncrement = (chispa) => {
    setChispasCounts((prevState) => ({
      ...prevState,
      [chispa]: prevState[chispa] + 1,
    }));
  };

  const handleDecrement = (chispa) => {
    if (chispasCounts[chispa] > 0) {
      setChispasCounts((prevState) => ({
        ...prevState,
        [chispa]: prevState[chispa] - 1,
      }));
    }
  };


  return (
      <div>
        <MenuLateral />

      <div className="principal">
      <Imagenes />
            <p className="menuss"><strong>Menú</strong> Categorías</p>

            <div className="search_containers">
            <input type="text" placeholder="Buscar Producto" className="mySearchBars" id="searchMobile" />
            <i className="search_icons"></i>
          </div>

          <MenuCategorías />
      </div>

      <div className="orden">
      <p className="letras"><strong>Nueva</strong> Orden</p>

      <div className="chispas">
        <p className="letra">Chispas</p>
        <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement('chispa1')}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span className='cifra'>{chispasCounts['chispa1']}</span>
        <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement('chispa1')}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>

            <br />

      <div className="chispas">
        <p className="letra">Chispas</p>
        <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement('chispa2')}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span className='cifra'>{chispasCounts['chispa2']}</span>
        <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement('chispa2')}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>

            <br />

      <div className="chispas">
        <p className="letra">Chispas</p>
        <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement('chispa3')}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span className='cifra'>{chispasCounts['chispa3']}</span>
        <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement('chispa3')}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>

            <br />


            <button className="cancelar"><p className="letra">Cancelar</p></button>
            <button className="aceptar"><p className="letra">Aceptar</p></button>

            <div className="cono">
            <p className="letras2"><strong>Cono</strong></p>

            <div className="heladosBotones">
            <button className="boton6">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>

            <button className="boton7">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>

            <button className="boton8">
             <img src={Helado} className="conos"/>
             <p>Home</p>
            </button>
            </div>

             <br />
             <br />
            
            <p className="letras3"><strong>Cono</strong></p>

              <br />

              <div className="divsChispas">
      <div className="chispas">
        <p className="letra">Chispas</p>
        <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement('chispa4')}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span className='cifra'>{chispasCounts['chispa4']}</span>
        <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement('chispa4')}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>

             <br />

      <div className="chispas">
        <p className="letra">Chispas</p>
        <Button className='mas' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleIncrement('chispa5')}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span className='cifra'>{chispasCounts['chispa5']}</span>
        <Button className='menos' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }} onClick={() => handleDecrement('chispa5')}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>
              </div>

            <div className="botonesAC">
            <button className="cancelar"><p className="letra">Cancelar</p></button>
            <button className="aceptar"><p className="letra">Aceptar</p></button>
            </div>

            </div>
      </div>
    </div>

  );
}

export default App;