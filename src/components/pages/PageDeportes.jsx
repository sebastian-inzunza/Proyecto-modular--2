import React from 'react';
import Futbol from "../../asset/sports/futbol.jpeg";
import Basketbol from "../../asset/sports/basketbol.jpeg";
import Beisbol from "../../asset/sports/beisbol.jpeg";
import Americano from "../../asset/sports/americano.jpeg";
import Tenis from "../../asset/sports/tenis.jpeg";
import Golf from "../../asset/sports/golf.jpg";
import Natacion from "../../asset/sports/natacion.jpg";
import Atletismo from "../../asset/sports/atletismo.jpeg";
import Voley from "../../asset/sports/voley.jpg";
import FutbolIcon from "../../asset/iconos Deportes/9.png";
import BasketIcon from "../../asset/iconos Deportes/1.png";
import BeisIcon from "../../asset/iconos Deportes/3.png";
import AmericanoIcon from "../../asset/iconos Deportes/8.png";
import TenisIcon from "../../asset/iconos Deportes/2.png";
import VoleyIcon from "../../asset/iconos Deportes/7.png";
import GolfIcon from "../../asset/iconos Deportes/6.png";
import NataIcon from "../../asset/iconos Deportes/5.png";
import AtleIcon from "../../asset/iconos Deportes/4.png";
import Facebook from "../../asset/redes/facebook.png";
import Instagram from "../../asset/redes/instagram.png";
import Twitter from "../../asset/redes/twitter.png";
import Youtube from "../../asset/redes/youtube.png";
import Tiktok from "../../asset/redes/tiktok.png";
import Udeg from "../../asset/universidad/udeg.png";
import Cucei from "../../asset/universidad/cucei.png";
import Leonesnegros from "../../asset/universidad/leonesnegros.png";
import Header from '../Header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos CSS
import "animate.css";
import { Carousel } from 'react-responsive-carousel';

function PageDeportes() {
  const imageSizeStyle = {
    width: "100%",
    height: "auto",
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <Header/>
      <div>
      <Carousel>
        {console.log("hola")}
        <div>
          <img src={Futbol} alt="Fútbol" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Fútbol soccer.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte más popular del mundo, con millones de seguidores alrededor del mundo.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El fútbol soccer es un apasionante deporte de equipo que involucra dos conjuntos compuestos por once jugadores cada uno, compitiendo por marcar goles al llevar un balón a la portería contraria, utilizando principalmente los pies para jugar.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={FutbolIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Basketbol} alt="Basketbol" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Basquetbol.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte relámpago, apasionante tanto como emocionante.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El baloncesto es un deporte dinámico que se juega entre dos equipos de cinco jugadores, con el objetivo de encestar la pelota en el aro contrario, situado a una altura estándar, mediante el dribbling, pases y tiros, combinando habilidades físicas, estrategia y trabajo en equipo.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={BasketIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Beisbol} alt="Beisbol" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Beisbol.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El rey de los deportes, que empiece el juego de pelota.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El béisbol es un deporte de equipo jugado entre dos conjuntos de nueve jugadores, donde uno batea y el otro defiende. El objetivo es anotar carreras al golpear una pelota con un bate y correr por una serie de bases en un campo en forma de diamante, combinando habilidades de lanzamiento, bateo, fildeo y estrategia táctica.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={BeisIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Americano} alt="Americano" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Fútbol americano.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte del ovoide.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El fútbol americano es un deporte de equipo altamente estratégico y físico, donde dos equipos compuestos por once jugadores cada uno compiten en un campo rectangular. El objetivo es avanzar el balón hacia la zona de anotación del equipo contrario a través de jugadas de carrera o pase, mientras se defiende con tácticas de bloqueo, placaje y defensa para impedir el avance del equipo rival.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={AmericanoIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Tenis} alt="Tenis" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Tenis.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte blanco.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El tenis es un deporte individual o de dobles, jugado en una cancha dividida por una red, donde los jugadores utilizan raquetas para golpear una pelota hacia el campo contrario. El objetivo es ganar puntos al hacer que la pelota rebote dentro de los límites de la cancha del oponente, combinando habilidad, precisión y estrategia para superar al rival en sets o juegos.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={TenisIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Voley} alt="Voley" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Voleibol.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte más emocionante de la duela.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El voleibol es un deporte de equipo que se juega entre dos conjuntos de seis jugadores cada uno, separados por una red en una cancha. El objetivo es pasar la pelota por encima de la red, intentando que toque el suelo del campo contrario, utilizando tres toques como máximo por equipo para enviar la pelota al lado opuesto, combinando habilidades de saque, pase, bloqueo y remate.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={VoleyIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Golf} alt="Golf" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Golf.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  El deporte más tranquilo de todos.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El golf es un deporte individual o de equipo, donde los jugadores utilizan palos para golpear una pelota desde una zona de salida hacia un hoyo en el campo, intentando completar el recorrido en la menor cantidad de golpes posibles. Se desarrolla en extensos campos con obstáculos como bunkers y agua, requiriendo precisión, estrategia y control para golpear la pelota en cada hoyo.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={GolfIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Natacion} alt="Natación" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Natación.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  Sumérgete en la emoción de este deporte.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                La natación es un deporte acuático practicado en piscinas, aguas abiertas u otros cuerpos de agua. Los nadadores utilizan diferentes estilos de nado, como crol, espalda, braza y mariposa, compitiendo por recorrer distancias específicas en el menor tiempo posible. Requiere técnica, resistencia, fuerza y velocidad, siendo un deporte completo que ejercita todo el cuerpo.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={NataIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Atletismo} alt="Atletismo" />
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div class="block animate__animated animate__fadeInUpBig md:w-[65rem] rounded-lg  bg-sky-900 bg-opacity-90 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
              <div class="p-6">
                <h1 class="mb-1 font-bold text-3xl text-center  leading-tight text-white">
                  Atletismo.
                </h1>
                <h6 class="mb-2 text-3xl font-bold text-center leading-tight">
                  Acelera a fondo para ser el primero en llegar.
                </h6>
                <p class="mb-4 text-2xl font-medium leading-normal text-justify text-white ">
                El atletismo es un deporte que abarca una variedad de disciplinas que implican correr, saltar y lanzar. Comprende pruebas de velocidad, resistencia, saltos (como salto largo, triple salto), lanzamientos (como lanzamiento de jabalina, disco, martillo) y pruebas combinadas (como decatlón y heptatlón). Los atletas compiten tanto en pista como en campo, mostrando habilidades físicas y técnicas específicas para cada disciplina.
                </p>
                <div className="flex justify-end items-center">
                  <span className="text-3xl font-bold mr-3">Bet</span>
                  <span className="text-3xl text-red-500 font-bold mr-3">Odds</span>
                  <span className="text-3xl text-amber-500 font-bold mr-3">UdeG</span>
                  <div className="w-1/6">
                    <img  src={AtleIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    <br /><br /><br /><br />
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/*Primera sección del Footer*/}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Redes sociales</h3>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 md:w-full flex items-center py-2">
            <a href="http://www.facebook.com">
                <img src={Facebook} alt="Twitter" className="mr-2" />
                <p>Bet Odds UdeG</p>
              </a>
            </div>
            <div className="w-1/2 md:w-full flex items-center py-2">
              <a href="http://www.twitter.com">
                <img src={Twitter} alt="Twitter" className="mr-2" />
                <p>@BetOddsUdeG</p>
              </a>
            </div>
            <div className="w-1/2 md:w-full flex items-center py-2">
            <a href="http://www.instagram.com">
                <img src={Instagram} alt="Twitter" className="mr-2" />
                <p>@BetOddsUdeG</p>
              </a>
            </div>
            <div className="w-1/2 md:w-full flex items-center py-2">
            <a href="http://www.tiktok.com">
                <img src={Tiktok} alt="Twitter" className="mr-2" />
                <p>@BetOddsUdeG</p>
              </a>
            </div>
            <div className="w-1/2 md:w-full flex items-center py-2">
            <a href="http://www.youtube.com">
                <img src={Youtube} alt="Twitter" className="mr-2" />
                <p>Bet Odds UdeG</p>
              </a>
            </div>
          </div>
        </div>

        {/*Segunda sección del Footer*/}
        <div>
          <p>® Sebastian Alonso | Jose Luis | Derechos reservados UDG</p>
        </div>

        {/*Tercera sección del Footer*/}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Bet Odds UdeG</h3>
          <div className="flex items-center">
            <a href="https://www.udg.mx/">
              <img src={Udeg} alt="UdeG" className="mr-2 mb-2 w-12 h-12 md:w-32 md:h-32" />
            </a>
            <a href="https://leonesnegrosudg.mx/">
              <img src={Leonesnegros} alt="Leones Negros" className="mr-2 mb-2 w-12 h-12 md:w-32 md:h-32" />
            </a>
            <a href="http://www.cucei.udg.mx/">
              <img src={Cucei} alt="CUCEI" className="mr-2 mb-2 w-12 h-12 md:w-32 md:h-32" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PageDeportes;