import React from 'react'
import "../App.css";
import { FaBeer } from 'react-icons/fa';
import ButtonApuesta from './ButtonApuesta';
import grafico from "../asset/grafico.png";




const Card = () => {
    return (
        <div className="card" style={{ position: 'relative', zIndex: '9999' }}>
        <h1 className="card-title">
          <strong>⚽Tabla de Partidos</strong>
        </h1>
        <table className="table">   
          <thead>
            <tr>
              <th>Equipos</th>
              <th>Cuota</th>
              <th>Apuesta</th>
              <th>Resultado</th>
              <th>Fecha</th>
              <th>    </th>
              <th>    </th>
              
            </tr>   
          </thead>
          <tbody>
            <tr>
              <td>Chivas Guadajalara(M)</td>
              <td>5.8</td>
              <td>vs   Tijuana</td>
              <td> ⏱️ </td>
              <td>20/07/2023</td>
              <div className=" mt-1 flex justify-center "><img src={grafico}alt=""width="50px" height="50px" /></div>
              <td><ButtonApuesta/></td>

            
            </tr>
            <tr>
              <td>Puebla</td>
              <td>1.8</td>
              <td> vs   CA</td>
              <td> ⏱️ </td>
              <td>21/07/2023</td>
              <div className=" mt-1 flex justify-center "><img src={grafico}alt=""width="50px" height="50px" /></div>
              <td><ButtonApuesta/></td>
            </tr>
            <tr>
              <td>Tijuana</td>
              <td>3.5</td>
              <td>vs      Atlas</td>
              <td> ⏱️ </td>
              <td>22/07/2023</td>
              <div className=" mt-1 flex justify-center "><img src={grafico}alt=""width="50px" height="50px" /></div>
              <td><ButtonApuesta/></td>
            </tr>            
            <tr>
              <td>Leones Negros</td>
              <td>3.5</td>
              <td>vs  UACH </td>
              <td> ⏱️ </td>
              <td>22/07/2023</td>
              <div className=" mt-1 flex justify-center "><img src={grafico}alt=""width="50px" height="50px" /></div>
              <td><ButtonApuesta/></td>
            </tr>
            <thead>
            <tr>
            </tr>   
          </thead>
            
            
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Card;