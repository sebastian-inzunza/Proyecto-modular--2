import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../asset/UDGlogo.webp";
import Footer from "./Footer";

function Register() {
  const [message, setMessage] = useState(false);
  const [meensaje, setMensaje] = useState("")

  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    verifiPass: "",
  });

  const navigate = useNavigate();

  const regresar = () => {
    navigate("/");
  };
  const login = () => {
    console.log("Redireccionar a login")
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.email === "" && values.name === "" && values.password ===""){
      setMessage(true);
      setMensaje("Llena los campos")
      setTimeout(() => {
        setMensaje("");
        setMessage(false);
      }, 5000);
    }else{
      setMessage(false);
      if (values.password !== values.verifiPass) {
        setMessage(true);
        setMensaje(" La contraseña no es igual")
        
      } else {
        setMessage(false);
  
        const data = {
          nombre: values.name,
          correo: values.email,
          contrasena: values.password,
        };
  
        axios
          .post("http://localhost:8081/registerUser", data)
          .then((response) => {
            console.log(response.data); // Respuesta del backend
            if (response.status === 200) {
              navigate("/");
            }
          })
          .catch((error) => {
            console.error(error);
          });
  
        console.log(data);
      }

    }
   
console.log(meensaje)

  };

  return (
    <div className="bg-Body md:grid md:grid-cols-2 overflow-hidden h-screen ">
      <div className="container border border-gray-800 block justify-center rounded-md ">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-16 h-16 mr-2" src={logo} alt="logo" />
              Apuestas-UDG
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Registrate
                </h1>
                {message === true ? (
                  <p className=" text-2xl bg-slate-400 px-2 py-2 text-center font-bold rounded-sm ">
                    {meensaje}
                  </p>
                ) : null}

                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* <div>
                    <label
                      htmlFor="nombre"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre:
                    </label>
                    <input
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                      type="nombre"
                      name="nombre"
                      id="nombre"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ingresa tu nombre"
                    />
                  </div> */}
                  <div>
                    <label
                      htmlFor="correo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Correo
                    </label>
                    <input
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                      type="email"
                      name="correo"
                      id="correo"
                      placeholder="Ingresa tu correo"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pass"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contraseña
                    </label>
                    <input
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="••••••••••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="passCon"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirma contraseña
                    </label>
                    <input
                      onChange={(e) =>
                        setValues({ ...values, verifiPass: e.target.value })
                      }
                      type="password"
                      name="passCon"
                      id="passCon"
                      placeholder="••••••••••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div> */}
                  <button
                    type="submit"
                    className="w-full  bg-gray-600 uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Registrar
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Regresar al inicio?{" "}
                    <a
                      onClick={regresar}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer "
                    >
                      Regresar{" "}
                    </a>
                    
                     Ya tienes cuenta?{" "}
                     <a
                      onClick={login}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer "
                    >
                      Iniciar{" "}
                    </a>
                  

                  </p>
                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center ">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Register;
