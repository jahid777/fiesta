import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <header>
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li className="dropdown">
              <Link class="dropbtn" to="/">
                Categories <i class="bi bi-chevron-down"></i>
              </Link>
              <div class="dropdown-content">
                <Link to="/bag">Shoe</Link>
                <Link to="/bag">Bag</Link>
                <Link to="/bag">Belt</Link>
                <Link to="/bag">Wallet</Link>
              </div>
            </li>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="/contact_us">Contact us</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
