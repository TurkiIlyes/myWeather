import React from "react";
import "./TodayDetails.css";
import AirQuality from "../AirQuality/AirQuality";
import InfoBox from "../InfoBox/InfoBox";
import SunriseSunset from "../SunriseSunset/SunriseSunset";
import { useSelector } from "react-redux";
import {
  faDroplet,
  faEye,
  faTemperatureLow,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
const TodayDetails = () => {
  const data = useSelector((state) => state);
  return (
    <div className="TodayDetails">
      <div>
      <AirQuality />
      <InfoBox
        title="humidity"
        info={`${data.current.humidity}%`}
        icon={faDroplet}
        color={`peachpuff`}
      />
      <InfoBox
        title="pressure"
        info={`${data.current.pressure_mb}hPa`}
        icon={faWater}
        color={`skyblue`}
      />
      </div>
      <div>
      <SunriseSunset />
      <InfoBox
        title="visibility"
        info={`${data.current.vis_km}KM`}
        icon={faEye}
        color={`burlywood`}
      />
      <InfoBox
        title="feels like"
        info={`${data.current.feelslike_c}°c`}
        icon={faTemperatureLow}
        color={`palevioletred`}
      />
      </div>
    </div>
  );
};

export default TodayDetails;
