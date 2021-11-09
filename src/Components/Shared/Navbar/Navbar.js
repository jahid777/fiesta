import React from "react";
import logo from "../../../Image/logo/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <header>
        <div className="logo">
          <a className="navbar-brand" href="/">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li className="dropdown">
              <a class="dropbtn" href="#">
                Categories <i class="bi bi-chevron-down"></i>
              </a>
              <div class="dropdown-content">
                <a href="#">Bag</a>
                <a href="#">Belt</a>
                <a href="#">Wallet</a>
              </div>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="/contact_us">Contact us</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
