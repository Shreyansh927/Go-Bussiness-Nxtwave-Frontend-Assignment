import { useNavigate } from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <header className="header">
      <p className="logo">Go Business</p>

      <div className="header-actions">
        <button className="trial-btn">Try for free</button>
        <button className="logout-btn" onClick={logout}>
          Log out
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
