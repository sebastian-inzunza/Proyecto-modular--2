// ContentComponent.jsx
import React, { useState } from "react";
import { Layout } from "antd";
import Tablecomponent from "./TablesSport/Tablecomponent";
import HistorialCompoenent from "./hitorico/HistorialCompoenent";


const { Content } = Layout;

const ContentComponent = ({ selectedMenuItem }) => {
  function limpiarYConvertirAMinusculas(cadena) {
    const cadenaNormalizada = cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cadenaLimpia = cadenaNormalizada.replace(/[^a-zA-Z0-9]/g, '');
    return cadenaLimpia.toLowerCase();
  }

  const tipo = limpiarYConvertirAMinusculas(selectedMenuItem);

  const [vistaActual, setVistaActual] = useState("tabla"); // "tabla" o "historial"

  const mostrarVistaHistorial = () => {
    setVistaActual("historial");
  };

  const mostrarVistaTabla = () => {
    setVistaActual("tabla");
  };

  return (
    <Content
      style={{
        margin: "0 16px",
      }}
    >
      <div className="md:flex justify-between bg-slate-900/70 py-2 mt-5 ">
        <div className="text-lg font-bold m-2 text-gray-200 uppercase">
          {selectedMenuItem} Liga Mexicana
        </div>
        <div className="flex justify-end">
          <button
            onClick={mostrarVistaTabla}
            className={`${
              vistaActual === "tabla" ? "bg-red-600" : "bg-gray-800"
            } mx-2 px-3 md:text-lg font-bold  rounded-md text-white`}
          >
            En vivo
          </button>
          <button
            onClick={mostrarVistaHistorial}
            className={`${
              vistaActual === "historial" ? "bg-red-600" : "bg-gray-800"
            } mx-2 px-3 hover:bg-red-600 hover:text-white  text-lg   transition ease-in duration-300 font-bold rounded-md text-gray-400`}
          >
            Historial
          </button>
        </div>
      </div>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
        }}
      >
        {vistaActual === "tabla" ? (
          <Tablecomponent tipo={tipo} titulo={selectedMenuItem} />
        ) : (
          <HistorialCompoenent />
        )}
      </div>
    </Content>
  );
};

export default ContentComponent;
