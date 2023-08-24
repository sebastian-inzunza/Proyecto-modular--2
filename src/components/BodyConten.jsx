import React from "react";
import "../App.css";
import ImageSlider from "./ImageSlider";

function BodyConten() {
    return (
        <div className="bg-Body mt-7 py-7 md:grid md:grid-cols-2">
            <div className="container border border-gray-800 mx-4 my-36 block justify-center rounded-md ">
                <p className="text-white mt-9 text-4xl text-center">
                    <span>Ademas de las apuestas es posible ganar </span><span className="mt-12">puntos jugando</span>
                    <span className="font-bold text-red-900">, con nuestros juegos.</span>
                </p>
                <p className="text-2xl text-white text-center">Deposita aqui mismo y recibe de regalo</p>
                <p className="text-red-900 text-7xl font-bold text-center mt-6 mb-3">
                    <span>$1,000</span>
                </p>
                <p className="text-center text-4xl text-gray-500 mb-6">Sin deposito</p>
                <div className="flex justify-center mb-4">
                     <button className="bg-yellow-500 px-10 py-4 rounded-md uppercase font-semibold text-gray-900 hover:bg-yellow-700 hover:text-white transition duration-300">Deposita aqui</button>
                </div>
               
            </div>

            <div className="flex justify-center items-center ">
                <ImageSlider />
            </div>
        </div>
    );
}

export default BodyConten;
