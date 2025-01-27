import React, { useState, useEffect } from "react";


const TimeCounter = ({ initialTime, timeClass, counterStyles }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime); // Time in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval
  }, [timeLeft]);

  // Function to calculate hours, minutes, and seconds
  const calculateTime = (time) => {
    const days = Math.floor(time / 86400)
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      days: String(days).padStart(2, "0"),  
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = calculateTime(timeLeft);

  return (
    <div className={`${counterStyles} flex gap-3 items-center`}>
      <div
        className={`${timeClass} flex rounded-md min-w-[65px] h-[70px] flex-col items-center justify-center bg-white`}
      >
        <div className="text-primary text-xl font-semibold">{days}</div>
        <p className="text-gray-400 text-base font-semibold">Days</p>
      </div>
      <div
        className={`${timeClass} flex rounded-md min-w-[65px] h-[70px] flex-col items-center justify-center bg-white`}
      >
        <div className="text-primary text-xl font-semibold">{hours}</div>
        <p className="text-gray-400 text-base font-semibold">Hours</p>
      </div>
      <div
        className={`${timeClass} flex rounded-md min-w-[65px] h-[70px] flex-col items-center justify-center bg-white`}
      >
        <div className="text-primary text-xl font-semibold">{minutes}</div>
        <p className="text-gray-400 text-base font-semibold">Mins</p>
      </div>
      <div
        className={`${timeClass} flex rounded-md min-w-[65px] h-[70px] flex-col items-center justify-center bg-white`}
      >
        <div className="text-primary text-xl font-semibold">{seconds}</div>
        <p className="text-gray-400 text-base font-semibold">Sec</p>
      </div>
    </div>
  );
};

export default TimeCounter
