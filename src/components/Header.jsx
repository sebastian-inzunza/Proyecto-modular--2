import React from "react";
import '../App.css';
import Logo2 from "../asset/Logo2.png";
import Logo from "../asset/Logo.png";
import pelota from "../asset/pelota.png";
import balon from "../asset/balon.png";


function Header() {
    return (
        <header className="bg-sky-950 text-white py-3 px-4">
        <div className="container mx-auto md:flex md:justify-between items-center">
          <img src={balon} alt="balon"
           className="logo" 
           width="100" /> 
    
                
                <ul className="text-xl md:flex md:items-center">
                    <li className="md:ml-5 border-b md:border-0">
                        <a className=" block no-underline hover:text-gray-500 cursor-pointer py-4 md:py-0">⚽Deportes</a>
                    </li>
                    <li className="md:ml-5 border-b md:border-0">
                        <a className="block no-underline hover:text-gray-500 cursor-pointer py-4 md:py-0">Casino</a>
                    </li>

                    <li className="md:ml-5">
                        <input
                            class=" my-4 md:mx-0 shadow appearance-none border rounded w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Usuario"
                        />
                    </li>

                    <li className="md:ml-5">
                        <input
                            class="my-4 md:mx-0 block shadow appearance-none border rounded w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Contraseña"
                        />
                    </li>

                    <li className="md:ml-5">
                        <a className=" my-4 md:mx-0 block no-underline cursor-pointer bg-yellow-500 px-3 py-1 rounded">Acceder</a>
                    </li>
                    <li className="md:ml-5 border-b md:border-0">
                        <a className=" py-4 md:py-0 block no-underline hover:text-gray-500 cursor-pointer">Registrate</a>
                    </li>
                </ul>
            </div>
        </header>
       
    );
}

export default Header;
