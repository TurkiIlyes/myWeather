import React from "react";
import "./ErrorAlert.css";
const ErrorAlert = ({ display, value }) => {
  return (
    <div className="ErrorAlert" style={{ display: display }}>
      <span>{value}</span>
    </div>
  );
};

export default ErrorAlert;
