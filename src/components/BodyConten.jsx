import React from "react";
import "../App.css";
import ImageSlider from "./ImageSlider";

function BodyConten() {
  return (
    <div className="bg-Body mt-7 py-7 md:grid md:grid-cols-1 lg:grid-cols-2">
      <div className="md:container border border-gray-800 mx-4 my-6 md:my-0 md:mx-auto md:w-3/4 lg:w-5/6 md:p-6 rounded-md">
        <p className="text-white mt-9 text-4xl text-center">
          <span>Además de las apuestas es posible ganar </span>
          <span className="mt-12">puntos jugando</span>
          <span className="font-bold text-red-900">, con nuestros juegos.</span>
        </p>
        <p className="text-2xl text-white text-center">Deposita aquí mismo y recibe de regalo</p>
        <p className="text-red-900 text-7xl font-bold text-center mt-6 mb-3">
          <span>$1,000</span>
        </p>
        <p className="text-center text-4xl text-gray-500 mb-6">Sin depósito</p>
        <div className="flex justify-center mb-4">
          <button className="bg-yellow-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900 hover:bg-yellow-700 hover:text-white transition duration-300">
            Deposita aquí 
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ImageSlider />
      </div>
    </div>
  );
}

export default BodyConten;
