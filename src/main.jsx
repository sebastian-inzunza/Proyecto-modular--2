import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Index from "./components/Index.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Futbol from "./components/deportes/Futbol.jsx";
import Basketball from "./components/deportes/Basketball.jsx";
import Tennis from "./components/deportes/Tennis.jsx";
import Beisball from "./components/deportes/Beisball.jsx";
import Admin from "./components/Admin.jsx";
import Socket from "./components/Socket.jsx";

const router = createBrowserRouter([
  {
    path: "/Pruebaaaaa",
    element: <Socket />,
  },
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/loginUser",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/apuestas/", // Parent route
    element: <Menu />,
    children: [
      {
        path: "deportes/futbol", 
        element: <Futbol />,
      },
      {
        path: "deportes/basketball",
        element: <Basketball />,
      },
      {
        path: "deportes/tennis",
        element: <Tennis />,
      },
      {
        path: "deportes/beisball",
        element: <Beisball />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
