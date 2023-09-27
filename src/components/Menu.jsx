import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Card from "./Card";
import futbol from "../asset/gifs/football-soccer.gif"
import UserData from "./UserData";
import Modal from './Modal'; // Asegúrate de importar el componente Modal


function Prueba() {
  const navigate = useNavigate();

  const [show, setShow] = useState(true)










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


    if (token) {
    } else {
      navigate("/");
      
    }
  }, []);

  const clearToken = (cookieName) => {
    const expirationDate = new Date("2000-01-01").toUTCString();
    document.cookie = `${cookieName}=; expires=${expirationDate}; path=/`;
  };
  const deportes = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Béisbol",
    "Atletismo",
    "Natación",
    "Golf",
    "Voleibol",
  ];


  const isShow =()=>{
    setShow(false)
  }

  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-800 flex flex-col justify-start items-start ">
          <Card
            title={"Métodos de pago"}
            button={"Agregar"}
            
          />

          <div className="  bg-white shadow-md mx-2 rounded-md ">
            <div className="bg-stone-800 px-8 py-2 ">
              <h2 className="text-2xl font-semibold  text-white">
                Enlaces Rapidos
              </h2>
            </div>
       
              <div className="my-2 ml-2">
                <Link to={"deportes/futbol"} className="text-lg font-bold text-gray-800 " onClick={isShow}>
                  Futbol Local
                </Link>
                <hr className="border-t-2 border-gray-400 my-1" />
              </div>
              <div className="my-2 ml-2">
                <Link to={"deportes/basketball"} className="text-lg font-bold text-gray-800 ">
                  Basketball
                </Link>
                <hr className="border-t-2 border-gray-400 my-1" />
              </div>
              <div className="my-2 ml-2">
                <Link to={"deportes/beisball"} className="text-lg font-bold text-gray-800 ">
                  Beisboll
                </Link>
                <hr className="border-t-2 border-gray-400 my-1" />
              </div>
              <div className="my-2 ml-2">
                <Link to={"deportes/tennis"} className="text-lg font-bold text-gray-800 ">
                  Tennis
                </Link>
                <hr className="border-t-2 border-gray-400 my-1" />
              </div>

              {/* <br />
              <a href="" className="text-lg font-bold text-gray-800 ">Basketball</a>
              <hr className="border-t-2 border-gray-400 my-1" />

              <br />
              <a href="" className="text-lg font-bold text-gray-800 ">Beisboll</a>
              <hr className="border-t-2 border-gray-400 my-1" />

              <br />
              <a href="" className="text-lg font-bold text-gray-800 ">Tennis</a>
              <div className="mt-4"></div>
              <hr className="border-t-2 border-gray-400 my-1" /> */}
        
          </div>
          <Card title={"Deportes"} deportes={deportes} />
        </div>
        <div className="flex-1 bg-slate-700">
          {show ? (
            <>
        <UserData />

            <div className="flex justify-center items-center h-screen overflow-hidden">
          <img src={futbol} alt="" />

          </div>
          </>
          ):   <Outlet />}
          
        
        </div>
      </div>
    </div>
  );
}

export default Prueba;
