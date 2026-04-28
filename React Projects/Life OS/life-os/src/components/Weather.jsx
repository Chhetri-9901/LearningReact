import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('')
    const weatherAPI = async() => {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=e17e0bcccdd2462dbbb153333262804&q=paris');
        const data = await response.json()
        console.log(data)
        console.log(data.current.feelslike_c);
        console.log(data.location.localtime);
    }
    console.log("inside weather component")
    weatherAPI()
  return (
    <div>
        
    </div>
  )
}

export default Weather