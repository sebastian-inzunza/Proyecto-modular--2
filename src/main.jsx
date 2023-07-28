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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
    path: "/apuestas", // Parent route
    element: <Menu />,
    children: [
      {
        path: "deportes/futbol", // This will be the default child route, combine with the parent path
        element: <Futbol />,
      },
      {
        path: "deportes/basketball", // Combine with the parent path, don't use a leading "/"
        element: <Basketball />,
      },
      {
        path: "deportes/tennis", // Combine with the parent path, don't use a leading "/"
        element: <Tennis />,
      },
      {
        path: "deportes/beisball", // Combine with the parent path, don't use a leading "/"
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
