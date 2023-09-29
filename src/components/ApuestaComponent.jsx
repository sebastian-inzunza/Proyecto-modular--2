import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import moneda from "../asset/gifs/1.gif";
import Swal from "sweetalert2";
import axios from "axios";

function ApuestaComponent({ informacionRecibida }) {
  const [cantidadApostar, setCantidadApostar] = useState("");

  const handleAceptarClick = () => {
    // Aquí puedes realizar la lógica de aceptar la apuesta con la cantidad ingresada

    if(cantidadApostar){
      const data = {
        userId: id,
        eventId: informacionRecibida.id,
        amount: cantidadApostar,
        outcome:informacionRecibida.equiposeleccionado,
      }

      axios
  .post("http://localhost:8081/insertApuesta", data)
  .then((response) => {
    Swal.fire({
      title: "Evento registrado",
      icon: "success",
    }).then(() => {
      // Redireccionar a la página actual
      window.location.reload();
    });
  })
  .catch((error) => {
    Swal.fire("Hubo un error al registrar");
  });
      console.log( data);
    }else{
      Swal.fire("Escribe un monto")
    }
  

  };

  const [id, setId] = useState("");

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
    const id = getCookieValue("id");
    setId(id);
  }, []);

  return (
    <div className="mb-2">
      <div className="w-64 bg-gray-800 p-4">
      <div className="flex">
  <div className="mr-32 font-bold" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
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
          <div className="w-20">
            <img src={moneda} />
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
