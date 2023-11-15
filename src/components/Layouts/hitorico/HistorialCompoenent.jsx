import React, { useEffect, useState } from "react";
import { Card } from "antd";
import 'animate.css';
const { Meta } = Card;
function HistorialCompoenent() {
  const [id, setId] = useState(0);
  const [apuesta, setApuesta] = useState([]); // Inicializa el estado con un array vacío
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

  // Función para cargar los datos desde el servidor
  const cargarApuestas = async (tipo) => {
    try {
      const response = await fetch(
        "https://server-modular-production.up.railway.app/seleccionarApuestas/" + tipo
      );
      //  const response = await fetch("https://server-modular-production.up.railway.app/seleccionar-datos");

      const data = await response.json();
      setApuesta(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  console.log(id);
  useEffect(() => {
    const id = getCookieValue("id");
    setId(id);
    cargarApuestas(id);
  }, []);

  console.log(apuesta);

  return (
    <div>
      <div className="grid lg:grid-cols-5 justify-center animate__animated animate__fadeInLeftBig">
        {apuesta.map((element, index) => (
          <Card
            className="mb-6"
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://imgs.search.brave.com/D0ISSxLKSIzI5DUv2p92KRpHYM0tMr7P-Gg2M6DFztk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb25j/ZXB0by5kZS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wNS9k/ZXBvcnRlMS1lMTU0/ODI1MDM2NjYxMy5q/cGc"
              />
            }
          >
            <Meta
              title={element.eventName}
              description={
                <div className="flex flex-col">
                  <span>{element.outcome} {' '} <span className="bg-green-400 px-2 rounded-full">$ {element.amount} </span></span>
                  <span
                    className={` rounded-full px-2 text-center font-bold ${
                      element.result === "En proceso"
                        ? "bg-yellow-300"
                        :  element.result === "Finalizado" ? 'bg-green-300' : null
                    }`}
                  >
                    {element.result}
                  </span>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HistorialCompoenent;
