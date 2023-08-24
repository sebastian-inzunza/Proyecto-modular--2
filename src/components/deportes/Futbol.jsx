import React from "react";
import CardAPuestas from "../CardAPuestas";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ApuestaComponent from "../ApuestaComponent";

function Futbol() {
  return (
  <div className="flex">
  <div className="w-5/6 space-y-4">
    <CardAPuestas title="Fútbol Local" icon={2} local={"Puebla +125"} empate={"Empate +105"} visitante={"Juarez +210"}/>
    <CardAPuestas title="Fútbol Local" icon={4} local={"Xolos -182"} empate={"Empate +333"} visitante={"Mazatlán +450"}/>
    <CardAPuestas title="Fútbol Local" icon={5} local={"Atlas +130"} empate={"Empate +255"} visitante={"Toluca +195"}/>
    {/* <CardAPuestas title="Fútbol Local" icon={6} local={"Puebla +125"} empate={"Empate +105"} visitante={"Juarez +210"}/>
    <CardAPuestas title="Fútbol Local" icon={7} local={"Puebla +125"} empate={"Empate +105"} visitante={"Juarez +210"}/>
    <CardAPuestas title="Fútbol Local" icon={3} local={"Puebla +125"} empate={"Empate +105"} visitante={"Juarez +210"}/>
    <CardAPuestas title="Fútbol Local" icon={9} local={"Puebla +125"} empate={"Empate +105"} visitante={"Juarez +210"}/> */}
  </div>
  <div className="w-1/6 mx-4 mt-2">
    <ApuestaComponent />
  </div>
</div>
  );
}

export default Futbol;
