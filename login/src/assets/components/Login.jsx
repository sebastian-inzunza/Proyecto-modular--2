// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {

//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate()

//     axios.defaults.withCredentials = true
//     const handleSubmit= (e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:8081/login', values)
//         .then(res =>{
//             if (res.data.Status === 'Success'){
//                 navigate('/')
//             }else{
//                 alert(res.data.Message)
//             }
//         })
//         .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             <section className="bg-gray-50 dark:bg-gray-900">
//                 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                     <a
//                         href="#"
//                         className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//                     >
//                         <img
//                             className="w-8 h-8 mr-2"
//                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//                             alt="logo"
//                         />
//                         Flowbite
//                     </a>
//                     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
//                             <form

//                                 className="space-y-4 md:space-y-6"
//                                 onSubmit={handleSubmit}
//                             >
//                                 <div>
//                                     <label
//                                         htmlFor="email"
//                                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                     >
//                                         Your email
//                                     </label>
//                                     <input
//                                     onChange={e => setValues({...values, email: e.target.value})}
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                         placeholder="name@company.com"
//                                         required=""
//                                     />
//                                 </div>
//                                 <div>
//                                     <label
//                                         htmlFor="password"
//                                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                     >
//                                         Password
//                                     </label>
//                                     <input
//                                     onChange={e => setValues({...values, password: e.target.value})}
//                                         type="password"
//                                         name="password"
//                                         id="password"
//                                         placeholder="••••••••"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                         required=""
//                                     />
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-start">
//                                         <div className="flex items-center h-5">
//                                             <input
//                                                 id="remember"
//                                                 aria-describedby="remember"
//                                                 type="checkbox"
//                                                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                                                 required=""
//                                             />
//                                         </div>
//                                         <div className="ml-3 text-sm">
//                                             <label
//                                                 htmlFor="remember"
//                                                 className="text-gray-500 dark:text-gray-300"
//                                             >
//                                                 Remember me
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <a
//                                         href="#"
//                                         className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                                     >
//                                         Forgot password?
//                                     </a>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                                 >
//                                     Sign in
//                                 </button>
//                                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                     Don’t have an account yet?{" "}
//                                     <a
//                                         href="#"
//                                         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                                     >
//                                         Sign up
//                                     </a>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Login;

// import axios from 'axios';
// import React, { useState } from 'react';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');

//   const handleInsertData = () => {
//     // Código para llamar a la función de inserción de datos en el backend
//     // Puedes usar fetch o axios para hacer la solicitud POST

//     const data = {
//       name: name,
//       age: age
//     };

//     axios.post('http://localhost:8081/login', data)
//     .then(response => {
//       console.log(response.data); // Respuesta del backend
//       location.reload(true)
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

//   return (
//     <div>
//       <input
//         placeholder="Nombre"
//         value={name}
//         onChange={e => setName(e.target.value)}

//       />
//       <input
//         placeholder="Edad"
//         value={age}
//         onChange={e => setAge(e.target.value)}

//       />
//       <button onClick={handleInsertData}>Insertar Datos</button>

//     </div>
//   );
// };

// export default Login

import axios from "axios";
import React, { useState } from "react";

function Login() {
    const [numbers, setNumbers] = useState([]);
    const [blockedNumbers, setBlockedNumbers] = useState([]);


    const mandarBase = () => {
            // Código para llamar a la función de inserción de datos en el backend
            // Puedes usar fetch o axios para hacer la solicitud POST
        
            const data = {
              boletos: numbers,
              activo: "espera",
            };
        
            axios.post('http://localhost:8081/boletos', data)
            .then(response => {
              console.log(response.data); // Respuesta del backend
             
            })
            .catch(error => {
              console.error(error);
            });
            

            setInterval(miFuncion, 3000);
        };

        const miFuncion = () => {
            // Código de la función que deseas ejecutar
            console.log('La función se ejecutó');
          };

    const handleNumberClick = (number) => {
        if (!blockedNumbers.includes(number)) {
            setNumbers([...numbers, number]);
            setBlockedNumbers([...blockedNumbers, number]);
        }
    };

    const handleDelete = (number) => {
        const updatedNumbers = numbers.filter((num) => num !== number);
        const updatedBlockedNumbers = blockedNumbers.filter((num) => num !== number);
        setNumbers(updatedNumbers);
        setBlockedNumbers(updatedBlockedNumbers);
    };

    return (
        <div>
            <button onClick={() => handleNumberClick(1)}>1</button>
            <button onClick={() => handleNumberClick(2)}>2</button>
            {/* Agrega más botones según sea necesario */}

            <div>
                <p>Mostrar numeros </p>
                {numbers.map((number, index) => (
                    <div key={index}>
                        <button onClick={() => handleDelete(number)}>
                            <span>{number}</span>
                        </button>
                    </div>
                ))}
            </div>
            {numbers.length > 0 ? <button onClick={mandarBase}>Comprar</button> : null}
        </div>
    );
}

export default Login;
