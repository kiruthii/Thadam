import React, { useEffect, useState } from "react";
import thadam from "../../../assets/thadamLogo.svg";
import Button from "../../../ui/button/Button";


const VITE_BACKEND_LIVE_BASE_URL = import.meta.env.VITE_BACKEND_LIVE_BASE_URL;

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleLogin = () => {
    window.location.href = `${VITE_BACKEND_LIVE_BASE_URL}/login`;
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
      <div className="d-flex align-items-center justify-content-between px-5 py-3 sticky-top"
        style={{
          backgroundColor: scroll ? "#bcdffb" : "transparent",
          transition: "all 0.3s ease",
          boxShadow: scroll ? "0 2px 10px rgba(0,0,0,0.08)" : "none"
        }}
      >
        <div>
          <img
            src={thadam}
            alt="logo"
            className="mb-3 mx-auto"
            style={{ width: "120px" }}
          />
        </div>
        <div>
          <Button
            className="btn btn-primary btn-lg w-100"
            onClick={handleLogin}
            buttonText="Get Started"
          />
        </div>
      </div>
  );
};
export default Header;
