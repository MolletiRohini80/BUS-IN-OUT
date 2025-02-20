import React, { useState } from "react";
import "../css/NewCompoCS.css";
import "../css/NNewCompo2CS.css"

import { useNavigate} from "react-router-dom";
import { BrowserRouter as Route,Router } from "react-router-dom";
import NewCompo2 from "./NewCompo2";
import  F2 from "./appli"
import AboutUs from "./AboutUs"
import Footer from "./chat"
// import logo from "./AUlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <>
    <header className="header">
      <div className="logo-section">
        <img src='/public/AUlogo.png' alt="Logo" className="logo" />
        {/* <span className="bus-text">Bus In/Out</span> */}
      </div>

      {/* Corrected the interpolation here */}
      <nav className={`nav-section ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#appli" className="nav-link" >Applications</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#footer" className="nav-link">Contact Us</a>
        {/* <button className="buty">
          <a href="/login" className="nav-link" id="log">Login</a>
        </button> */}
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
    <div id="home" style={{height:'100svh'}}><NewCompo2/></div>+
    <div id="appli"><F2/></div>
    <div id="about"><AboutUs/></div>
    <div id="footer"><Footer/></div>
    </>
  );
};

export default Header;



