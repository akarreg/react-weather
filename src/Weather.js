import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [WeatherData, setWeatherData] = useState(null);
  const [ready, setready] = useState(false);

  function handleResponse(response) {
    console.log(response.main);

    setWeatherData(response.data.main.temp);
    setready(true);
  }

  if (ready) {
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
            <h3>description</h3>
            <div className="row">
              <div className="col">
                emoji
                <span className="Temperature"> {Math.round(WeatherData)}</span>
                <span className="degrees">˚C</span>
              </div>

              <div className="col">
                <div className="">Wind:</div>
                <div className="">visibility:</div>
                <div className="">Humidity:</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "7059cb165caa3316bff682d263a01b1e";
    let city = "ondarroa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
