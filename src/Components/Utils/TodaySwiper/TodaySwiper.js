import React from "react";
import "./TodaySwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
const TodaySwiper = () => {
  const data = useSelector((state) => state);
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
      //   pagination={{ clickable: true }}
      //   navigation={{
      //     clickable: true,
      //   }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="today-swiper"
    >
      {data.forecastday[0].hour.map((e, i) => {
        return (
          <SwiperSlide key={i} className="Today-swiper-slide">
            <div
              className={`hourly-info ${
                new Date(e.time).getHours() ===
                new Date(data.location.localtime).getHours()
                  ? `currentHour`
                  : null
              }`}
            >
              <span>{e.time.slice(-5)}</span>
              <img src={e.condition.icon} alt="slide_image" />
              <span>{e.temp_c}°c</span>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default TodaySwiper;
