import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo/logo.jpg";
import "./Navbar.css";

const MobileNavbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      id="MobileNavbar"
    >
      <div class="container-fluid">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list mobileHam"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active mobileMenu"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle active mobileMenu"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item mobileDropdown" to="/shoe">
                    Shoe
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item mobileDropdown" to="/bag">
                    Bag
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item mobileDropdown" to="/belt">
                    Belt
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item mobileDropdown" to="/wallet">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item mobileDropdown" to="/accessories">
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mobileMenu"
                aria-current="page"
                to="/"
              >
                About us
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active mobileMenu"
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
