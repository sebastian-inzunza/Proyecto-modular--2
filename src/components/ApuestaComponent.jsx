import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


function ApuestaComponent() {
  const [cantidadApostar, setCantidadApostar] = useState("");
  const [exito, setExito] = useState(false); // Estado para controlar el mensaje de éxito
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad del componente

  const handleAceptarClick = () => {
    // Aquí puedes realizar la lógica de aceptar la apuesta con la cantidad ingresada
    console.log("Cantidad a apostar:", cantidadApostar);

    // Cambiar el estado para mostrar el mensaje de éxito y ocultar el componente
    setExito(true);
    setVisible(false);

    // Después de 1 segundo, ocultar el mensaje de éxito
    setTimeout(() => {
      setExito(false);
    }, 1000);
  };

  return (
    <div className="">
    <img src="" alt="" />
        <div className="w-64 bg-gray-800 flex flex-col justify-start items-start p-4">
          {/* Input para agregar cantidad */}
          <input
            type="number"
            value={cantidadApostar}
            onChange={(e) => setCantidadApostar(e.target.value)}
            placeholder="Cantidad a apostar"
            className="border rounded p-2 mt-2"
          />
          {/* Botón de aceptar en color verde */}
          <button
            onClick={handleAceptarClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded p-2 mt-2"
          >
            Aceptar
          </button>
        </div>

    </div>
  );
}

export default ApuestaComponent;
