import React from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function Header() {
  return (
    <header className="header">

      {/* LEFT SIDE */}
      <div className="left">
        <nav>
        <a href="/">Home</a>
        <a href="#">Products</a>
        <a href="/login">Login</a>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <nav>
        <a href="#" className="cart-icon">
          <FaShoppingCart />
        </a>
        <a href="#" className="cart-icon">
          <FaUser />
        </a>
      </nav>

    </header>
  );
}

export default Header;