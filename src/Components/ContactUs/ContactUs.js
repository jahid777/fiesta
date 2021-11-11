import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container my-5 py-3 contactMain">
      <div className="row">
        <div className="col-lg-12 text-center mb-3 contactHead">
          <h3 className="mb-3">Contact us</h3>
          <p>
            <i class="bi bi-geo-alt-fill"></i>
            <span>
              238 Dewan Menshion, New Elephant Road, 4th Floor, Dhaka-1205.
            </span>
          </p>
          <p>
            <span>
              <i class="bi bi-envelope-fill"></i> info@fiestaLeather.com
            </span>
            <span className="ContactInfo">
              <i class="bi bi-telephone-fill"></i> +88 0100000-0000
            </span>
          </p>
          <hr className="ContactHr"></hr>
        </div>
        <div className="col">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2400793652505!2d90.3901751!3d23.738816699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c762aa8c59%3A0xd9d5fdfde912551f!2sUnicon%20Solution%20Ltd.!5e0!3m2!1sbn!2sbd!4v1636442911626!5m2!1sbn!2sbd"
            style={{ width: "600px", height: "450px" }}
          ></iframe>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control mt-2"
              id="inputName"
              placeholder="Your name"
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control mt-2"
              id="inputAddress"
              placeholder="Your address"
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control mt-2"
              id="inputEmail"
              placeholder="Your email"
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="inputMessage">Message</label>
            <textarea
              type="text"
              className="form-control mt-2"
              id="inputMessage"
              placeholder="Type your message........"
            />
          </div>

          <div className="form-group">
            <button type="submit" class="btn mt-4 myBtn">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
