import React from "react";

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <div className="logo">
            <img src="https://chefs2table-prod.pages.dev/static/media/logo.6770dd392fcaab29d6ce.png" alt="Logo" className="logo-img" />
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
