import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white myFooter">
      <div className="container pt-3">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1 "
            href="https://www.facebook.com/ShokhBari"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1 "
            href="https://l.facebook.com/l.php?u=http%3A%2F%2Finstagram.com%2Fshokhbari%3Ffbclid%3DIwAR0ie39MepSKTDwYRZ4M4x4T9fNFn-022HARKcHsVTKrmsGUnBLJb_W2AG8&h=AT2SOS0g3vzTe7gcL7Duz7KoHh1fn2cBoEIXtW55nMKep85PUhg6OQ9jHh2LlABF9QRHMaxP0qYeOKl5zEm5IY4xaxYo4bKuOEijEhIhOqp_wJMjAG4T76fzA3CqasKAF5j4kQ"
            role="button"
            target="_blank"
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

      <div className="text-center">
        {/* <span>
          <Link to="/" className="footerLink">
            Terms & Conditions
          </Link>
        </span> */}
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
