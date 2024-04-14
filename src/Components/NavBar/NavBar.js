import React, { useRef } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchData } from "../../Redux/Actions/WeatherActions";
const NavBar = () => {
  const dispatch = useDispatch();
  const inputValue = useRef(null);
  const search = () => {
    dispatch(searchData(inputValue.current.value));
  };
  const getPos = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported in your device");
    }

    function success(position) {
      dispatch(
        searchData(`${position.coords.latitude},${position.coords.longitude}`)
      );
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };
  return (
    <div className="NavBar">
      <div className="pos">
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className="pos-icon"
          onClick={getPos}
        />
      </div>
      <div className="search-box">
        <input type="text" name="" id="" ref={inputValue} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
          onClick={search}
        />
      </div>
    </div>
  );
};

export default NavBar;
