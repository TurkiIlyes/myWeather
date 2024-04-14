import React from "react";
import "./OtherDaysData.css";
import { useSelector } from "react-redux";
const OtherDaysData = () => {
  const data = useSelector((state) => state);
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="OtherDaysData">
      {data.forecastday.map((e, i) => {
        return (
          <div className="other-days-box" key={i}>
            <div className={`bg-style ${i === 0 ? `currentDay` : null}`}></div>
            <div className="content">
              <div className="data-content">
                <span>{e.day.avgtemp_c}°</span>
                <img
                  src={e.day.condition.icon}
                  alt=""
                  className={`${
                    e.day.condition.text === "Sunny" ? `img-rot` : `img-pop-up`
                  }`}
                />
              </div>

              <div
                className={`text-content ${i === 0 ? `currentDayText` : null}`}
              >
                <div>
                  <span>{daysList[new Date(e.date).getDay()]}</span>
                  <span>
                    m: {e.day.maxtemp_c}° l: {e.day.mintemp_c}°
                  </span>
                </div>
                <span>{e.day.condition.text}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OtherDaysData;
