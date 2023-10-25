import React, {useState} from 'react';
import '../css/perfiles.css';
import Fresa from '../assets/img/choco37_1.png';
import Chocolate from '../assets/img/image_2.png';

function App() {

  return (
      <div>
      <img src={Fresa} className="choco"/>

          <img src={Chocolate} className="chocofresa"/>    
    </div>

  );
}

export default App;