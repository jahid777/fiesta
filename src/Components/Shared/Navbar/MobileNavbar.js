import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo/logo.jpg";
import "./Navbar.css";

const MobileNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      id="MobileNavbar"
    >
      <div className="container-fluid">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list mobileHam"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active mobileMenu"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle active mobileMenu"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item mobileDropdown" to="/shoe">
                    Shoe
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mobileDropdown" to="/bag">
                    Bag
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mobileDropdown" to="/belt">
                    Belt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mobileDropdown" to="/wallet">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item mobileDropdown"
                    to="/accessories"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mobileMenu"
                aria-current="page"
                to="/"
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mobileMenu"
                aria-current="page"
                to="/contact_us"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
