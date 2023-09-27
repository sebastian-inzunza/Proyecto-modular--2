import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import moneda from "../asset/gifs/1.gif";

function ApuestaComponent({ informacionRecibida }) {
  const [seleccion, setSeleccion] = useState("");
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

  const [balance, setBalance] = useState("")


    
  const getCookieValue = (cookieName) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };

  useEffect(() => {
    const balance = getCookieValue("balance");
    setBalance(balance)

  }, []);

  return (
    <div className="mb-2">
      {balance}
      <div className="w-64 bg-gray-800 p-4">
        <div className="flex">
          <div className="mr-32 font-bold">
            {informacionRecibida.equiposeleccionado}
          </div>
          <div className="font-bold">
            {informacionRecibida.momioSeleccionado}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span className="text-base text-white">
            {informacionRecibida.mensaje}
          </span>
          <div className="w-20 ">
          <img src={moneda}/>

          </div>
        </div>

        <input
          type="number"
          value={cantidadApostar}
          onChange={(e) => setCantidadApostar(e.target.value)}
          placeholder="Cantidad a apostar"
          className="border rounded p-2 mt-2 w-full appearance-none"
          min={1}
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
