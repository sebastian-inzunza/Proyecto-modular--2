import React, { useState, useEffect } from 'react';

function ClockWithSeconds() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="text-xl">
      {formattedTime}
    </div>
  );
}

export default ClockWithSeconds;
