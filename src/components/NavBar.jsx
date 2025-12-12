import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="logo-icon">🩸</span>
        <h2 className="logo-text">BLOOD BANK</h2>
      </div>

      <div className="nav-right">
        <Link to="/lo">
          <button className="nav-btn login-btn">Login</button>
        </Link>

        <Link to="/si">
          <button className="nav-btn signup-btn">SignUp</button>
        </Link>
        
      </div>
    </div>
  );
};

export default NavBar;