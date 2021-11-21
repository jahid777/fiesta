import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0pvscl",
        "template_mi91flp",
        e.target,
        "user_BPAoo38Zr93sXfSxOt19S"
      )
      .then(
        (result) => {
          if (result) {
            setMessage("your message successfully sent!");
            setTimeout(() => {
              setMessage("");
            }, 5000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="container my-5 py-3 contactMain">
      <div className="row">
        <div className="col-lg-12 text-center mb-3 contactHead">
          <h3 className="mb-3">Contact us</h3>
          <p>
            <i className="bi bi-geo-alt-fill"></i>
            <span className="contact-text">
              1-chōme-9-1 Kyōbashi, Chuo City, Tokyo 104-0031, Japonia 238
            </span>
          </p>

          <p className="contact-text">
            <span>
              <i className="bi bi-envelope-fill"></i> admin@fiestalifestyle.com
            </span>
            <span className="ContactInfo">
              <i className="bi bi-telephone-fill"></i> +8801841477361
            </span>
          </p>
          <hr className="ContactHr"></hr>
        </div>
        <div className="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.473588088822!2d139.77186767197688!3d35.678302652534505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be2b960449f%3A0xafa41af316f73ed7!2s1-ch%C5%8Dme-9-1%20Ky%C5%8Dbashi%2C%20Chuo%20City%2C%20Tokyo%20104-0031%2C%20Japonia!5e0!3m2!1sro!2sro!4v1637489444571!5m2!1sro!2sro"
            title="map"
            loading="lazy"
            style={{ width: "600px", height: "450px" }}
          ></iframe>
        </div>
        <form className="col" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control mt-2"
              id="inputName"
              placeholder="Your name"
              name="name"
              required
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="inputAddress">Phone Number</label>
            <input
              type="number"
              className="form-control mt-2"
              id="inputAddress"
              placeholder="Your phone"
              name="number"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control mt-2"
              id="inputEmail"
              placeholder="Your email"
              name="email"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="inputMessage">Message</label>
            <textarea
              type="text"
              className="form-control mt-2"
              id="inputMessage"
              placeholder="Type your message........"
              name="message"
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn mt-4 myBtn">
              Send
            </button>
          </div>
          <div>
            <p style={{ color: "green", fontWeight: "bold", marginTop: "5px" }}>
              {message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
