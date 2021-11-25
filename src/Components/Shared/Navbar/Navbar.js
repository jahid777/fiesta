import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky-top" id="pcNavbar">
      <header>
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Link>
        </div>

        <div className="navigation" id="navbarNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link className="dropbtn" to="/">
                Categories <i className="bi bi-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <Link to="/bag">Bag</Link>
                <Link to="/belt">Belt</Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/shoe">Shoe</Link>
                <Link to="/accessories">Accessories</Link>
              </div>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
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
