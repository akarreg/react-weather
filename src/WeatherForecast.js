import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">day</div>
          <WeatherIcon code="01d" size={28} />
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTemp"> 11</span>
            <span className="WeatherForecastTemp"> -19</span>
          </div>
        </div>
      </div>
    </div>
  );
}
