import React from 'react'
import { Link,useNavigate } from "react-router-dom";

const DbNavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  }
  const handleStatus = () => {
    navigate("/status");
  }
  return (
        <div className="navbar">
      <div className="nav-left">
        <h2 className="logo-text">User DashBoard</h2>
      </div>
       <div className="nav-right">
        <Link to="/r">
          <button className="nav-btn login-btn">Request Form</button>
        </Link>
      <Link to="/status">
        <button className="nav-btn login-btn" onClick={handleStatus}>Request Status</button>
      </Link>
        <Link to="/">
          <button className="nav-btn signup-btn" onClick={handleLogOut}>Log Out</button>
        </Link>
      </div>

     
    </div>
  )
}

export default DbNavBar