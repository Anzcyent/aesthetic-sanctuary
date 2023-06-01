import React from "react";
import "./ResponsiveNavbar.scss";

const ResponsiveNavbar = () => {
  return (
    <nav className="responsive-navbar">
      <div className="container">
        <h1>
          <a href="/">AeSanctuary</a>
        </h1>

        <ul className="menu">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#rendezvous">Rendezvous</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
