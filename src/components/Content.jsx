import React from 'react';
import ImagenBody from "../asset/3.jpg";

function Body() {
  return (
    <div className='flex justify-center relative'>
      <div className="bg-black bg-opacity-50 absolute inset-0"></div> {/* Fondo gris transparente */}
      <img src={ImagenBody} alt="Fondo" className="w-full h-screen object-cover" style={{ objectFit: 'cover' }} />
    </div>
  );
}

export default Body;
