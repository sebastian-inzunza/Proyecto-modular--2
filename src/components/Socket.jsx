import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function Socket() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8081");

    // Escuchar el evento "datos_actualizados" para obtener datos actualizados
    socket.on("datos_actualizados", (resultados) => {
      setDatos(resultados);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Función para cargar los datos desde el servidor
  const cargarDatos = async () => {
    try {
      const response = await fetch("http://localhost:8081/seleccionar-datos");
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  console.log(datos)

  // Cargar los datos automáticamente al cargar el componente
  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div className="Socket">
    <h1>Datos de la tabla (Actualización Automática)</h1>
    <ul>
      {datos.map((e, index) => (
        <li key={index}>{e.eventName}</li>
      ))}
    </ul>
  </div>
  );
}

export default Socket;
