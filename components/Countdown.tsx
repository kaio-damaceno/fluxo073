
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-09-06T22:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
      {timeUnits.map((unit, index) => (
        <div key={index} className="bg-zinc-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center border border-zinc-700">
          <div className="text-4xl sm:text-6xl font-bold text-red-500 tabular-nums">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base uppercase tracking-wider text-gray-300 mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
