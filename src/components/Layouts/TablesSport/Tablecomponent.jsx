import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import "../../../App.css";
import futbol from "../../../asset/iconos Deportes/0.png";
import { FaFutbol } from "react-icons/fa";
import io from "socket.io-client";
import ModalComponent from "./ModalComponent";

const App = ({tipo, titulo}) => {
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [visible, setVisible] = useState(false);
  const [equipo, setEquipo] = useState("");
  const [momio, setMomio] = useState("");
  const [nombre, setNombre] = useState("");
  const [enemigo, setEnemigo] = useState("");
  const [id, setId] = useState("");


  const [eventos, setEventos] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => {
    const socket = io("https://server-modular-production.up.railway.app");
    
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
  const cargarDatos = async (tipo) => {
    try {
      const response = await fetch("https://server-modular-production.up.railway.app/seleccionar-datos/"+tipo);
      //  const response = await fetch("https://server-modular-production.up.railway.app/seleccionar-datos");

      const data = await response.json();
      setEventos(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  // Cargar los datos automáticamente al cargar el componente
  useEffect(() => {
    cargarDatos(tipo);
  }, [tipo]);



  const showModal = (evento, equipo, momio, enemigo, id) => {
    setId(id)
    setEquipo(equipo)
    setSelectedEvento(evento)
  setMomio(momio)
    setVisible(true);
    setNombre(evento.eventName)
    setEnemigo(enemigo)
  };

  const closeModal = () => {
    setSelectedEvento(null);
    setVisible(false);
  };
  const columns = [
    {
      title: "",
      dataIndex: "name.local",
      key: "name.local",
      width: 300,
      render: (text, record) => 
      <div className="">
          <div className="grid grid-cols-1 items-center">
            <div className="grid grid-cols-2 gap-0 text-base text-neutral-800">
              <div className=" font-bold flex items-center whitespace-nowrap" >
                <FaFutbol size={".9em"} className="mr-4" />
                {record.nombreLocal}
              </div>
              <div className="text-end text-green-500 font-semibold">
                {record.oddsLocalTeam}
              </div>
              <div className=" font-bold flex items-center">
                <FaFutbol size={".9em"} className="mr-4" />
                {record.nombreVisitante}
              </div>
              <div className="text-end text-green-500 font-semibold whitespace-nowrap">
                {record.oddsVisitTeam}
              </div>
            </div>
          </div>
        </div>
    },
    {
      title: "",
      dataIndex: "local",
      key: "local",
      width: 300,
      render: (text, record) => (
        <div className="flex justify-center m-0">
          <button onClick={() => showModal(record, record.nombreLocal, record.oddsLocalTeam, record.nombreVisitante, record.eventId  )} className="bg-gray-200 w-60 py-2 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">{record.nombreLocal}</span>
              <br />
              <span>{record.oddsLocalTeam}</span>
            </div>
          </button>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "empate",
      key: "empate",
      width: 300,
      render: (text, record) => (
  
        <div className="flex justify-center m-0">
          <button onClick={() => showModal(record,"Empate" ,record.oddsDraw, '', record.eventId )} className="bg-gray-200 px-20 py-2 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">Empate</span>
              <br />
              <span>{record.oddsDraw}</span>
            </div>
          </button>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "local",
      key: "local",
      width: 300,
      render: (text, record) => (
        <div className="flex justify-center m-0">
          <button onClick={() => showModal(record,record.nombreVisitante, record.oddsVisitTeam, record.nombreLocal,  record.eventId )} className="bg-gray-200 py-2 w-60 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
            <div className="block font-semibold">
              <span className="text-base">{record.nombreVisitante}</span>
              <br />
              <span>{record.oddsVisitTeam}</span>
            </div>
          </button>
        </div>
      ),
    },
  ];

  const columnnMobile = [
  {
    dataIndex: "",
    key: "",
    render: (text, record) =>(
      <div>
              <div className="flex justify-center">
                <FaFutbol className="mt-2" size={25} />
              </div>
              <div className="grid grid-cols-2 mt-3">
                <div className="grid grid-rows-2 gap-3">
                  <div className="text-base text-neutral-500 font-semibold">
                    {record.nombreLocal}
                  </div>
                  <div className="text-base text-neutral-500 font-semibold">
                    {record.nombreVisitante}
                  </div>
                </div>
                <div className="grid grid-rows-2 gap-3">
                  <div className="text-end text-green-500 font-semibold">
                    {record.oddsLocalTeam}
                  </div>
                  <div className="text-end text-green-500 font-semibold">
                    {record.oddsVisitTeam}
                  </div>
                </div>
              </div>
              <div className="border border-stone-500 mt-2"></div>
              <div className="flex justify-center mt-4">
                <button onClick={() => showModal(record, record.nombreLocal, record.oddsLocalTeam, record.nombreVisitante,  record.eventId   )}  className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
                  <div className="block font-semibold">
                    <span className="text-sm">{record.nombreLocal}</span>
                    <br />
                    <span className="font-bold"> {record.oddsLocalTeam}</span>
                  </div>
                </button>
              </div>
      
              <div className="flex justify-center mt-4">
                <button  onClick={() => showModal(record,"Empate" ,record.oddsDraw, '', record.eventId  )} className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
                  <div className="block font-semibold">
                    <span className="text-sm">Empate</span>
                    <br />
                    <span className="font-bold">{record.oddsDraw}</span>
                  </div>
                </button>
              </div>
      
              <div className="flex justify-center mt-4">
                <button  onClick={() => showModal(record,record.nombreVisitante, record.oddsVisitTeam, record.nombreLocal,  record.eventId )}  className="bg-gray-200 w-full py-1 rounded-md transform transition-transform duration-300 hover:bg-green-500 hover:text-white ease-in-out hover:-translate-y-1 hover:shadow-md ">
                  <div className="block font-semibold">
                    <span className="text-sm">{record.nombreVisitante}</span>
                    <br />
                    <span className="font-bold">  {record.oddsVisitTeam}</span>
                  </div>
                </button>
              </div>
            </div>
  )
    }]

  return (
        <>
          <div className="lg:block hidden">
            <Table
              bordered
              columns={columns ? columns : []}
              dataSource={eventos}
              size="middle"
            />
          </div>
          <ModalComponent visible={visible} onCancel={closeModal} evento={selectedEvento} equipoSeleccionado={equipo} momio={momio} nombreEvento={nombre} equipoEnemigo={enemigo} eventId={id}/>
    
          <div className="block lg:hidden">
            <div className="border">
              <div className="bg-stone-600 py-3 px-1">
                <h1 className="text-white text-xl font-semibold">
                {titulo} Liga Mexicana
                </h1>
              </div>
    
              <Table
                bordered
                columns={columnnMobile ? columnnMobile : []}
                dataSource={eventos}
                className="mx-3 mt-3"
                size="small"
             />
            </div>
          </div>
        </>
      );
};

export default App;
