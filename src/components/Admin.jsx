import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import FileDragger from "./FileDragger";
import ClockWithSeconds from "./ClockWithSeconds";

function Admin() {
  const navigate = useNavigate();

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
    const token = getCookieValue("token");
    const level = getCookieValue("level");
    if (token && level === "9") {
    } else {
      navigate("/");
    }
  }, []);

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
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">
          Arrastra el archivo para cargarlo a la base de datos y empezar el aprendizaje
        </h1>
        <FileDragger />
        <div className="mt-20">
        <button className="bg-yellow-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900 hover:bg-yellow-700 hover:text-white transition duration-300">Cargar Datos</button>

        </div>

      </main>
    </div>
  );
}

export default Admin;
