import React from "react";
import "./OtherDaysSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
const OtherDaysSwiper = () => {
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
    <Swiper
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
      }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="OtherDaysSwiper"
    >
      {data.forecastday.map((e, i) => {
        return (
          <SwiperSlide key={i} className="other-days-slide">
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default OtherDaysSwiper;
