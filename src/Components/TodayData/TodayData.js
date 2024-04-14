import React, { useEffect, useState } from "react";
import "./TodayData.css";
import house from "../../IMG/house1.png";
import TodaySwiper from "../Utils/TodaySwiper/TodaySwiper";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import ErrorAlert from "../Utils/Alerts/Error/ErrorAlert";
const TodayData = () => {
  const data = useSelector((state) => state);

  const [errorAlert, setErrorAlert] = useState();
  useEffect(() => {
    data.error ? setErrorAlert("flex") : setErrorAlert("none");
    setTimeout(() => {
      setErrorAlert("none");
    }, 5000);
  }, [data]);

  return (
    <div className="TodayData">
      <NavBar />
      <div className="main-info">
        <div className="text-content">
          <span>{data.current.temp_c}°</span>
          <span>{data.current.condition.text}</span>
          <span>
            max: {data.forecastday[0].day.maxtemp_c}°c min:{" "}
            {data.forecastday[0].day.mintemp_c}°c
          </span>
        </div>
        <img src={house} alt="" />
      </div>
      <div className="specific-info">
        <div className="nav-info">
          <span>{data.location.name}</span>
          <span>{data.location.localtime.slice(-5)}</span>
        </div>
        <TodaySwiper />
      </div>
      <ErrorAlert display={errorAlert} value="please choose a valid adress" />
    </div>
  );
};

export default TodayData;
