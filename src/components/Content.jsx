import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "animate.css"; // Importa animate.css

function Body() {

  const redirectToExternalURL = () => {
    window.open("https://leonesnegrosudg.mx/", "_blank"); // Abre en una nueva pestaña
    
  };
  return (
    <>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
      >
        <div className="w-full flex justify-center relative">
          <img
            src="/public/fondo/leones.png"
            alt="Imagen 4"
            className="w-full max-w-full"
          />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2        ">
            <div class="animate__animated animate__fadeInUpBig  block md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="p-6">
                <h5 class="mb-1 font-bold text-3xl text-center  leading-tight text-amber-500 ">
                  Todos los deportes, locales y participantes de la UDG y de
                  cualquier centro academico.
                </h5>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight text-red-700 ">
                  Sencillez y comodidad
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                  En Bett Odds UDG, estamos comprometidos con promover un
                  entorno seguro y responsable para las apuestas deportivas. Te
                  alentamos a disfrutar de la emoción de apostar con moderación
                  y a conocer tus límites. Explora nuestro sitio y descubre un
                  mundo de información, entretenimiento y oportunidades en el
                  emocionante cruce entre los deportes y las apuestas.
                  ¡Bienvenidos a la acción!
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl text-amber-500 font-bold mr-3">Bets Odds UDG</span>
                  <div className="w-1/6">
                    <button onClick={redirectToExternalURL}>
                      <img  src="/public/Leones.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Body;
