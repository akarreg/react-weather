import React from "react";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  }
  return (
    <div className="WeatherForescast">
      <div className="Forecast-Day">mon</div>
      <div className="Forescast-Icon">g</div>
      <div className="Forecast-Weather">
        <span className="LowTemp">3 </span>
        <span className="HighTemp">20</span>
      </div>
    </div>
  );
}
