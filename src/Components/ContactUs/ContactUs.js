import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="row container-fluid mt-5">
      <div className="col-md-4">
        <form>
          <div className="form-group label-floating">
            <label className="control-label" for="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              required
              data-error="Please enter your name"
            />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group label-floating">
            <label className="control-label" for="email">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              required
              data-error="Please enter your Email"
            />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group label-floating">
            <label className="control-label">Subject</label>
            <input
              className="form-control"
              id="msg_subject"
              type="text"
              name="subject"
              required
              data-error="Please enter your message subject"
            />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group label-floating">
            <label for="message" className="control-label">
              Message
            </label>
            <textarea
              className="form-control"
              rows="3"
              id="message"
              name="message"
              required
              data-error="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="send-msg-btn mt-5">
            Send Message
          </button>
        </form>
      </div>
      {/* this is contact details */}
      <div
        className="col-md-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>Contact Us</h1>
      </div>
      <div
        className="col-md-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.1239191133086!2d90.3892901954968!3d23.738539922609323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c762aa8c59%3A0xd9d5fdfde912551f!2sUnicon%20Solution%20Ltd.!5e0!3m2!1sen!2sbd!4v1636362837999!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
