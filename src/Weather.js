import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [City, setCity] = useState(props.defaultcity);
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponseCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="Search"
            autoFocus="on"
            type="search "
            onChange={handleResponseCity}
            placeholder="Enter city...."
          />
          <input type="Submit" value="Search " />
          <WeatherInfo data={WeatherData} className="Submit" />
        </form>
        <WeatherForecast coordinates={WeatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading....";
  }
}
