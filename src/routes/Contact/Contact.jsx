import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <form className="" onSubmit="">
      <div>

        <div className="form-input">
          <h3>Name</h3>
          <input type="text" id="name" />
        </div>

        <div className="form-input">
          <h3>Email</h3>
          <input type="email" id="name" />
        </div>

        <div className="form-input">
          <h3>Subject</h3>
          <input type="text" id="name" />
        </div>

        <h3>Message</h3>

        <div className="form-submit">
          <textarea id="message-area" rows="8" cols="64" />
          <button className="btn" type="submit">Send Message</button>
        </div>

      </div>
      </form>
    </div>
  )
}

export default Contact;
