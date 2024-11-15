import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form className="row">
        <input className="col-8" type="search " placeholder="Enter city....." />
        <input className="col-3 Search" type="Submit" />
      </form>

      <main>
        <div>
          <h1 className="City">City name</h1>
          <h3>description</h3>
          <div className="row">
            <div className="col">
              emoji
              <span className="Temperature"> 6</span>
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
}
