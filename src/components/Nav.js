import React from "react";
import logo from "../assets/logo.png"; // <-- update this to your logo file name

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", borderRadius: "12px" }} />
          </div>
          <div>
            <h1>Chefs2Table</h1>
            <small>Gourmet Meals - Incredible Deals.</small>
          </div>
        </div>

        <nav className="links">
          <a href="#chefs">Chefs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
