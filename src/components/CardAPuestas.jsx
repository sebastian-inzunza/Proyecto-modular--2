import { useState } from "react";
import React from "react";
import futbol from "../asset/iconos/futbol.svg";

function CardAPuestas({
  id,
  title,
  icon,
  local,
  visitante,
  empate,
  momio,
  momio_2,
  momio_empate,
  onEnviarInformacion,
}) {
  const [presionado, setPresionado] = useState(false);
  const [presionadoEmpate, setPresionadoEmpate] = useState(false);
  const [presionadoVisi, setPresionadoVisi] = useState(false);

  const seleccion = (value) => {
    const data = {
      id: id,
      equiposeleccionado:
        value === 1 ? local : value === 2 ? visitante : empate,
        momioSeleccionado:  value === 1 ? momio : value === 2 ? momio_2 : momio_empate,
      equipo_1: {
        nombre: local,
        momio: momio,
      },
      equipo_2: {
        nombre: visitante,
        momio: momio_2,
      },
      empate: momio_empate,
      mensaje: "Resultado Final (Tiempo Regular)" 
    };
    if (value === 1) {
      if(presionadoEmpate || presionadoVisi){
        setPresionadoEmpate(false)
        setPresionadoVisi(false)
      }
     
      setPresionado(!presionado);
      if (!presionado) {
        onEnviarInformacion(data);
      } else {
        onEnviarInformacion({});
      }
    }
    if (value === 2) {
      if(presionado || presionadoEmpate){
        setPresionado(false)
        setPresionadoEmpate(false)
      }
     
      setPresionadoVisi(!presionadoVisi);
      if (!presionadoVisi) {
        onEnviarInformacion(data);
      } else {
        onEnviarInformacion({});
      }
    }
    if (value === 3) {
      if(presionado || presionadoVisi){
        setPresionado(false)
        setPresionadoVisi(false)
      }
      setPresionadoEmpate(!presionadoEmpate);

      if (!presionadoEmpate) {
        onEnviarInformacion(data);
      } else {
        onEnviarInformacion({});
      }
    }
  };

  return (
    <div className="flex mt-12">
      <div className="bg-white shadow-md m-2 rounded-md w-full">
        <div className="bg-stone-800 p-3">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="p-3 flex justify-between">
          <button
            className={`bg-gray-300 w-6/12 rounded-md hover:bg-slate-700 ${
              presionado ? "bg-red-500" : ""
            }`}
            onClick={() => seleccion(1)}
          >
            <div className="flex justify-between items-center m-2">
              <img src={futbol} alt="" />
              <span className="text-2xl">
                {local} {momio}
              </span>
            </div>
          </button>
          <button
            className={`bg-gray-300 px-3 py-1 rounded-md hover:bg-slate-700 mr-2 ml-2 ${
              presionadoEmpate ? "bg-red-500" : ""
            }`}
            onClick={() => seleccion(3)}
          >
            <span className="text-xl font-bold">
              {empate} {momio_empate}
            </span>
          </button>
          <button
            className={`bg-gray-300 w-6/12 py-1 rounded-md hover:bg-slate-700 ${
              presionadoVisi ? "bg-red-500" : ""
            }`}
            onClick={() => seleccion(2)}
          >
            <div className="flex justify-between items-center m-2">
              <img src={futbol} alt="" />
              <span className="text-2xl">
                {visitante} {momio_2}
              </span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src={"/src/asset/gifs/" + icon + ".gif"} width={"150px"} alt="" />
      </div>
    </div>
  );
}

export default CardAPuestas;
