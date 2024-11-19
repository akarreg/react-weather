import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

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
    const apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 Search">
              <input
                autoFocus="on"
                type="search "
                onChange={handleResponseCity}
                placeholder="Enter city...."
              />
            </div>
            <div className="col-3 Submit">
              <input type="Submit" value="Search " />
            </div>
          </div>
        </form>

        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    search();

    return "Loading....";
  }
}
