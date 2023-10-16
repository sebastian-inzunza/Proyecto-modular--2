import React, { useState } from "react";
import Logo from "../asset/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../src/App.css";
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const register = () => {
    navigate("/register");
  };

  const deportes = () => {
    navigate("/deportes");
  };
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    if (values.name !== "" && values.password !== "") {
      console.log("entre");
      e.preventDefault();
      axios
        // .post("http://localhost:8081/login", values)
         .post("https://server-modular-production.up.railway.app/login", values)
        .then((res) => {
          if (res.data.Status === "Success" && res.data.Level === 1) {
            Cookies.set("token", res.data.token)
            Cookies.set("level", res.data.level)
            Cookies.set("name", res.data.Name)
            Cookies.set("balance", res.data.balance)
            Cookies.set("id", res.data.id)

            navigate("/apuestas");
          } else if (res.data.Level === 9) {
            navigate("/Admin");
          } else {
            alert(res.data.Message);
          }
        })
        .catch((err) => console.log(err));
    }

    console.log(values);
  };

  return (
    <header className="bg-sky-950 bg-opacity-90 text-white py-3 px-4 md:fixed z-10 w-full flex items-center">
        <img className="hidden md:block" src={Logo} alt="Logo" width="100px" />

      <div className="container mx-auto md:flex md:justify-between items-center">

        <ul className="text-2xl md:flex md:items-center space-y-2 md:space-y-0">
          <li className="md:ml-5 border-b md:border-0">
            <a
              className="block no-underline hover:text-gray-500 cursor-pointer py-2 md:py-0"
              onClick={deportes}
            >
              Deportes
            </a>
          </li>
          <li className="md:ml-5 border-b md:border-0">
            <a
              className="block no-underline hover:text-gray-500 py-2 md:py-0"
              href="#"
            >
              Noticias
            </a>
          </li>
          <li className="md:ml-5 border-b md:border-0">
            <a
              className="block no-underline hover:text-gray-500 py-2 md:py-0"
              href="#"
            >
              Contacto
            </a>
          </li>
        </ul>

        <ul className="text-xl md:flex md:items-center space-y-2 md:space-y-0">
          <li className="md:ml-5">
            <input
              className="my-2 md:my-0 block w-full shadow appearance-none border rounded py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </li>
          <li className="md:ml-5">
            <input
              className="my-2 md:my-0 block w-full shadow appearance-none border rounded py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </li>
          <li className="md:ml-5">
            <a
              className="my-2 md:my-0 block no-underline bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded cursor-pointer"
              onClick={handleSubmit}
            >
              Acceder
            </a>
          </li>
          <li className="md:ml-5 border-b md:border-0">
            <a
              className="block md:border no-underline hover:text-gray-500 py-2 md:py-2 md:px-3 rounded-sm cursor-pointer"
              onClick={register}
            >
              Regístrate
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
