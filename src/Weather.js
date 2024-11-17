import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form className="row">
          <input
            className="col-9 Search"
            type="search "
            placeholder="Enter city....."
          />
          <input className="col-3 Submit" type="Submit" />
        </form>

        <main>
          <div>
            <h1 className="City">City name</h1>
            <h5 className="text-capitalize Description">
              {WeatherData.description}
            </h5>
            <div className="row">
              <div className="col">
                emoji
                <span className="Temperature">
                  {" "}
                  {Math.round(WeatherData.temperature)}
                </span>
                <span className="Degrees">˚C</span>
              </div>

              <div className="col Leftside">
                <div className="">Wind:{Math.round(WeatherData.wind)} km/h</div>
                <div className="">visibility:{WeatherData.visibility} </div>
                <div className="">Humidity:{WeatherData.humidity}%</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "7059cb165caa3316bff682d263a01b1e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
