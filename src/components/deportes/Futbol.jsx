import React, { useState, useEffect } from "react";
import CardAPuestas from "../CardAPuestas";
import ApuestaComponent from "../ApuestaComponent";
import UserData from "../UserData";
import axios from "axios";
import io from "socket.io-client";

function Futbol() {
  const [eventos, setEventos] = useState([]); // Inicializa el estado con un array vacío

  // const [partidos, setPartidos] = useState([
  //   {
  //     title: "Fútbol Local 1",
  //     icon: 2,
  //     local: "Puebla",
  //     momio: "+125",
  //     empate: "Empate",
  //     momio_empate: "+105",
  //     visitante: "Juarez",
  //     momio_2: "+125",
  //     informacionEnviada: "",
  //   },
  //   {
  //     title: "Fútbol Local 1",
  //     icon: 4,
  //     local: "Puebla",
  //     momio: "+125",
  //     empate: "Empate",
  //     momio_empate: "+105",
  //     visitante: "Juarez",
  //     momio_2: "+125",
  //     informacionEnviada: "",
  //   },
  //   {
  //     title: "Fútbol Local 1",
  //     icon: 5,
  //     local: "Puebla",
  //     momio: "+125",
  //     empate: "Empate",
  //     momio_empate: "+105",
  //     visitante: "Juarez",
  //     momio_2: "+125",
  //     informacionEnviada: "",
  //   },
  //   // Agrega más objetos de partido aquí
  // ]);

  const handleEnviarInformacion = (info, partidoIndex) => {
    setEventos((prevPartidos) => {
      const newPartidos = [...prevPartidos];
      newPartidos[partidoIndex].informacionEnviada = info;
      return newPartidos;
    });
  };

  // useEffect(() => {
  //   axios.get('http://localhost:8081/getEventos')
  //   .then((response) => {
  //     // Actualiza el estado de eventos con los datos recibidos
  //     setEventos(response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error al obtener eventos:', error);
  //   });

  // }, [])

  useEffect(() => {
    const socket = io("http://localhost:8081");

    // Escuchar el evento "datos_actualizados" para obtener datos actualizados
    socket.on("datos_actualizados", (resultados) => {
      setEventos(resultados);
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
      setEventos(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };


  // Cargar los datos automáticamente al cargar el componente
  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div className="flex">
      <div className="w-5/6 space-y-4">
        <UserData />
        {eventos.map((partido, index) => (
          <div key={index}>
            <CardAPuestas
            id={partido.eventId}
              title={partido.eventName}
              icon={partido.icon}
              local={partido.nombreLocal}
              momio={partido.oddsLocalTeam}
              empate={"Empate"}
              momio_empate={partido.oddsDraw}
              visitante={partido.nombreVisitante}
              momio_2={partido.oddsVisitTeam}
              onEnviarInformacion={(info) =>
                handleEnviarInformacion(info, index)
              } // Pasa el índice
            />
          </div>
        ))}
      </div>

      <div className="w-1/6 mx-4  flex flex-col mt-16">
        {eventos.map((partido, index) => (
          <ApuestaComponent
            key={index}
            informacionRecibida={partido.informacionEnviada}
          />
        ))}
      </div>
    </div>
  );
}

export default Futbol;
