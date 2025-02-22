import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper container">
        <div className="logo">
          <Link to='#'>
            <img src="/logo.svg" alt="Logo Raycast" />
          </Link>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="buttons">
          <Link to="#" className="log-in">
            Log In
          </Link>
          <Link to="#" className="download white-btn">
            <img src="/apple.svg" alt="Apple Icon" />
            <span>Download</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
