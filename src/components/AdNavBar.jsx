import React from 'react'
import { Link,useNavigate } from "react-router-dom";

const AdNavBar = () => {
     const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  }
  return (
     <div className="navbar">
      <div className="nav-left">
        <h2 className="logo-text">Admin DashBoard</h2>
      </div>
       <div className="nav-right">
        <Link to="/v">
          <button className="nav-btn login-btn">View Request </button>
        </Link>
         <Link to="/add">
          <button className="nav-btn login-btn">Add Donor</button>
        </Link>

        <Link to="/">
          <button className="nav-btn signup-btn" onClick={handleLogOut}>Log Out</button>
        </Link>
      </div>

    </div>
  )
}

export default AdNavBar