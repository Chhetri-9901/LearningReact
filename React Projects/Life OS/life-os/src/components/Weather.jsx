import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("kolkata");
  const [icon, setIcon] = useState("a");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("0");

  const weatherAPI = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=e17e0bcccdd2462dbbb153333262804&q=${city}`,
    );
    const data = await response.json();
    console.log(data);

    setIcon(data.current.condition.icon);
    setTemp(data.current.feelslike_c);
    setTime(data.location.localtime);
  };

  function fetchTime() {
    if (!time) {
      return <p>Fetching current time...</p>;
    } else {
      let [currentDate, currentTime] = time.split(" ");
      return (
        <div>
          <p>{currentDate}</p>
          <p>{currentTime}</p>
        </div>
      );
    }
  }

  useEffect(() => {
    weatherAPI();
  }, []);

  return (
    <div className="absolute right-4 top-0">
      <p className="bold text-white capitalize font-bold">{city}</p>
      <div className="flex items-start">
        <div className="max-w-10">
          <img src={`https:${icon}`} alt="icon" />
        </div>
        <div>
          <p className="flex text-5xl">
            {temp}
            <span className="text-2xl">°C</span>
          </p>
          {fetchTime()}
        </div>
      </div>
    </div>
  );
};

export default Weather;
