import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <span>&copy;{new Date().getFullYear()} I&T</span>
    </div>
  );
};

export default Footer;
