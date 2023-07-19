import React, { useState } from 'react';
import Card from './Muestreo';


function Body() {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);

  const tabladesplegable = () => {
    setMostrarDesplegable(!mostrarDesplegable);
  };
  <div className="Body" style={{ position: 'relative', zIndex: '9999' }}>
  
    <strong>Tabla de apuestas</strong>
  
  </div>
  return (
    <div className='header'>
        <div className='flex items-center justify-center'>   
        <button className='bg-white py-3 px-10   rounded-md mt-20 text-3xl font-mono font-extrabold uppercase hover:bg-slate-400 hover:text-white transition-colors duration-1000' onClick={tabladesplegable}>
          {mostrarDesplegable ? "" : ""} Apuesta aqui
        </button>
      </div>
      {mostrarDesplegable && <Card style={{ margin: '50px 50'  }} />}
    </div>
  );
}

export default Body;
