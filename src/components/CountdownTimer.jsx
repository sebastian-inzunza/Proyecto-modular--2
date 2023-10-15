import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const eventDate = new Date("2023-12-20"); // Define la fecha de tu evento
  const currentDate = new Date();
  const timeRemaining = eventDate - currentDate;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedDate = new Date();
      const updatedTimeRemaining = eventDate - updatedDate;

      if (updatedTimeRemaining >= 0) {
        const updatedDays = Math.floor(
          updatedTimeRemaining / (1000 * 60 * 60 * 24)
        );
        const updatedHours = Math.floor(
          (updatedTimeRemaining / (1000 * 60 * 60)) % 24
        );
        const updatedMinutes = Math.floor(
          (updatedTimeRemaining / 1000 / 60) % 60
        );
        const updatedSeconds = Math.floor((updatedTimeRemaining / 1000) % 60);

        setDays(updatedDays);
        setHours(updatedHours);
        setMinutes(updatedMinutes);
        setSeconds(updatedSeconds);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000); // Actualiza cada segundo

    return () => {
      clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    };
  }, [eventDate]);

  return (
    <div className="">
      <div className="grid grid-cols-4 bor">
        <div className="flex justify-center md:text-4xl text-white ">{days} Dias</div>
       <div className="flex justify-center md:text-4xl text-white">{hours} Horas</div>
       <div className="flex justify-center md:text-4xl text-white">{minutes} Minutos</div>
      
       <div className="flex justify-center md:text-4xl text-white">  {seconds} Segundos</div>
      </div>
    </div>
  );
}

export default CountdownTimer;
