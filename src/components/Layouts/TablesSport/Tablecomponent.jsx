import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import "../../../App.css";
import futbol from "../../../asset/iconos Deportes/0.png";
import { FaFutbol } from "react-icons/fa";
import io from "socket.io-client";

const handleEnviarInformacion = (info, partidoIndex) => {
  setEventos((prevPartidos) => {
    const newPartidos = [...prevPartidos];
    newPartidos[partidoIndex].informacionEnviada = info;
    return newPartidos;
  });
};

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    width: 300,
  },
  {
    title: "",
    dataIndex: "visitante",
    key: "visitante",
    width: 300,
  },
  {
    title: "",
    dataIndex: "empate",
    key: "empate",
    width: 300,
  },
  {
    title: "",
    dataIndex: "local",
    key: "local",
    width: 300,
  },
];

const columnnMobile = [
  {
    dataIndex: "text",
    key: "text",
  },
];

const dataMobile = [
  {
    text: (
      <div>
        <div className="flex justify-center">
          <FaFutbol size={25} />
        </div>
        <div className="grid grid-cols-2 mt-3">
          <div className="grid grid-rows-2 gap-3">
            <div className="text-base text-neutral-500 font-semibold">
              Leones negros
            </div>
            <div className="text-base text-neutral-500 font-semibold">
              Chivas
            </div>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="text-end text-green-500 font-semibold">sad</div>
            <div className="text-end text-green-500 font-semibold">sad</div>
          </div>
        </div>
        <div className="border border-stone-500 mt-2"></div>
        <div className="flex justify-center mt-4">
          <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-sm">Chivas</span>
              <br />
              <span className="font-bold">+100</span>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-sm">Chivas</span>
              <br />
              <span className="font-bold">+100</span>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-sm">Chivas</span>
              <br />
              <span className="font-bold">+100</span>
            </div>
          </button>
        </div>
      </div>
    ),
  },
  // Agrega más objetos si es necesario
];

const App = () => {
  const [eventos, setEventos] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => {
    const socket = io("http://localhost:8081");
    
    // const socket = io("https://server-modular-production.up.railway.app")
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
      //  const response = await fetch("https://server-modular-production.up.railway.app/seleccionar-datos");

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

  const data = [];

  eventos.forEach((evento, index) => {
    data.push({
      key: evento.eventId,
      name: (
        <div className="">
          <div className="grid grid-cols-1 items-center">
            <div className="grid grid-cols-2 gap-0 text-lg text-neutral-800">
              <div className=" font-bold flex items-center">
                <FaFutbol size={"1.3em"} className="mr-4" />{" "}
                {evento.nombreLocal}
              </div>
              <div className="text-end text-green-500 font-semibold">
                {evento.oddsLocalTeam}
              </div>
              <div className=" font-bold flex items-center">
                <FaFutbol size={"1.3em"} className="mr-4" />{" "}
                {evento.nombreVisitante}
              </div>
              <div className="text-end text-green-500 font-semibold">
                {evento.oddsVisitTeam}
              </div>
            </div>
          </div>
        </div>
      ),
      visitante: (
        <div className="flex justify-center m-0">
          <button className="bg-gray-200 px-20 py-2 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">{evento.nombreLocal}</span>
              <br />
              <span>{evento.oddsLocalTeam}</span>
            </div>
          </button>
        </div>
      ),
      empate: (
        <div className="flex justify-center m-0">
          <button className="bg-gray-200 px-20 py-2 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">Empate</span>
              <br />
              <span>{evento.oddsDraw}</span>
            </div>
          </button>
        </div>
      ),
      local: (
        <div className="flex justify-center m-0">
          <button className="bg-gray-200 px-20 py-2 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">{evento.nombreVisitante}</span>
              <br />
              <span>{evento.oddsVisitTeam}</span>
            </div>
          </button>
        </div>
      ),
    });
  });

  const dataMobile = [];
  eventos.forEach((evento, index) => {
    dataMobile.push({
      text: (
        <div>
          <div className="flex justify-center">
            <FaFutbol className="mt-2" size={25} />
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div className="grid grid-rows-2 gap-3">
              <div className="text-base text-neutral-500 font-semibold">
                {evento.nombreLocal}
              </div>
              <div className="text-base text-neutral-500 font-semibold">
                {evento.nombreVisitante}
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="text-end text-green-500 font-semibold">
                {evento.oddsLocalTeam}
              </div>
              <div className="text-end text-green-500 font-semibold">
                {evento.oddsVisitTeam}
              </div>
            </div>
          </div>
          <div className="border border-stone-500 mt-2"></div>
          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
              <div className="block font-semibold">
                <span className="text-sm">{evento.nombreLocal}</span>
                <br />
                <span className="font-bold"> {evento.oddsLocalTeam}</span>
              </div>
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
              <div className="block font-semibold">
                <span className="text-sm">Empate</span>
                <br />
                <span className="font-bold">{evento.oddsDraw}</span>
              </div>
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
              <div className="block font-semibold">
                <span className="text-sm">{evento.nombreVisitante}</span>
                <br />
                <span className="font-bold">  {evento.oddsVisitTeam}</span>
              </div>
            </button>
          </div>
        </div>
      ),
    });
  });

  return (
    <>
      <div className="lg:block hidden">
        <Table
          bordered
          columns={columns}
          className="mx-32"
          dataSource={data}
          size="small"
        />
      </div>

      <div className="block lg:hidden">
        <div className="border">
          <div className="bg-stone-600 py-3 px-1">
            <h1 className="text-white text-xl font-semibold">
              Futbol Nacional
            </h1>
          </div>

          <Table
            bordered
            columns={columnnMobile}
            dataSource={dataMobile}
            className="mx-3 mt-3"
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default App;
