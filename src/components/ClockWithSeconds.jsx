import React, { useState, useEffect } from 'react';
import moment from 'moment';

function ClockWithSeconds() {
  const [horaActual, setHoraActual] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraActual(moment().format('HH:mm:ss'));
    }, 1000); // Actualiza cada segundo (1000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  return (
    <div>
      <p className='text-2xl text-white'>{horaActual}</p>
    </div>
  );
}

export default ClockWithSeconds;
