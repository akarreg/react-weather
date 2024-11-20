import React from "react";
import FormatDate from "./FormatDate";
import weatherIcon from "./weatherIcon";

export default function WeatherIfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className=" text-capitalize City">{props.data.city}</h1>
      <ul>
        <li className="  text-capitalize TextDate">
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize Description TextDate">
          {" "}
          {props.data.description}
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <weatherIcon code={props.data.icon} />
            </div>
            <span className=" Temperature">
              {" "}
              {Math.round(props.data.temperature)}
            </span>
            <span className="Degrees">˚C</span>
          </div>
        </div>

        <div className="col-6 Leftside">
          <div className="">Wind: {Math.round(props.data.wind)} km/h</div>
          <div className="">Visibility:{props.data.visibility} </div>
          <div className="">Humidity: {props.data.humidity}%</div>
        </div>
      </div>
    </div>
  );
}
