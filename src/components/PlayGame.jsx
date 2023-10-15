import React from "react";
import CountdownTimer from "./CountdownTimer";
import ScrollAnimation from 'react-animate-on-scroll';

function PlayGame() {
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
          <ScrollAnimation animateIn="animate__animated animate__fadeInLeftBig">
              <img
                className=" w-32 md:w-[20rem]"
                src="/public/atlas.svg"
                alt=""
              />
            </ScrollAnimation>
          </div>
          <div class="block my-auto items-center justify-center">
            <span className="text-4xl font-bold text-sky-900">Viernes 20</span>
            <br />
            <span className="text-3xl text-gray-500">Diciembre 2023</span>
          </div>

          <div class="flex items-center justify-center border">
          <ScrollAnimation animateIn="animate__animated animate__fadeInRightBig">

            <img className="  w-32 md:w-[25em] " src="/public/maza.webp" alt="" />
            </ScrollAnimation>
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
