import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <form className="" onSubmit="">
      <div>

        <div className="form-input">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div className="form-input">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div className="form-input">
          <label for="subject">Subject</label>
          <input type="text" id="subject" />
        </div>

        <label for="message-area">Message</label>

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
