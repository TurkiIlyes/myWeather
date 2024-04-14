import React from "react";
import "./AirQuality.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const AirQuality = () => {
  const data = useSelector((state) => state);
  return (
    <div className="AirQuality">
      <div className="inside-box">
        <div className="air-header">
          <h3>air quality </h3>
          {/* <span className="air-con">good</span> */}
        </div>
        <div className="air-data">
          <FontAwesomeIcon icon={faWind} className="air-icon" />
          <div className="info-box">
            <span>PM25</span>
            <span>{data.current.air_quality.pm2_5}</span>
          </div>
          <div className="info-box">
            <span>SO2</span>
            <span>{data.current.air_quality.so2}</span>
          </div>
          <div className="info-box">
            <span>NO2</span>
            <span>{data.current.air_quality.no2}</span>
          </div>
          <div className="info-box">
            <span>O3</span>
            <span>{data.current.air_quality.o3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
