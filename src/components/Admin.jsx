import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import FileDragger from "./FileDragger";
import ClockWithSeconds from "./ClockWithSeconds";
import * as XLSX from "xlsx";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  const [dato, setDato] = useState(null);
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

  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState(null);


  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    processExcelFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    processExcelFile(file);
  };

  const processExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Acceder a la primera hoja de cálculo
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      // Convertir la hoja de cálculo a un objeto JSON
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      setExcelData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    const token = getCookieValue("token");
    const level = getCookieValue("level");
    if (token && level === "9") {
    } else {
      navigate("/");
    }
  }, []);

  const sendData = () => {
    const data = {
      statisticsId: excelData[0].statisticsId,
      eventId: excelData[0].eventId,
      localGoals: excelData[0].localGoals,
      visitGoals: excelData[0].visitGoals,
      localShoots: excelData[0].localShoots,
      visitShoots: excelData[0].visitShoots,
      localFouls: excelData[0].localFouls,
      visitFouls: excelData[0].visitFouls,
      result: excelData[0].result,
    };

    console.log(data);
    axios
      .post("http://localhost:8081/insertEstadistica", data)
      .then((response) => {
        console.log(response.data); // Respuesta del backend
        if (response.status === 200) {
          console.log("cargado");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="bg-blue-900 text-white w-64 flex-shrink-0">
        <div className="p-2">
          <h2 className="text-2xl font-bold">Control Aprendizaje</h2>
        </div>
        <nav className="p-2">
          <ul>
            <li className="p-2 hover:bg-blue-800">
              <a href="#" className="block">
                Ingreso de muestro
              </a>
            </li>

            {/* Agregar más elementos de navegación aquí */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 h-auto ">
        {/* <div class="bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto">
          <legend class="text-xl font-bold mb-2">Eventos</legend>
          <input
            type="text"
            class="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500 mb-2"
            placeholder="Evento id"
          />
          <input
            type="text"
            class="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500 mb-2"
            placeholder="Nombre del evento"
          />
          <input
            type="text"
            class="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500 mb-2"
            placeholder="Fecha del evento"
          />
          <input
            type="text"
            class="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500 mb-2"
            placeholder="Equipo Local"
          />
          <input
            type="text"
            class="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-500 mb-2"
            placeholder="Equipo Visitante"
          />

          <button className="bg-yellow-500 px-2 py-1 rounded-md hover:bg-yellow-400">Cargar</button>
        </div> */}
        <h1 className="text-2xl font-bold mb-4 mt-4">
          Arrastra el archivo para cargarlo a la base de datos y empezar el
          aprendizaje
        </h1>
        <div
          className={`border-dashed border-2 p-4 rounded-lg ${
            dragging ? "bg-gray-100" : "bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <h2 className="text-lg font-semibold mb-2">
            Arrastra y suelta archivo de Excel aqui:
          </h2>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="hidden"
            ref={(input) => input && (input.value = "")}
          />
          {selectedFile && (
            <p className="text-gray-600">Selected File: {selectedFile.name}</p>
          )}
          {excelData && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Excel Data:</h3>
              <ul>
                {excelData.map((row, index) => (
                  <li key={index}>
                 
                    {JSON.stringify(row)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-20">
          <button
            onClick={sendData}
            className="bg-yellow-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900 hover:bg-yellow-700 hover:text-white transition duration-300"
          >
            Cargar Datos
          </button>
        </div>
      </main>
    </div>
  );
}

export default Admin;
