import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white myFooter">
      <div className="container pt-3">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1 "
            href="https://www.facebook.com/FiestaJapan"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 disabled"
            href="/"
            role="button"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1  "
            href="https://www.youtube.com/channel/UCmuAH1UPrPJS1othktSD12Q"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </section>
      </div>

      <div className="text-center"></div>

      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright |
        <span className="text-white m-2 footerLink" to="/">
          FiestaJapan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
