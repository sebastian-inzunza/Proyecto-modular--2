import React from "react";
import CountdownTimer from "./CountdownTimer";
import atlas from "../asset/juego/atlas.svg";
import maza from "../asset/juego/maza.webp";
import ScrollTrigger  from 'react-scroll-trigger';

function PlayGame() {

  const handleEnter = () => {
    const element = document.getElementById('animated-element');
    element.classList.add('animate__fadeInLeftBig');
    const element2= document.getElementById('animated-element2');
    element2.classList.add('animate__fadeInRightBig');
  };

  const handleExit = () => {
    const element = document.getElementById('animated-element');
    element.classList.remove('animate__fadeInLeftBig');
    const element2 = document.getElementById('animated-element2');
    element2.classList.remove('animate__fadeInRightBig');
  };
  return (
    <div className="md:mx-auto md:w-[80em] md:mt-8 ">
      <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-tl-lg rounded-tr-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Futbol En Vivo 8:00 PM
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-3xl dark:text-gray-400">
          Liga Mexicana
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div class="flex items-center justify-center border">
          <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
   
              <img
                 id="animated-element"
                className=" w-32 md:w-[20rem] animate__animated "
                src={atlas}
                alt=""
              />
      </ScrollTrigger>
        
          </div>
          <div class="block my-auto items-center justify-center">
            <span className="text-4xl font-bold text-sky-900">Viernes 20</span>
            <br />
            <span className="text-3xl text-gray-500">Diciembre 2023</span>
          </div>

          <div class="flex items-center justify-center border">
      
          <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>

            <img className="  w-32 md:w-[25em]  animate__animated"        id="animated-element2" src={maza} alt="" />
      </ScrollTrigger>
            
          </div>
        </div>
      </div>
      <div className="bg-sky-900 py-2">
        <CountdownTimer />
      </div>
    </div>
  );
}

export default PlayGame;
