import React, { useState } from "react";
import Logo from "../asset/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../src/App.css"

function Header() {
  const navigate =useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const register = () => {
    navigate("/register");
  };

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    if (values.name !== "" && values.password !== "") {
     console.log("entre")
      e.preventDefault()
      axios.post('http://localhost:8081/login', values)
      .then(res =>{
          if (res.data.Status === 'Success'  && res.data.Level === 1){
              navigate('/apuestas')
            }else if (res.data.Level === 9){
              navigate('/Admin')
          }else{
              alert(res.data.Message)
          }
      })
      .catch(err => console.log(err))
    }

    console.log(values);
  };

  return (
    <header className="bg-sky-950 text-white py-3 px-4">
      <div className=" w-[1750px] mx-auto md:flex md:justify-between items-center">
        
        <img src={Logo} alt="Logo" width="80px" />
        <ul className="text-xl md:flex md:items-center">
          <li className="md:ml-5 border-b md:border-0">
            <a className=" block no-underline hover:text-gray-500 cursor-pointer py-4 md:py-0">
              Deportes
            </a>
          </li>
          <li className="md:ml-5 border-b md:border-0">
            <a className="block no-underline hover:text-gray-500 cursor-pointer py-4 md:py-0">
              Casino
            </a>
          </li>

          <li className="md:ml-5">
            <input
              className=" my-4 md:mx-0 shadow appearance-none border rounded w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </li>

          <li className="md:ml-5">
            <input
              className="my-4 md:mx-0 block shadow appearance-none border rounded w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="Contraseña"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </li>

          <li className="md:ml-5">
            <a
              className=" my-4 md:mx-0 block no-underline cursor-pointer bg-yellow-500 px-3 py-1 rounded"
              onClick={handleSubmit}
            >
              Acceder
            </a>
          </li>
          <li className="md:ml-5 border-b md:border-0">
            <a
              className=" py-4 md:py-0 block no-underline hover:text-gray-500 cursor-pointer"
              onClick={register}
            >
              Registrate
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
