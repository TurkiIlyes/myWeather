import React from "react";
import "./InfoBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoBox = ({ title, info, icon ,color}) => {
  return (
    <div className="InfoBox">
      <div className="inside-box">
        <h3>{title}</h3>
        <div className="data-box">
          <FontAwesomeIcon icon={icon} className="data-icon" style={{color:color}} />
          <span>{info}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
