import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Credit from "../asset/holo.png";
import axios from "axios";


function Card({ text, title, deportes, button }) {
  const [id, setId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [dateExpire, setDateExpire] = useState("");
  const [isMensaje, isSetMensaje] = useState(false);


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
    const id = getCookieValue("id");

   
    setId(id);
  }, []);



  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDeposito = () => {
    if (cardNumber && cvv && dateExpire) {
      isSetMensaje(false);

      const data = {
        idUser: id,
        cardNumber: cardNumber,
        cvv: cvv,
        dateExpire: dateExpire,
      };
      axios
        .post("http://localhost:8081/updateCBalance", data)
        .then((response) => {
          // Maneja la respuesta del servidor (si es necesario)
          console.log("Respuesta del servidor:", response.data);

          setCardNumber("");
          setCvv("");
          setDateExpire("");
        })
        .catch((error) => {
          // Maneja los errores de la solicitud
          console.error("Error:", error);
        });

      console.log(data);
      setIsModalOpen(false);
    } else {
      isSetMensaje(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    isSetMensaje(false);
    setCardNumber("");
    setCvv("");
    setDateExpire("");
  };





  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    // Verifica si la longitud del texto es igual a 2 para agregar "/" automáticamente
    if (inputDate.length === 2 && !inputDate.includes("/")) {
      setDateExpire(inputDate + "/");
    } else {
      setDateExpire(inputDate);
    }
  };











  return (
    <div className="bg-white shadow-md m-2 rounded-md w-60">
      <div className="bg-stone-800 p-3">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-3">
        <div className="max-w-xs">
          {button ? (
            <>
            <div className="flex justify-center">
            <button onClick={openModal} className="bg-blue-400 w-full rounded-md text-white font-bold text-lg py-2 hover:bg-blue-600 hover:text-black">{button}</button>
            </div>
              
              <div>
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  title="Ingrese los datos de su tarjeta"
                >
                  {isMensaje === true ? (
                    <p className="text-center text-lg text-white font-bold bg-red-300/60 my-2 py-2 rounded-sm">
                      LLena los campos
                    </p>
                  ) : null}
                  <img src={Credit} alt="" />
                  <div className="container mt-3">
                    <input
                      className="p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white w-2/3"
                      type="text"
                      placeholder="Numeros de Tarjeta"
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                      }}
                    />
                    <input
                      className="p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white w-1/3"
                      type="text"
                      placeholder="CVV"
                      onChange={(e) => {
                        setCvv(e.target.value);
                      }}
                    />
                    <input
                      className="p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white w-full mt-2"
                      type="text"
                      placeholder="MM/YY"
                      onChange={handleDateChange}
                      value={dateExpire}
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        className="bg-blue-500 py-2 px-7 rounded-md text-white text-lg hover:bg-blue-500/70 "
                        onClick={handleDeposito}
                      >
                        Depositar
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </>
          ) : (
            <div className="mt-4 text-gray-600 whitespace-pre-wrap max-w-200">
              {deportes ? (
                <>
                  {deportes.map((deporte, index) => (
                    <>
                      <div className="flex mb-3 font-bold">
                        <img
                          src={"/src/asset/iconos Deportes/" + index + ".png"}
                          width={"25px"}
                          alt=""
                          className="mr-2"
                        />
                        {deporte}
                      </div>
                      <hr className="border-t-2 border-gray-400 my-4" />
                    </>
                  ))}
                </>
              ) : (
                text
              )}
            </div>
          )}
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}

export default Card;
