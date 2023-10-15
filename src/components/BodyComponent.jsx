import React from "react";
import ImagenLeon from "../asset/Leon.png";
import Chivas from "../asset/Chivas.svg";
import Leones from "../asset/UDGlogo.webp";
import America from "../asset/america.png";
import { Carousel } from "react-responsive-carousel";

function BodyComponent() {
  return (

  <Carousel width="100%" showThumbs={false} className="flex justify-center items-center my-auto bg-sky-950 " showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop>
    <div className="grid md:grid-cols-8 md:gap-32 grid-cols-3 text-center pb-10  ">
      <div className="mt-4 hidden md:flex justify-center">
        <img className="w-1/2" src={Leones} alt="" />
      </div>
      <div className="mt-4 hidden md:flex justify-center">
        <img className="w-1/2" src={America} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Leones} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={America} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
    </div>
    <div className="grid md:grid-cols-8 md:gap-32 grid-cols-3 text-center pb-10  ">
      <div className="mt-4 hidden md:flex justify-center">
        <img className="w-1/2" src={Leones} alt="" />
      </div>
      <div className="mt-4 hidden md:flex justify-center">
        <img className="w-1/2" src={America} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 hidden md:flex  justify-center">
        <img className="w-1/2" src={Leones} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={America} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
      <div className="mt-4 flex justify-center">
        <img className="w-1/2" src={Chivas} alt="" />
      </div>
    </div>
   
  </Carousel>


     

  );
}

export default BodyComponent;
