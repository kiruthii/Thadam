import React from "react";
import thadam from '../../../assets/thadamLogo.svg' 

const Footer = () => {
  return (
    <div className="text-white d-flex flex-column justify-content-between px-5 py-4" style={{ height: "200px", backgroundColor: "#bcdffb" }}>
      <div className="d-flex align-items-center">
        <img
          src={thadam}
          alt="logo"
          style={{ width: "200px" }}
        />
      </div>
      <p className="text-center small text-secondary mb-0">
        BUILT FOR PERFORMANCE • DRIVEN BY RELATIONSHIPS • CRAFTED WITH PRECISION
      </p>

    </div>
  );
};

export default Footer;