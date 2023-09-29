import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Modal from "./Modal";
import Credit from "../asset/holo.png";

function UserData(props) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [id, setId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [dateExpire, setDateExpire] = useState("");
  const [isMensaje, isSetMensaje] = useState(false);
  const [mensajeM, setMensajeM] = useState("");
  const [deposito, setDeposito] = useState("");

  const [saldo, setSaldo] = useState(null); // Inicializa el saldo como nulo

  useEffect(() => {

    const data = {
      idUser : id
    }
    // Realiza una solicitud GET al servidor para obtener el saldo del usuario
    axios
      .post(`http://localhost:8081/saldoUsuario`, data)
      .then((response) => {
        const saldoUsuario = response.data.saldo;
        setSaldo(saldoUsuario);
      })
      .catch((error) => {
        console.error("Error al obtener el saldo del usuario:", error);
      });
  }, [id]); // La solicitud se realiza cuando cambia el ID de usuario


  const depositar = () => {
    const data = {
      idUser: id,
      balance: deposito,
    };

    axios
      .post("http://localhost:8081/addFondos", data)
      .then((response) => {
        // Maneja la respuesta del servidor (si es necesario

        if (response.data.status === "OK") {
          location.reload(true);
          closeModal()
        } else {
          console.log("mal");
        }
      })
      .catch((error) => {
        // Maneja los errores de la solicitud
        console.error("Error:", error);
      });
  };

  const openModal = () => {
    const data = {
      idUser: id,
    };

    console.log(data);
    axios
      .post("http://localhost:8081/metodoPago", data)
      .then((response) => {
        // Maneja la respuesta del servidor (si es necesario)
        console.log("Respuesta del servidor:", response.data.metodo);

        if (response.data.metodo === 1) {
          isSetMensaje(true);
          setMensajeM("");
        } else {
          isSetMensaje(false);

          setMensajeM("Agrega un metodo de pago primero");
        }
      })
      .catch((error) => {
        // Maneja los errores de la solicitud
        console.error("Error:", error);
      });
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
  };
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

  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    // Verifica si la longitud del texto es igual a 2 para agregar "/" automáticamente
    if (inputDate.length === 2 && !inputDate.includes("/")) {
      setDateExpire(inputDate + "/");
    } else {
      setDateExpire(inputDate);
    }
  };
  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          document.cookie = "token=; path=/;";
          document.cookie = "name=; path=/;";
          document.cookie = "balance=; path=/;";
          document.cookie = "level=; path=/;";
          document.cookie = "id=; path=/;";
          location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const name = getCookieValue("name");
    const balance = getCookieValue("balance");
    const id = getCookieValue("id");

    setName(name);
    setBalance(balance);
    setId(id);
  }, []);

  const [datoDelHijo, setDatoDelHijo] = useState("");

  // Define una función para recibir el dato del hijo y actualizar el estado
  const recibirDatoDelHijo = (dato) => {
    setDatoDelHijo(dato);
  };
  return (
    <div className="bg-white py-4 m-2 rounded-sm flex justify-between">
      <span className="mx-2 text-xl font-bold">
        Nombre: <span className="text-xl text-stone-800">{name}</span>
      </span>
      <button onClick={openModal} disabled={saldo >=1000 ? true : false}>
        {" "}
        <span className="mx-2 text-xl font-bold">
          Creditos:{" "}
          <span className="text-xl text-green-800">
            {saldo ? "$" + saldo + "+" : "$0 +"}
          </span>
        </span>
      </button>
      <span className="mx-2 text-xl font-bold">
        Fondos: <span className="text-xl text-green-800">5</span>
      </span>

      <button
        onClick={handleLogout}
        className="mx-2 text-lg text-white bg-gray-700 py-1 px-2 rounded-full hover:bg-gray-500"
      >
        Logout
      </button>
      <div>
        {isMensaje === true ? (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Ingresa la cantidad que deseas agregar a tu cuenta"
          >
            <label htmlFor="go">Cantidad a Depositar</label>
            <input
              id="go"
              type="number"
              min={1}
              max={1000}
              className="p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:bg-white w-full mb-2"
              onChange={(e) => {
                setDeposito(e.target.value);
              }}
            />
            <button
              onClick={depositar}
              className="bg-blue-400 w-full rounded-md text-white font-bold text-lg py-2 hover:bg-blue-600 hover:text-black"
            >
              Depositar
            </button>
          </Modal>
        ) : (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Agrega un metodo de pago primero"
          ></Modal>
        )}
      </div>
    </div>
  );
}

export default UserData;
