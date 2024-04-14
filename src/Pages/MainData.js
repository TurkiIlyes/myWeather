import React from "react";
import TodayData from "../Components/TodayData/TodayData";
import TodayDetails from "../Components/Utils/TodayDetails/TodayDetails";
import OtherDaysSwiper from "../Components/Utils/OtherDaysSwiper/OtherDaysSwiper";
import "./MainData.css";
const MainData = () => {
  return (
    <div className="MainData">
      <TodayData />
      <div className="main-data-info">
        <TodayDetails />
        <OtherDaysSwiper />
      </div>
    </div>
  );
};

export default MainData;
