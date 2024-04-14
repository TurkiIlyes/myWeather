import React from "react";
import "./SunriseSunset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const SunriseSunset = () => {
  const data = useSelector((state) => state);
  return (
    <div className="SunriseSunset">
      <div className="inside-box">
      <h3>Sunrise Sunset </h3>
      <div className="SunriseSunset-data">
        <div className="data-box">
          <FontAwesomeIcon icon={faSun} className="Sunrise-icon" />
          <div className="text-content">
            <span>Sunrise</span>
            <span>{data.forecastday[0].astro.sunrise}</span>
          </div>
        </div>

        <div className="data-box">
          <FontAwesomeIcon icon={faMoon} className="Sunset-icon" />
          <div className="text-content">
            <span>Sunset</span>
            <span>{data.forecastday[0].astro.sunset}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
