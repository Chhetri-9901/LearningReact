import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("kolkata");
  const [icon, setIcon] = useState("a");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState(0);
  const weatherAPI = async () => {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=e17e0bcccdd2462dbbb153333262804&q=paris",
    );
    const data = await response.json();
    console.log(data);

    setIcon(data.current.condition.icon);
    setTemp(data.current.feelslike_c);
    setTime(data.location.localtime);
  };
  console.log("inside weather component");
  weatherAPI();
  return (
    <div className="absolute right-0 top-0">
      <p>{city}</p>
      <div className="flex items-start">
        <div className="max-w-10">
          <img src={`https:${icon}`} alt="icon" />
        </div>
        <div>
          <p className="relative text-5xl">
            {temp}
            <span className="absolute text-2xl">°C</span>
          </p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
