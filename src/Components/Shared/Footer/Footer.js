import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white myFooter">
      <div className="container pt-3">
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
      </div>

      <div className="text-center">
        <span>
          <Link to="/" className="footerLink">
            Terms & Conditions
          </Link>
        </span>
      </div>

      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright |
        <span className="text-white m-2 footerLink" to="/">
          FIESTA LIFE STYLE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
