import React from "react";
import Logo from "../images/Logo.png";
import "../Style/Navbar.css";
import { Link, link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} />
      </div>
      <div className="rightside">
        <Link to="/"> Home</Link>
        <Link to="/Product"> Product</Link>
        <Link to="/About"> About</Link>
      </div>
    </div>
  );
}

export default Navbar;
