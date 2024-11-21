import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 classname="City">{props.data.city}</h1>
      <ul className="TextDate">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize Description">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="Icon">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="Temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 Leftside">
          <ul className="TextDate">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
