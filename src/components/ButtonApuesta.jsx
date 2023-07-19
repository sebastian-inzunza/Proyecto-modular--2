import React, { useState } from 'react';

const ButtonApuesta = () => {
  const [apuestaRealizada, setApuestaRealizada] = useState(false);

  const handleApostarClick = () => {
    const confirmarApostar = window.confirm('¿Seguro que quieres apostar?');
    if (confirmarApostar) {
      setApuestaRealizada(true);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      {apuestaRealizada ? (
        <label className="bg-green-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900">
          Se agregó
        </label>
      ) : (
        <button
          className="bg-yellow-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900 hover:bg-yellow-700 hover:text-white transition duration-300"
          onClick={handleApostarClick}
        >
          Apostar
        </button>
      )}
    </div>
  );
};

export default ButtonApuesta;
