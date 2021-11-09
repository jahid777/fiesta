import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white myFooter">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links --> */}
      </div>

      <div className="text-center">
        <span>
          <Link to="/">Terms & Conditions</Link>
        </span>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright |
        <a className="text-white m-2" href="/">
          fiesta.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
