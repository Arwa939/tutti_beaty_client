import React from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">

      {/* LEFT SIDE */}
      <div className="left">
        <img src={logo} alt="Tutti Beauty Logo" className="logo"/>
      </div>

      {/* RIGHT SIDE */}
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Login</a>
      </nav>

    </header>
  );
}

export default Header;